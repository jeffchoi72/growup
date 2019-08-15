import React from 'react';
import styled from 'styled-components';

import Header from '../common/components/Header';

const HomePage: React.FC = () => {
  return (
    <Container>
      <Header />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
`;

export default HomePage;
