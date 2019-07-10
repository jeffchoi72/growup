import { css } from 'styled-components';

import { slate50 } from '../../Colors';

export interface TextStyleProperties {
  fontWeight?: string | number;
  color?: string;
}

export const display1 = css<TextStyleProperties>`
  font-size: 48px;
  font-weight: ${props => props.fontWeight || "normal"};
  color: ${props => props.color || slate50};
  margin: 0;
`;

export const display2 = css<TextStyleProperties>`
  font-size: 32px;
  font-weight: ${props => props.fontWeight || "normal"};
  color: ${props => props.color || slate50};
  margin: 0;
`;

export const heading1 = css<TextStyleProperties>`
  font-size: 22px;
  font-weight: ${props => props.fontWeight || "normal"};
  color: ${props => props.color || slate50};
  margin: 0;
`;

export const heading2 = css<TextStyleProperties>`
  font-size: 18px;
  font-weight: ${props => props.fontWeight || "normal"};
  color: ${props => props.color || slate50};
  margin: 0;
`;

export const body1 = css<TextStyleProperties>`
  font-size: 16px;
  font-weight: ${props => props.fontWeight || "normal"};
  color: ${props => props.color || slate50};
  margin: 0;
`;

export const body2 = css<TextStyleProperties>`
  font-size: 14px;
  font-weight: ${props => props.fontWeight || "normal"};
  color: ${props => props.color || slate50};
  margin: 0;
`;

export const caption1 = css<TextStyleProperties>`
  font-size: 12px;
  font-weight: ${props => props.fontWeight || "normal"};
  color: ${props => props.color || slate50};
  margin: 0;
`;

export const caption2 = css<TextStyleProperties>`
  font-size: 11px;
  font-weight: ${props => props.fontWeight || "normal"};
  color: ${props => props.color || slate50};
  margin: 0;
`;
