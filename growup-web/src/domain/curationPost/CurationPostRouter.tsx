import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import CurationPostsContainer from './container/CurationPostsContainer';

const CurationPostRouter = () => {
  return (
    <BrowserRouter>
      <Route exact path="/" component={CurationPostsContainer} />
    </BrowserRouter>
  );
};

export default CurationPostRouter;
