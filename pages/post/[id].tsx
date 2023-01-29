import PostHeader from '@/components/PostHeader'
import { getBlogDetails } from '@/server/blogs'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import postDetailsCSS from './id.module.css'
import parse from 'html-react-parser'
import React from 'react'

const PostDetails = ({post} : InferGetServerSidePropsType<typeof getServerSideProps> ) => {
    const {author, bodyHTML, createdAt, title} = post;
  return (
    <section className="layout">
      <div className="max-w-[50%]">
        <h1 className="text-center my-10 text-[2rem] font-bold"> {title} </h1>
        <div className="flex justify-center mb-4">
          <PostHeader createdAt={createdAt} author={author} />
        </div>
        <div className={`${postDetailsCSS.html} flex flex-col`}>{parse(bodyHTML)}</div>
      </div>
    </section>
  )
}

export default PostDetails

export const getServerSideProps : GetServerSideProps = async (context) => {
    const routeID : string[] | string | undefined = context.query.id;
    const id = Number(routeID);
    console.log(id);
    const post = await getBlogDetails(id);
    
    return {
        props: {
            post
        }
    }
}