import React from 'react';
import styled from 'styled-components';

import CurationPostsContainer from '../container/CurationPostsContainer';

const HomePage: React.FC = () => {
  return (
    <Container>
      <CurationPostsContainer />
    </Container>
  );
};

const Container = styled.div`
  width: 1200px;
  margin: 0 auto;
  padding-top: 50px;
`;

export default HomePage;
