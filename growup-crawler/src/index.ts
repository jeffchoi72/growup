import * as puppeteer from 'puppeteer';


(async () => {
  console.log("start puppetter");

  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto("https://www.google.co.kr/");
  await page.pdf({ path: "google.pdf" });

  await browser.close();

  console.log("close puppetter");
})();
