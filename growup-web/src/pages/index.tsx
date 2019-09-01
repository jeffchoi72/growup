import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import HomePage from './HomePage';

const RootPage: React.FC = () => {
  return (
    <BrowserRouter>
      <Route path="/" component={HomePage} />
    </BrowserRouter>
  );
};

export default RootPage;
