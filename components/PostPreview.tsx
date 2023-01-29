import { Post } from '@/types/post';
import React from 'react'
import PostHeader from './PostHeader';

const PostPreview : React.FC<Post> = (props) => {
    const {title, bodyText, createdAt, author, tags} = props;
    const textPreview = bodyText.substring(0, 150) + '...';
  return (
    <section>
        <PostHeader createdAt={createdAt} author={author} />
      <h2 className="font-bold"> {title} </h2>
      <p className="mt-2"> {textPreview} </p>
      <div className=" flex gap-3">
        {tags.map((tag, idx) => {
          return (
            <p
              className="bg-sky-600 px-2 mt-2 font-semibold rounded-xl text-zinc-800"
              key={idx}
            >
              {' '}
              {tag}{' '}
            </p>
          )
        })}
      </div>
    </section>
  )
}

export default PostPreview