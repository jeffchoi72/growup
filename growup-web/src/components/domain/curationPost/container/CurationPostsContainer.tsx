import { postApi } from 'common/api';
import { CurationPostType } from 'common/api/post.api';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import CurationPost from '../components/CurationPost';

const CurationPostsContainer: React.FC = () => {
  const [posts, setPosts] = useState<CurationPostType[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await postApi.getPosts();

      if (response.status !== 200) {
        throw Error("error");
      }

      const {
        data: { posts }
      } = response.data;

      setPosts(posts);
    };

    fetchData();
  }, []);

  return (
    <Container>
      {posts.map(post => {
        return <CurationPost key={post.id} curationPost={post} />;
      })}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: -0.875rem;
  margin-right: -0.875rem;
`;

export default React.memo(CurationPostsContainer);
