import React from 'react';
import styled from 'styled-components';

import { CurationPostType } from '../../../../common/api/post.api';
import * as Colors from '../../../../growup-ui/Colors';
import Body2 from '../../../../growup-ui/typography/Body2';
import Caption2 from '../../../../growup-ui/typography/Caption2';
import Heading2 from '../../../../growup-ui/typography/Heading2';

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
      <Link href={postUrl} target="_blank">
        <Image src={thumbnail} />
        <Figure>
          <Heading2 fontWeight="bold">{title}</Heading2>
          <Content color={Colors.slate30} fontWeight="lighter">
            {content}
          </Content>
        </Figure>
      </Link>
      <Footer>
        <AuthorContainer>
          <AuthorProfileImage imageURL={author.iconUrl} />
          <AuthorProfileName color={Colors.slate20} fontWeight="lighter">
            {author.name}
          </AuthorProfileName>
        </AuthorContainer>
        <CateogriesContainer>
          {categories.map(category => (
            <CategoryName
              key={category.id}
              color={Colors.slate20}
              fontWeight="lighter"
            >
              {category.name}
            </CategoryName>
          ))}
        </CateogriesContainer>
      </Footer>
    </Container>
  );
};

const Container = styled.div`
  width: calc(25% - 1.75rem);
  border: 1px solid #f3f3f3;
  border-radius: 3px;
  margin: 0.875rem;
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
`;

const Link = styled.a`
  text-decoration: none;
  color: inherit;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
`;

const Figure = styled.div`
  padding: 12px;
`;

const Content = styled(Body2)`
  margin-top: 6px;
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

const AuthorProfileName = styled(Caption2)`
  margin-left: 8px;
`;

const CateogriesContainer = styled.div`
  display: flex;
  align-items: center;
`;

const CategoryName = styled(Caption2)`
  margin-right: 11px;
  cursor: pointer;

  &:last-child {
    margin-right: 0;
  }
`;

export default React.memo(CurationPost);
