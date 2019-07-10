import React from 'react';

import Typography, { TYPOGRAPHY_TYPE, TypographyProps } from '.';

const Caption2: React.FC<TypographyProps> = props => {
  const { children, ...restProps } = props;

  return (
    <Typography type={TYPOGRAPHY_TYPE.Caption2} {...restProps}>
      {children}
    </Typography>
  );
};

export default React.memo(Caption2);
