import React from 'react';
import Giscus from '@giscus/react';

const Comment = () => {
  return (
    <Giscus
      repo="datsunbae/datsunbae.blog"
      repoId="R_kgDOI2bUHQ"
      category="Blog"
      categoryId="DIC_kwDOI2bUHc4CT23Z"
      mapping="pathname"
      reactionsEnabled="0"
      emitMetadata="0"
      theme="dark"
    />
  );
};

export default Comment;
