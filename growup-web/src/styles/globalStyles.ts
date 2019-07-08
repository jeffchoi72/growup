import { createGlobalStyle, css } from 'styled-components';

const fontStyles = css`
  @font-face {
    font-family: "SpoqaHanSans";
    font-weight: 700;
    src: local("Spoqa Han Sans Bold"),
      url("/fonts/SpoqaHanSansBold.woff2") format("woff2"),
      url("/fonts/SpoqaHanSansBold.woff") format("woff"),
      url("/fonts/SpoqaHanSansBold.ttf") format("truetype");
  }
  @font-face {
    font-family: "SpoqaHanSans";
    font-weight: 400;
    src: local("Spoqa Han Sans Regular"),
      url("/fonts/SpoqaHanSansRegular.woff2") format("woff2"),
      url("/fonts/SpoqaHanSansRegular.woff") format("woff"),
      url("/fonts/SpoqaHanSansRegular.ttf") format("truetype");
  }
  @font-face {
    font-family: "SpoqaHanSans";
    font-weight: 300;
    src: local("Spoqa Han Sans Light"),
      url("/fonts/SpoqaHanSansLight.woff2") format("woff2"),
      url("/fonts/SpoqaHanSansLight.woff") format("woff"),
      url("/fonts/SpoqaHanSansLight.ttf") format("truetype");
  }
`;

const GlobalStyle = createGlobalStyle`
  ${fontStyles};

  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: 'SpoqaHanSans';
  }
`;

export default GlobalStyle;
