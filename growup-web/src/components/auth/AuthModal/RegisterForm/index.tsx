import React from 'react';
import styled from 'styled-components';

import CaptionInput, { InputType } from '../CaptionInput';

const RegisterForm: React.FC = () => {
  return (
    <Container>
      <InputContainer>
        <CaptionInputWrapper marginBottom={8}>
          <CaptionInput type={InputType.text} captionText="이메일" />
        </CaptionInputWrapper>
        <CaptionInputWrapper marginBottom={0}>
          <CaptionInput
            type={InputType.password}
            captionText="비밀번호 ( 4자리 이상 )"
          />
        </CaptionInputWrapper>
      </InputContainer>
      <SubmitButton>회원가입</SubmitButton>
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

export default RegisterForm;
