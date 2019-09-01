import { BreakPoint } from 'growup-ui';
import React from 'react';
import styled from 'styled-components';

import Post from '../Post';

const PostList: React.FC = () => {
  return (
    <Container>
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </Container>
  );
};

const Container = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto;
  grid-gap: 40px;

  ${BreakPoint.media.tablet`
    grid-template-columns: auto auto;
  `};

  ${BreakPoint.media.mobile`
    grid-template-columns: auto;
  `}
`;

export default PostList;
