import React from 'react';
import styled from 'styled-components';

import Logo from '../../../common/components/Logo';
import Navigation, { NavigationDirection } from '../../../common/components/Navigation';
import { NAVIGATION_ITEMS } from '../../../common/components/Navigation/constants';

const HomePage: React.FC = () => {
  return (
    <Container>
      <SideSection>
        <LogoWrapper>
          <Logo />
        </LogoWrapper>
        <Navigation
          direction={NavigationDirection.vertical}
          items={NAVIGATION_ITEMS}
        />
      </SideSection>
      <MainContainer>Main Container</MainContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  padding-top: 40px;
`;

const LogoWrapper = styled.div`
  margin-bottom: 50px;
`;

const SideSection = styled.aside`
  padding: 0 50px;
`;

const MainContainer = styled.div`
  padding: 0 80px;
`;

export default HomePage;
