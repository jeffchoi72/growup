import Body1 from 'growup-ui/typography/Body1';
import React from 'react';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import styled from 'styled-components';

import { NavigationItem } from '..';

interface Props {
  item: NavigationItem;
}

const Item: React.FC<Props> = ({ item }) => {
  return <Container>{item.text}</Container>;
};

const Container = styled(Body1)`
  cursor: pointer;
  color: ${Colors.slate30};
  margin-bottom: 20px;
  padding-left: 5px;
`;

export default React.memo(Item);
