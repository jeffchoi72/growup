import { Colors } from 'growup-ui';
import Body2 from 'growup-ui/typography/Body2';
import React from 'react';
import styled from 'styled-components';

interface Props {}

const MyStoreSaveButton: React.FC<Props> = () => {
  return (
    <Button>
      <Body2 color={Colors.white}>내 서재에 보관하기</Body2>
    </Button>
  );
};

export default MyStoreSaveButton;

const Button = styled.button`
  width: 100%;
  color: ${Colors.white};
  background-color: ${Colors.brandGreen30};
  border: 1px solid ${Colors.brandGreen30};
  margin-top: 24px;
  padding: 8px 0;
  border-radius: 3px;
  cursor: pointer;
  outline: none;
`;
