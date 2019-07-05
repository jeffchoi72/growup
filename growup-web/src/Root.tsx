import React from 'react';
import { createGlobalStyle } from 'styled-components';

import RootRouter from './domain/RootRouter';

const Root: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <RootRouter />
    </>
  );
};

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
  }
`;

export default Root;
