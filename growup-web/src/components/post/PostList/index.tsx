import { Post as PostType } from 'common/api/post.api';
import { BreakPoint } from 'growup-ui';
import Body2 from 'growup-ui/typography/Body2';
import React from 'react';
import styled from 'styled-components';

import Post from '../Post';

interface Props {
  isLoading: boolean;
  posts: PostType[];
}

const PostList: React.FC<Props> = ({ isLoading, posts }) => {
  if (isLoading) {
    return <Body2>로딩중이면 캐러셀은 보여주자</Body2>;
  }

  return (
    <Container>
      {posts.map(post => {
        console.log("post: ", post);
        return <Post key={post.id} post={post} />;
      })}
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
