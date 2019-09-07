import { Colors } from 'growup-ui';
import Body2 from 'growup-ui/typography/Body2';
import Heading2 from 'growup-ui/typography/Heading2';
import React from 'react';
import styled from 'styled-components';

interface Props {
  title: string;
  description: string;
}

const Content: React.FC<Props> = ({ title, description }) => {
  return (
    <Container>
      <Title color={Colors.slate50}>{title}</Title>
      <Description color={Colors.slate30}>{description}</Description>
    </Container>
  );
};

export default Content;

const Container = styled.div`
  min-height: 124px;
`;

const Title = styled(Heading2)`
  font-weight: bold;
  margin-bottom: 6px;
`;

const Description = styled(Body2)`
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;
