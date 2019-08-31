import React from 'react';

import NavigationItem from '../coommon/NavigationItem';

interface Props {
  openAuthModal: () => void;
}

const AuthNavigation: React.FC<Props> = ({ openAuthModal }) => {
  return <NavigationItem to="/" text="로그인" handleClick={openAuthModal} />;
};

export default AuthNavigation;
