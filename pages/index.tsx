import PostPreview from '@/components/PostPreview';
import {getBlogs} from '@/server/blogs';
import {Post} from '@/types/post';
import {GetServerSideProps, InferGetServerSidePropsType, NextPage} from 'next';
import { useMemo, useState } from 'react';

const Home: NextPage = ({
  posts,
  tags
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {

  const [tagsSelected, setTagsSelected] = useState<string[]>([]);

  const handleClickSetTags = (e : any) => {
    if(!tagsSelected.includes(e.target.innerText)){
      setTagsSelected([...tagsSelected, e.target.innerText]);
    }
    else{
      setTagsSelected(tagsSelected.filter((tag : string) => {
        return tag !== e.target.innerText;
      }))
    }
  }

  const filterPost : Post[] = useMemo(() => {
    return tagsSelected.length > 0 ? posts.filter((post: Post) => {
      return tagsSelected.every((tag : string) => {
        return post.tags.includes(tag)
      })
    }) : posts;
  }, [tagsSelected])
  
  return (
    <main className="layout">
      <title>Home Page</title>
      <section>
        <div className="mt-3 text-center">
          <h1 className="text-[3rem]">Welcome to Datsunbae Blog</h1>
          <p>I share Engineer and some thought in Product and Life 😴</p>
        </div>
      </section>
      <section className="flex flex-col items-center text-[1.15rem] mt-12">

      <div className="flex gap-3 mb-12">
          {tags.map((tag: string, index: number) => {
            return (
              <button key={index} className={`${tagsSelected.includes(tag) ? 'label-selected hover:bg-sky-400 transition-all duration-300' : 'label hover:bg-sky-400 transition-all duration-300'}`} onClick={handleClickSetTags}>
                {tag}
              </button>
            )
          })}
        </div>

      {filterPost.map((post: Post) => {
          return (
            <div
              key={post.id}
              className="max-w-[28em] max-h-[20em] overflow-hidden mx-6 mb-6 bg-neutral-300 text-zinc-800 rounded-lg p-4 hover:bg-neutral-500 hover:text-neutral-300 transition-all duration-300"
            >
              <a href={post.url} target="_blank" rel="noreferrer">
                <PostPreview
                  title={post.title}
                  bodyText={post.bodyText}
                  createdAt={post.createdAt}
                  author={post.author}
                  tags={post.tags}
                />
              </a>
            </div>
          )
        })}
      </section>
    </main>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async () => {
  const posts: Post[] = await getBlogs();
  const tags : string[] = [];
  for(const post of posts){
    for(const tag of post.tags){
      if(!tags.includes(tag)){
        tags.push(tag);
      }
    }
  } 
  return {
    props: {
      posts,
      tags
    },
  };
};
