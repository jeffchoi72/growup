import React, { useEffect, useState } from 'react';

import { postApi } from '../../../common/api';
import { CurationPostType } from '../../../common/api/post.api';
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
    <div>
      {posts.map(post => {
        return <CurationPost key={post.id} curationPost={post} />;
      })}
    </div>
  );
};

export default React.memo(CurationPostsContainer);
