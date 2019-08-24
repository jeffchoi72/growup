import React from 'react';
import { Provider } from 'react-redux';

import RootRouter from './pages';
import Store from './store';
import GlobalStyle from './styles/globalStyles';

const store = Store();

const Root: React.FC = () => {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <RootRouter />
    </Provider>
  );
};

export default Root;
