import React, { useState } from 'react';
import * as yup from 'yup';

import { authApi } from '../../common/api';
import LoginForm from '../../components/auth/AuthModal/LoginForm';

export interface AuthFormValueError {
  error: boolean;
  message: string;
}

const LoginFormContainer: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [emailError, setEmailError] = useState<AuthFormValueError>({
    error: false,
    message: ""
  });

  const [password, setPassword] = useState<string>("");
  const [passwordError, setPasswordError] = useState<AuthFormValueError>({
    error: false,
    message: ""
  });

  const handleChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.currentTarget.value);
  };

  const handleChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.currentTarget.value);
  };

  const handleSubmit = async (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    const emailSchema = yup
      .string()
      .email()
      .required();
    const passwordSchema = yup
      .string()
      .min(8)
      .required();

    const isValidEmailValue = await emailSchema.isValid(email);

    if (!isValidEmailValue) {
      setEmailError({ error: true, message: "이메일 양식으로 입력해 주세요" });
      return;
    }

    setEmailError({ error: false, message: "" });

    const isValidPasswordValue = await passwordSchema.isValid(password);

    if (!isValidPasswordValue) {
      setPasswordError({
        error: true,
        message: "비밀번호는 8자리 이상이어야 합니다"
      });
      return;
    }

    setPasswordError({ error: false, message: "" });

    const response = await authApi.requestSignIn({ email, password });

    switch (response.status) {
      case 200: // 성공적으로 로그인 되었을 때
        // utils/browserStore.setAuthToken을 한다.
        // redux 전체 상태로 만들어 버린다.
        break;
      case 400: // 요청 데이터가 올바르지 않을때
        alert("요청한 데이터가 올바르지 않습니다.");
        break;
      case 404: // 해당 이메일과 비밀번호로 계정이 조회되지 않을때
        alert("이메일 또는 비밀번호가 일치하지 않습니다.");
        break;
    }
  };

  return (
    <LoginForm
      email={email}
      password={password}
      handleChangeEmail={handleChangeEmail}
      handleChangePassword={handleChangePassword}
      emailError={emailError}
      passwordError={passwordError}
      handleSubmit={handleSubmit}
    />
  );
};

export default LoginFormContainer;
