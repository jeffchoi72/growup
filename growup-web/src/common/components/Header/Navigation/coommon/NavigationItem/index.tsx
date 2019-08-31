import { Colors } from 'growup-ui';
import Body1 from 'growup-ui/typography/Body1';
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

interface Props {
  className?: string;
  to: string;
  text: string;
  handleClick?: () => void;
}

const NavigationItem: React.FC<Props> = ({
  className,
  to,
  text,
  handleClick
}) => {
  return (
    <Container to={to} className={className} onClick={handleClick}>
      <Body1 color={Colors.slate50}>{text}</Body1>
    </Container>
  );
};

export default NavigationItem;

const Container = styled(Link)`
  text-decoration: none;
`;
