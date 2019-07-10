import React from 'react';
import styled, { css, FlattenInterpolation, ThemedStyledProps } from 'styled-components';

import { body1, body2, caption1, caption2, display1, display2, heading1, heading2, TextStyleProperties } from './textStyles';

// Display1
// Display2
// Headling1
// Headling2
// Body1
// Body2
// Caption1
// Caption2

export enum TYPOGRAPHY_TYPE {
  Display1 = "h1",
  Display2 = "h2",
  Heading1 = "h3",
  Heading2 = "h4",
  Body1 = "p",
  Body2 = "p",
  Caption1 = "span",
  Caption2 = "span"
}

const TYPOGRAPHY_CSS_BY_TYPE: {
  [key: string]: FlattenInterpolation<
    ThemedStyledProps<TextStyleProperties, any>
  >;
} = {
  [TYPOGRAPHY_TYPE.Display1]: display1,
  [TYPOGRAPHY_TYPE.Display2]: display2,
  [TYPOGRAPHY_TYPE.Heading1]: heading1,
  [TYPOGRAPHY_TYPE.Heading2]: heading2,
  [TYPOGRAPHY_TYPE.Body1]: body1,
  [TYPOGRAPHY_TYPE.Body2]: body2,
  [TYPOGRAPHY_TYPE.Caption1]: caption1,
  [TYPOGRAPHY_TYPE.Caption2]: caption2
};

interface OwnProps {
  type: TYPOGRAPHY_TYPE;
}

export interface TypographyProps {
  className?: string;
  color?: string;
  textAlign?: string;
  fontWeight?: string;
  children?: React.ReactNode;
}

type Props = OwnProps & TypographyProps;

const Typography: React.FC<Props> = props => {
  const { type, children, ...restProps } = props;

  return (
    <TextElement as={type} type={type} {...restProps}>
      {children}
    </TextElement>
  );
};

const customStyle = css<{ textAlign?: string }>`
  margin: 0;
  ${props => props.textAlign && `text-align: ${props.textAlign}`};
`;

const TextElement = styled.div<Props>`
  ${props => TYPOGRAPHY_CSS_BY_TYPE[props.type]}
  ${customStyle}
`;

export default React.memo(Typography);
