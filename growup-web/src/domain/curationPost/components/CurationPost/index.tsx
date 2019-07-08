import React from 'react';
import styled from 'styled-components';

import { CurationPostType } from '../../../../common/api/post.api';

interface Props {
  curationPost: CurationPostType;
}

const CurationPost: React.FC<Props> = ({ curationPost }) => {
  const {
    title,
    content,
    thumbnail,
    postUrl,
    author,
    categories
  } = curationPost;

  return (
    <Container>
      <Link href={postUrl}>
        <Image src={thumbnail} />
        <Figure>
          <Title>{title}</Title>
          <Content>{content}</Content>
        </Figure>
      </Link>
      <Footer>
        <AuthorContainer>
          <AuthorProfileImage imageURL={author.iconUrl} />
          <AuthorProfileName>{author.name}</AuthorProfileName>
        </AuthorContainer>
        <CateogriesContainer>
          {categories.map(category => (
            <CategoryName key={category.id}>{category.name}</CategoryName>
          ))}
        </CateogriesContainer>
      </Footer>
    </Container>
  );
};

const Container = styled.div`
  width: 340px;
  border: 1px solid #f3f3f3;
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
  color: #191919;
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 6px;
`;

const Content = styled.span`
  display: block;
  color: #494949;
  font-size: 18px;
  font-weight: lighter;
`;

const Footer = styled.div`
  margin-top: 15px;
  padding: 12px;
  padding-top: 0;
  display: flex;
  justify-content: space-between;
`;

const AuthorContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const AuthorProfileImage = styled.div<{ imageURL: string }>`
  width: 24px;
  height: 24px;
  background-image: url(${props => props.imageURL});
  border: 0.1px solid #c4c4c4;
  border-radius: 50%;
  background-size: cover;
  background-position: center;
`;

const AuthorProfileName = styled.span`
  color: #707070;
  font-size: 12px;
  margin-left: 8px;
`;

const CateogriesContainer = styled.div`
  display: flex;
  align-items: center;
`;

const CategoryName = styled.span`
  color: #707070;
  font-size: 12px;
  font-weight: lighter;
  margin-right: 11px;
  cursor: pointer;

  &:last-child {
    margin-right: 0;
  }
`;

export default React.memo(CurationPost);
