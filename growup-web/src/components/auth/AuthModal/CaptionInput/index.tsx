import React from 'react';
import { MdError } from 'react-icons/md';
import styled from 'styled-components';

import * as Colors from '../../../../growup-ui/Colors';
import Body1 from '../../../../growup-ui/typography/Body1';
import Caption2 from '../../../../growup-ui/typography/Caption2';

export enum InputType {
  text = "text",
  password = "password"
}

interface Props {
  type: InputType;
  captionText: string;
  placeholderText?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  errorObject?: { error: boolean; message: string };
}

const CaptionInput: React.FC<Props> = ({
  type,
  captionText,
  placeholderText,
  value,
  onChange,
  errorObject
}) => {
  return (
    <div>
      <CaptionText color={Colors.slate30}>{captionText}</CaptionText>
      <Input
        type={type}
        placeholder={placeholderText}
        value={value}
        onChange={onChange}
        isError={errorObject!.error}
      />
      {errorObject!.error && (
        <ErrorMessageContainer>
          <ErrorIcon color="ff5858" size={14} />
          <ErrorMessage>{errorObject!.message}</ErrorMessage>
        </ErrorMessageContainer>
      )}
    </div>
  );
};

const CaptionText = styled(Body1)`
  margin-bottom: 4px;
`;

const Input = styled.input<{ isError?: boolean }>`
  width: 100%;
  height: 50px;
  outline: none;
  padding: 0 8px;
  font-size: 16px;
  border-radius: 3px;
  border: 1px solid ${props => (props.isError ? "#ff5858" : "#c4c4c4")};
  color: #494949;
`;

const ErrorMessageContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 8px;
`;

const ErrorIcon = styled(MdError)`
  margin-right: 4px;
`;

const ErrorMessage = styled(Caption2)`
  color: #ff5858;
`;

export default CaptionInput;
