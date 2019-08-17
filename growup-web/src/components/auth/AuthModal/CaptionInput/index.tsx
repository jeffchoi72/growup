import React from 'react';
import styled from 'styled-components';

import * as Colors from '../../../../growup-ui/Colors';
import Body1 from '../../../../growup-ui/typography/Body1';

export enum InputType {
  text = "text",
  password = "password"
}

interface Props {
  type: InputType;
  captionText: string;
  placeholderText?: string;
}

const CaptionInput: React.FC<Props> = ({
  type,
  captionText,
  placeholderText
}) => {
  return (
    <div>
      <CaptionText color={Colors.slate30}>{captionText}</CaptionText>
      <Input type={type} placeholder={placeholderText} />
    </div>
  );
};

const CaptionText = styled(Body1)`
  margin-bottom: 4px;
`;

const Input = styled.input`
  width: 100%;
  height: 50px;
  outline: none;
  padding: 0 8px;
  font-size: 16px;
  border-radius: 3px;
  border: 1px solid #c4c4c4;
  color: #494949;
`;

export default CaptionInput;
