'use client'
import React from 'react';

const Posts = ({ params }) => {
  const resolvedParams = React.use(params);

  return (
    <>
      <h2>Blog: {resolvedParams.posts[0]}</h2>
      <h2>Post: {resolvedParams.posts[1]}</h2>
    </>
  );
};

export default Posts;







