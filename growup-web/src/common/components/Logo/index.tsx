import React from 'react';
import styled from 'styled-components';

import * as Colors from '../../../growup-ui/Colors';
import Display2 from '../../../growup-ui/typography/Display2';

const Logo: React.FC = () => {
  return <Container>ㄱㄹㅇ</Container>;
};

const Container = styled(Display2)`
  color: ${Colors.brandGreen50};
  font-weight: bold;
  cursor: pointer;
`;

export default React.memo(Logo);
