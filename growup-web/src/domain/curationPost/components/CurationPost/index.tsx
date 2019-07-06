import React from 'react';
import styled from 'styled-components';

import { CurationPostType } from '../../../../common/api/post.api';

interface Props {
  curationPost: CurationPostType;
}

const CurationPost: React.FC<Props> = ({ curationPost }) => {
  const { title, content, thumbnail, postUrl } = curationPost;

  return (
    <Container>
      <Link href={postUrl}>
        <Image src={thumbnail} />
        <Figure>
          <Title>{title}</Title>
          <Content>{content}</Content>
        </Figure>
      </Link>
    </Container>
  );
};

const Container = styled.div`
  width: 340px;
  border: 1px solid #c8c8c8;
  border-radius: 3px;
`;

const Link = styled.a`
  text-decoration: none;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
`;

const Figure = styled.div`
  padding: 12px;
`;

const Title = styled.span`
  display: block;
  color: #222222;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 12px;
`;

const Content = styled.span`
  display: block;
  color: #222222;
  font-size: 18px;
`;

export default React.memo(CurationPost);
