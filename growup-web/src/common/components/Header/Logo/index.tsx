import { Colors } from 'growup-ui';
import Heading1 from 'growup-ui/typography/Heading1';
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Logo: React.FC = () => {
  return (
    <Container to="/">
      <Heading1 color={Colors.brandGreen50} fontWeight="bold">
        ㄱㄹㅇ
      </Heading1>
    </Container>
  );
};

export default Logo;

const Container = styled(Link)`
  text-decoration: none;
`;
