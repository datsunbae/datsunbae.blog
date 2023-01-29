import {getBlogs} from '@/server/blogs';
import {Post} from '@/types/post';
import {GetServerSideProps, InferGetServerSidePropsType, NextPage} from 'next';

const Home: NextPage = ({
  posts,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  console.log(posts);

  return (
    <main className="w-screen h-screen overflow-auto flex flex-col items-center bg-zinc-800 text-neutral-300">
      <title>Home Page</title>
      <section>
        <div className="mt-3 text-center">
          <h1 className="text-[3rem]">Welcome to Datsunbae Blog</h1>
          <p>I share Engineer and some thought in Product and Life 😴</p>
        </div>
      </section>
      <section className="mt-10">
        <div className="flex gap-3 mb-12">
          {posts.map((post: Post) => {
            return <div key={post.id}>{post.title}</div>;
          })}
        </div>
      </section>
    </main>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async () => {
  const posts: Post[] = await getBlogs();
  return {
    props: {
      posts,
    },
  };
};
