import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import HomePage from './HomePage';

const RootPage: React.FC = () => {
  return (
    <BrowserRouter>
      <HomePage />
    </BrowserRouter>
  );
};

export default RootPage;
