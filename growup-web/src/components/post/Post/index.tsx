import { Post as PostType } from 'common/api/post.api';
import { Colors } from 'growup-ui';
import React from 'react';
import styled from 'styled-components';

import AuthorProfile from './AuthorProfile';
import CategoryList from './CategoryList';
import Content from './Content';
import MyStoreSaveButton from './MyStoreSaveButton';
import Thumbnail from './Thumbnail';

interface Props {
  post: PostType;
}

const Post: React.FC<Props> = ({ post }) => {
  const { title, content, thumbnail, postURL, author, categories } = post;

  return (
    <Container>
      <Link href={postURL} target="_blank">
        <Thumbnail thumbnailURL={thumbnail} />
      </Link>
      <Description>
        <Content title={title} description={content} />
        <CategoryList categories={categories} />
        <AuthorProfile author={author} />
        <MyStoreSaveButton />
      </Description>
    </Container>
  );
};

export default Post;

const Container = styled.div`
  width: 100%;
  border-radius: 3px;
  box-shadow: 0px 0px 1px ${Colors.slate10};
  text-decoration: none;
  display: flex;
  flex-direction: column;
`;

const Link = styled.a`
  text-decoration: none;
`;

const Description = styled.div`
  padding: 14px 8px;
`;
