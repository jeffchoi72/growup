import React from 'react';
import styled from 'styled-components';

import Logo from '../../../common/components/Logo';
import Navigation, { NavigationDirection } from '../../../common/components/Navigation';
import { NAVIGATION_ITEMS } from '../../../common/components/Navigation/constants';
import ServiceIntro from '../../../common/components/ServiceIntro';
import Heading1 from '../../../growup-ui/typography/Heading1';
import CurationPostsContainer from '../container/CurationPostsContainer';

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
      <MainSection>
        <ServiceIntroWrapper>
          <ServiceIntro />
        </ServiceIntroWrapper>
        <CurationPostsWrapper>
          <Heading1 fontWeight="bold">ALL</Heading1>
          <CurationPostsContainer />
        </CurationPostsWrapper>
      </MainSection>
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

const MainSection = styled.div`
  flex: 1;
  padding-right: 50px;
  padding: 0 50px;
`;

const CurationPostsWrapper = styled.div`
  width: 100%;
  margin-top: 50px;
`;

const ServiceIntroWrapper = styled.div`
  margin-top: 60px;
`;

export default HomePage;
