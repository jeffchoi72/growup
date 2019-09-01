import PostList from 'components/post/PostList';
import { BreakPoint } from 'growup-ui';
import React from 'react';
import styled from 'styled-components';

import Header from '../common/components/Header';

const HomePage: React.FC = () => {
  return (
    <Container>
      <Header />
      <PostListSection>
        <PostList />
      </PostListSection>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
`;

const PostListSection = styled.section`
  margin: 64px;

  ${BreakPoint.media.mobile`
    margin: 32px;
  `};
`;

export default HomePage;
