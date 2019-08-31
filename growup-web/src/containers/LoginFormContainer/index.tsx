import React, { useState } from 'react';
import { connect } from 'react-redux';
import * as yup from 'yup';

import { authApi } from '../../common/api';
import browserStore from '../../common/utils/browserStore';
import LoginForm from '../../components/auth/AuthModal/LoginForm';
import { AppState } from '../../store/reducers';
import { sessionActions } from '../../store/session';
import { SessionState } from '../../store/session/reducer';

export interface AuthFormValueError {
  error: boolean;
  message: string;
}

interface OwnProps {
  hideModal: () => void;
}
interface StateProps {
  session: SessionState;
}

interface DispatchProps {
  fetchSuccessSession: typeof sessionActions.fetchSuccessSession;
}

type Props = OwnProps & StateProps & DispatchProps;

const LoginFormContainer: React.FC<Props> = ({
  hideModal,
  session,
  fetchSuccessSession
}) => {
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
        const { message } = response.data;
        const { authToken, user } = response.data.data!;
        browserStore.set("auth-token", authToken);
        fetchSuccessSession({
          message,
          authTokenId: authToken,
          myProfile: user
        });
        hideModal();
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

const mapStateToProps = (state: AppState) => {
  const { session } = state;

  return {
    session
  };
};

const mapDispatchToProps = {
  fetchSuccessSession: sessionActions.fetchSuccessSession
};

export default connect<StateProps, DispatchProps, OwnProps, AppState>(
  mapStateToProps,
  mapDispatchToProps
)(LoginFormContainer);
