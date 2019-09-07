import React from 'react';
import styled from 'styled-components';

interface Props {
  thumbnailURL: string;
}

const Thumbnail: React.FC<Props> = ({ thumbnailURL }) => {
  return (
    <picture>
      <Image src={thumbnailURL} />
    </picture>
  );
};

const Image = styled.img`
  width: 100%;
  object-fit: cover;
  height: 224px;
`;

export default Thumbnail;
