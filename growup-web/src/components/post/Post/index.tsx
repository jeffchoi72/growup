import { Colors } from 'growup-ui';
import React from 'react';
import styled from 'styled-components';

import AuthorProfile from './AuthorProfile';
import CategoryList from './CategoryList';
import Content from './Content';
import MyStoreSaveButton from './MyStoreSaveButton';
import Thumbnail from './Thumbnail';

const TEST_IMAGE =
  "http://menu.mt.co.kr/ttimes/img/201808/2018080110257725193_23130.png/dims/optimize/";

const Post: React.FC = () => {
  return (
    <Container>
      <Thumbnail thumbnailURL={TEST_IMAGE} />
      <Description>
        <Content
          title="아마존과 쿠팡의 시대, 오프라인이 생존하려면?"
          description="아마존으로 대표되는 온라인 상거래가 급성장하면서 오프라인
            유통업체들이 갈팡질팡하고 있다. 온라인에 올라타기 위해 기존의
            오프인..."
        />
        <CategoryList
          categories={[
            {
              id: "id-1",
              content: "#비즈니스"
            },
            {
              id: "id-2",
              content: "#스타트업"
            }
          ]}
        />
        <AuthorProfile
          name="T Times"
          imageURL="http://www.ttimes.co.kr/favicon/apple-icon-180x180.png"
        />
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
  cursor: pointer;
`;

const Description = styled.div`
  padding: 14px 8px;
`;
