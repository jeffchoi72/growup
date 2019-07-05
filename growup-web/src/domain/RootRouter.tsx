import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import CurationPostRouter from './curationPost/CurationPostRouter';

const RootRouter: React.FC = () => {
  return (
    <BrowserRouter>
      <CurationPostRouter />
    </BrowserRouter>
  );
};

export default RootRouter;
