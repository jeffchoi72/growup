import React from 'react';
import { MdClear } from 'react-icons/md';
import styled from 'styled-components';

interface Props {
  handleClickCloseIcon: () => void;
}

const ActionBar: React.FC<Props> = ({ handleClickCloseIcon }) => {
  return (
    <Container>
      <CloseIcon size={24} onClick={handleClickCloseIcon} />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 16px;
`;

const CloseIcon = styled(MdClear)`
  cursor: pointer;
`;

export default ActionBar;
