import * as puppeteer from 'puppeteer';

import { apis } from '../library';

interface Category {
  name: string;
}

interface CrawlerData {
  postURL?: string;
  thumbnail?: string;
  title?: string;
  content?: string;
  categories?: Category[];
  author?: string;
}

interface Content {
  content: string;
  stringLength: number;
}

// const GET_DATA_LENGTH = 1849;
const GET_DATA_LENGTH = 1000;

class TtimesCrawler {
  private static targetURL = "http://www.ttimes.co.kr/index.html?menu=business";

  public startCrawling = async () => {
    console.log("start crawling");

    const browser = await puppeteer.launch({ headless: true });
    const targetPage = await browser.newPage();

    await targetPage.goto(TtimesCrawler.targetURL);

    await targetPage.evaluate(`(async () => {
      await new Promise((resolve, reject) => {
        let totalHeight = 0;
        let distance = 10000;

        const timer = setInterval(() => {
          const scrollHeight = document.body.scrollHeight;
          window.scrollBy(0, distance);
          totalHeight += distance;

          if (document.querySelector(".list_p1").querySelectorAll("li").length>=${GET_DATA_LENGTH}) {
            clearInterval(timer);
            resolve();
          }
        }, 800);
      });
    })()`);

    const posts = await targetPage.evaluate(() => {
      let results: CrawlerData[] = [];

      const items = document.querySelector(".list_p1").querySelectorAll("li");

      items.forEach(item => {
        const thumbnailDataSrc = item
          .querySelector(".thum > img")
          .getAttribute("data-src");
        const thumbnail = item.querySelector(".thum > img").getAttribute("src");

        console.log("thumbnail: ", thumbnail);
        const title = item.querySelector(".cont > .tit").textContent;

        results.push({
          postURL: `http://www.ttimes.co.kr/view.html?no=${item.getAttribute(
            "id"
          )}`,
          thumbnail: thumbnailDataSrc || thumbnail,
          title,
          categories: [
            {
              name: "Busniness"
            }
          ],
          author: "a24fd45Ta23"
        });
      });

      return results;
    });

    const promises = [];

    for (let i = 0; i < posts.length; i++) {
      promises.push(
        browser.newPage().then(async page => {
          console.log("페이지 오픈!");
          await page.goto(posts[i].postURL, {
            timeout: 0
          });

          const content = await page.evaluate(() => {
            const getContentByMaxStringLength = (contents: Content[]) => {
              let maxContent: Content = {
                content: "",
                stringLength: 0
              };

              for (let i = 0; i < contents.length; i++) {
                const content = contents[i];
                const isTrashText =
                  "페이스북트위터카카오톡url주소복사공유더보기카카오스토리밴드링크드인구글플러스텀블러닫기" ===
                  content.content.replace(/\s/gi, "");

                const isSNSText = content.content
                  .replace(/\s/gi, "")
                  .includes(
                    "페이스북트위터카카오톡url주소복사공유더보기카카오스토리밴드링크드인구글플러스텀블러닫기스크랩수"
                  );

                if (
                  content.stringLength >= maxContent.stringLength &&
                  !isTrashText &&
                  !isSNSText
                ) {
                  maxContent = content;
                }
              }

              return maxContent.content;
            };

            const dom1 = document.querySelector(".textBody > .cont")
              ? document.querySelector(".textBody > .cont")
              : { textContent: "" };
            const dom2 = document.querySelector(".textBody > div")
              ? document.querySelector(".textBody > div")
              : { textContent: "" };
            const dom3 = document.querySelector(".textBody > div > div")
              ? document.querySelector(".textBody > div > div")
              : { textContent: "" };
            const dom4 =
              document.querySelectorAll(".textBody > p").length >= 2
                ? document.querySelectorAll(".textBody > p")[1]
                : { textContent: "" };

            const contents: Content[] = [
              {
                content: dom1.textContent.trim(),
                stringLength: dom1.textContent.replace(/\s/gi, "").length
              },
              {
                content: dom2.textContent.trim(),
                stringLength: dom2.textContent.replace(/\s/gi, "").length
              },
              {
                content: dom3.textContent.trim(),
                stringLength: dom3.textContent.replace(/\s/gi, "").length
              },
              {
                content: dom4.textContent.trim(),
                stringLength: dom4.textContent.replace(/\s/gi, "").length
              }
            ];

            return getContentByMaxStringLength(contents);
          });

          posts[i].content = content;

          await page.close();
          console.log("page post: ", posts[i]);
          console.log("페이지 종료!");
          return page;
        })
      );
    }

    try {
      await Promise.all(promises);
    } catch (error) {
      console.log("error: ", error.message);
    }

    await console.log("posts: ", posts);
    await console.log("posts length: ", posts.length);

    // fs.writeFileSync("data.json", posts);

    try {
      console.log("posts 데이터 저장 중");
      await apis.addPost(posts);
    } catch (error) {
      console.error("posts 데이터 저장 실패!");
    }

    await console.log("end crawling");
    await browser.close();
  };
}

export default TtimesCrawler;
