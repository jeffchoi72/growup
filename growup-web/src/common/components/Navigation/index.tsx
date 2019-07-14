import React from 'react';
import styled from 'styled-components';

import Item from './Item';

export enum NavigationDirection {
  vertical = "column",
  horizontal = "row"
}

export interface NavigationItem {
  text: string;
  to: string;
}

interface Props {
  direction: NavigationDirection;
  items: NavigationItem[];
}

const Navigation: React.FC<Props> = ({ direction, items }) => {
  return (
    <Container direction={direction}>
      {items.map(item => (
        <Item key={item.to} item={item} />
      ))}
    </Container>
  );
};

const Container = styled.div<{ direction: NavigationDirection }>`
  display: flex;
  flex-direction: ${props => props.direction};
`;

export default React.memo(Navigation);
