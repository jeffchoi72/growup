import { Author } from 'common/api/post.api';
import { Colors } from 'growup-ui';
import Body2 from 'growup-ui/typography/Body2';
import React from 'react';
import styled from 'styled-components';

interface Props {
  author: Author;
}

const AuthorProfile: React.FC<Props> = ({ author }) => {
  const { name, iconUrl } = author;
  return (
    <Container>
      <ImageWrapper>
        <Image src={iconUrl} />
      </ImageWrapper>
      <Body2 color={Colors.slate20}>{name}</Body2>
    </Container>
  );
};

export default AuthorProfile;

const Container = styled.div`
  display: flex;
  align-items: center;
  margin-top: 12px;
`;

const ImageWrapper = styled.picture`
  display: flex;
  align-items: cetner;
`;

const Image = styled.img`
  object-fit: cover;
  width: 24px;
  height: 24px;
  border-radius: 100%;
  border: 1px solid ${Colors.brandGreen10};
  margin-right: 8px;
`;
