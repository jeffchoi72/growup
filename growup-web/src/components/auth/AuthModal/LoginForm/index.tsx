import React from 'react';
import styled from 'styled-components';

import { AuthFormValueError } from '../../../../containers/LoginFormContainer';
import CaptionInput, { InputType } from '../CaptionInput';

interface Props {
  email: string;
  handleChangeEmail: (event: React.ChangeEvent<HTMLInputElement>) => void;
  password: string;
  handleChangePassword: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
  emailError: AuthFormValueError;
  passwordError: AuthFormValueError;
}

const LoginForm: React.FC<Props> = ({
  email,
  handleChangeEmail,
  password,
  handleChangePassword,
  handleSubmit,
  emailError,
  passwordError
}) => {
  return (
    <Container>
      <InputContainer>
        <CaptionInputWrapper marginBottom={8}>
          <CaptionInput
            type={InputType.text}
            captionText="이메일"
            value={email}
            onChange={handleChangeEmail}
            errorObject={emailError}
          />
        </CaptionInputWrapper>
        <CaptionInputWrapper marginBottom={0}>
          <CaptionInput
            type={InputType.password}
            captionText="비밀번호"
            value={password}
            onChange={handleChangePassword}
            errorObject={passwordError}
          />
        </CaptionInputWrapper>
      </InputContainer>
      <SubmitButton onClick={handleSubmit}>로그인</SubmitButton>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const InputContainer = styled.div`
  margin-bottom: 16px;
`;

const CaptionInputWrapper = styled.div<{ marginBottom: number }>`
  margin-bottom: ${props => props.marginBottom}px;
`;

const SubmitButton = styled.button`
  width: 100%;
  height: 50px;
  background-color: #2a6f43;
  border: 1px solid #2a6f43;
  border-radius: 3px;
  outline: none;
  font-size: 16px;
  color: white;
  cursor: pointer;
  font-weight: bold;
`;

export default LoginForm;
