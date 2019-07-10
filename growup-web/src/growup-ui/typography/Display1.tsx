import React from 'react';

import Typography, { TYPOGRAPHY_TYPE, TypographyProps } from '.';

const Display1: React.FC<TypographyProps> = props => {
  const { children, ...restProps } = props;

  return (
    <Typography type={TYPOGRAPHY_TYPE.Display1} {...restProps}>
      {children}
    </Typography>
  );
};

export default React.memo(Display1);
