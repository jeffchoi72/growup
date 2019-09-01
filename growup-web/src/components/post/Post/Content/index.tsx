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
    <div>
      <Title color={Colors.slate50}>{title}</Title>
      <Body2 color={Colors.slate30}>{description}</Body2>
    </div>
  );
};

export default Content;

const Title = styled(Heading2)`
  font-weight: bold;
  margin-bottom: 6px;
`;
