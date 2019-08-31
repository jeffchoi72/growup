import React from 'react';
import Skeleton from 'react-loading-skeleton';

const SkeletonNavigation: React.FC = () => {
  return <Skeleton circle={true} height={32} width={32} />;
};

export default SkeletonNavigation;
