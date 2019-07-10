import React from 'react';

import Typography, { TYPOGRAPHY_TYPE, TypographyProps } from '.';

const Caption1: React.FC<TypographyProps> = props => {
  const { children, ...restProps } = props;

  return (
    <Typography type={TYPOGRAPHY_TYPE.Caption1} {...restProps}>
      {children}
    </Typography>
  );
};

export default React.memo(Caption1);
