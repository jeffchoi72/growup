import React from 'react';
import { Route } from 'react-router-dom';

import { HomePage } from './pages';

const CurationPostRouter = () => {
  return (
    <>
      <Route exact path="/" component={HomePage} />
    </>
  );
};

export default CurationPostRouter;
