import { MyProfile } from 'common/api/me.api';
import { Colors } from 'growup-ui';
import Body1 from 'growup-ui/typography/Body1';
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import NavigationItem from '../coommon/NavigationItem';

const DEFAULT_PROFILE_URL =
  "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png";

interface Props {
  myProfile: MyProfile;
}

const ProfileNavigation: React.FC<Props> = ({
  myProfile: { profileImageURL, name }
}) => {
  return (
    <>
      <StyledNavigationItem to="/me/libraries" text="내 서재" />
      <ProfileContainer to="/me">
        <ProfileImage imageURL={profileImageURL || DEFAULT_PROFILE_URL} />
        <Body1 color={Colors.slate50}>{name || "회원님"}</Body1>
      </ProfileContainer>
    </>
  );
};

export default ProfileNavigation;

const StyledNavigationItem = styled(NavigationItem)`
  margin-right: 24px;
`;

const ProfileContainer = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
`;

const ProfileImage = styled.div<{ imageURL: string }>`
  width: 32px;
  height: 32px;
  border-radius: 100%;
  background-image: url(${props => props.imageURL});
  background-size: cover;
  margin-right: 4px;
  border: 1px solid #e2e2e2;
`;
