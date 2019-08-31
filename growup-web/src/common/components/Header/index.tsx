import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createSelector } from 'reselect';
import styled from 'styled-components';

import AuthModal from '../../../components/auth/AuthModal';
import { AppState } from '../../../store/reducers';
import { fetchSession } from '../../../store/session/actions';
import { Status } from '../../../store/session/reducer';
import browserStore from '../../utils/browserStore';
import Logo from './Logo';
import Navigation from './Navigation';

const selectSession = createSelector(
  (state: AppState) => state.session,
  session => session
);

const Header: React.FC = () => {
  const [isVisibleAuthModal, setVisibleAuthModal] = useState(false);
  const dispatch = useDispatch();
  const session = useSelector(selectSession);

  useEffect(() => {
    const authTokenId = browserStore.get("auth-token");

    if (!authTokenId) {
      return;
    }

    dispatch(fetchSession({ authTokenId }));
  }, [dispatch]);

  const isLoading = session.status === Status.PENDING;
  const isLoggedIn = session.status === Status.SUCCESS;

  return (
    <>
      <Container>
        <Logo />
        <Navigation
          isLoading={isLoading}
          isLoggedIn={isLoggedIn}
          myProfile={session.myProfile}
          setVisibleAuthModal={() => setVisibleAuthModal(!isVisibleAuthModal)}
        />
      </Container>
      {isVisibleAuthModal ? (
        <AuthModal hideModal={() => setVisibleAuthModal(!isVisibleAuthModal)} />
      ) : null}
    </>
  );
};

const Container = styled.div`
  width: 100%;
  padding: 28px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export default Header;
