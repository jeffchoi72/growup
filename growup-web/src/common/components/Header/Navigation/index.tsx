import React from 'react';
import styled from 'styled-components';

import { MyProfile } from '../../../api/me.api';
import AuthNavigation from './AuthNavigation';
import ProfileNavigation from './ProfileNavigation';
import SkeletonNavigation from './SkeletonNavigation';

interface Props {
  isLoading: boolean;
  isLoggedIn: boolean;
  myProfile: MyProfile | null;
  setVisibleAuthModal: () => void;
}

const Navigation: React.FC<Props> = ({
  isLoading,
  isLoggedIn,
  myProfile,
  setVisibleAuthModal
}) => {
  if (isLoading) {
    return <SkeletonNavigation />;
  }

  if (isLoggedIn && myProfile) {
    return (
      <Container>
        <ProfileNavigation myProfile={myProfile} />
      </Container>
    );
  }

  return (
    <Container>
      <AuthNavigation openAuthModal={setVisibleAuthModal} />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
`;

export default Navigation;
