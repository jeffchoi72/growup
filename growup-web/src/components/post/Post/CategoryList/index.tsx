import { CategoryType } from 'common/api/post.api';
import { Colors } from 'growup-ui';
import Body2 from 'growup-ui/typography/Body2';
import React from 'react';
import styled from 'styled-components';

interface Props {
  categories: CategoryType[];
}

const CategoryList: React.FC<Props> = ({ categories }) => {
  return (
    <Container>
      {categories.map(category => (
        <Category key={category.id} color={Colors.slate20}>
          #{category.name}
        </Category>
      ))}
    </Container>
  );
};

export default CategoryList;

const Container = styled.div`
  display: flex;
  margin-top: 16px;
`;

const Category = styled(Body2)`
  margin-right: 12px;
  :last-child {
    margin-right: 0;
  }
`;
