import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import * as Colors from '../../../growup-ui/Colors';
import Body1 from '../../../growup-ui/typography/Body1';
import Heading1 from '../../../growup-ui/typography/Heading1';

const Header: React.FC = () => {
  return (
    <Container>
      <Logo to="/">
        <Heading1 color={Colors.brandGreen50} fontWeight="bold">
          ㄱㄹㅇ
        </Heading1>
      </Logo>
      <NavigationContainer>
        <NavigationItem to="/login">
          <Body1 color={Colors.slate50}>로그인하기</Body1>
        </NavigationItem>
        <NavigationItem to="/login">
          <Body1 color={Colors.slate50}>내 서재</Body1>
        </NavigationItem>
        <NavigationItem to="/me">
          <ProfileContainer>
            <ProfileImage />
            <Body1 color={Colors.slate50}>최영훈</Body1>
          </ProfileContainer>
        </NavigationItem>
      </NavigationContainer>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  padding: 28px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled(Link)`
  text-decoration: none;
`;

const NavigationContainer = styled.div`
  display: flex;
  align-items: center;
`;

const NavigationItem = styled(Link)`
  text-decoration: none;
  margin-right: 24px;
  :last-child {
    margin-right: 0;
  }
`;

const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
`;

const ProfileImage = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 100%;
  background-image: url("https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500");
  background-size: cover;
  margin-right: 4px;
  border: 1px solid #e2e2e2;
`;

export default Header;
