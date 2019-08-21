import React from 'react';
import { Provider } from 'react-redux';

import RootRouter from './pages';
import GlobalStyle from './styles/globalStyles';

const Root: React.FC = () => {
  return (
    <Provider store={{} as any}>
      <GlobalStyle />
      <RootRouter />
    </Provider>
  );
};

export default Root;
