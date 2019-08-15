import React from 'react';

import RootRouter from './pages';
import GlobalStyle from './styles/globalStyles';

const Root: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <RootRouter />
    </>
  );
};

export default Root;
