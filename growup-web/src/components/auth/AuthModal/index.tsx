import React, { useState } from 'react';
import styled from 'styled-components';

import LoginFormContainer from '../../../containers/LoginFormContainer';
import * as Colors from '../../../growup-ui/Colors';
import Body2 from '../../../growup-ui/typography/Body2';
import Display2 from '../../../growup-ui/typography/Display2';
import Heading2 from '../../../growup-ui/typography/Heading2';
import ActionBar from './ActionBar';
import RegisterForm from './RegisterForm';

export enum AuthMode {
  Login = "Login",
  Register = "Register"
}

interface Props {
  hideModal: () => void;
}

const AuthModal: React.FC<Props> = ({ hideModal }) => {
  const [authMode, setAuthMode] = useState(AuthMode.Login);

  const handleClickAuthMode = () => {
    if (authMode === AuthMode.Login) {
      setAuthMode(AuthMode.Register);
    } else {
      setAuthMode(AuthMode.Login);
    }
  };

  return (
    <>
      <Container>
        <ActionBar handleClickCloseIcon={hideModal} />
        <TitleContainer>
          <Title color={Colors.slate50}>ㄱㄹㅇ</Title>
          <Description>
            {authMode === AuthMode.Login
              ? "바쁜 당신을 위한 콘텐츠 큐레이션 서비스"
              : "보고 싶은 콘텐츠를 무제한으로 서재에 등록해보자!"}
          </Description>
        </TitleContainer>
        {authMode === AuthMode.Login ? (
          <LoginFormContainer hideModal={hideModal} />
        ) : (
          <RegisterForm />
        )}
        <AuthModeTextButtonWrapper onClick={handleClickAuthMode}>
          <AuthModeTextButton color={Colors.slate30}>
            {authMode === AuthMode.Login ? "회원가입하기" : "로그인하기"}
          </AuthModeTextButton>
        </AuthModeTextButtonWrapper>
      </Container>
      <BackgroundContainer onClick={hideModal} />
    </>
  );
};

const Container = styled.div`
  width: 600px;
  height: 600px;
  background-color: white;
  border-radius: 4px;
  padding: 24px;
  z-index: 100;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;

  @media (max-width: 1024px) {
    width: 100%;
    height: 100vh;
    border-radius: 0px;
  }
`;

const BackgroundContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 32px;
`;

const Title = styled(Display2)`
  font-weight: bold;
  margin-bottom: 12px;
`;

const Description = styled(Heading2)``;

const AuthModeTextButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 16px;
`;

const AuthModeTextButton = styled(Body2)`
  cursor: pointer;
`;

export default AuthModal;
