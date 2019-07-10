import React from 'react';

import Typography, { TYPOGRAPHY_TYPE, TypographyProps } from '.';

const Body2: React.FC<TypographyProps> = props => {
  const { children, ...restProps } = props;

  return (
    <Typography type={TYPOGRAPHY_TYPE.Body2} {...restProps}>
      {children}
    </Typography>
  );
};

export default React.memo(Body2);
