import PostList from 'components/post/PostList';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createSelector } from 'reselect';
import { fetchPostList } from 'store/post/actions';
import { Status } from 'store/post/reducer';
import { AppState } from 'store/reducers';

const selectPost = createSelector(
  (state: AppState) => state.post,
  post => post
);

const POST_LIMIT = 32;

const PostListContainer: React.FC = () => {
  // useDispatch, useStore를 사용해서 post list 가져오기
  const dispatch = useDispatch();
  const post = useSelector(selectPost);

  const [offset, setOffset] = useState(0);

  useEffect(() => {
    dispatch(fetchPostList({ offset, limit: POST_LIMIT }));
  }, [dispatch]);

  const { status, posts } = post;

  return <PostList isLoading={status === Status.PENDING} posts={posts} />;
};

export default PostListContainer;
