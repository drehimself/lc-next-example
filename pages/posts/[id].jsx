import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react';

export default function Post({ post }) {
  const router = useRouter();

  return (
    <div>
      <Head>
        <title>{post.title} | My Next App</title>
      </Head>
      <style jsx>{`
        div {
          background: red;
        }
      `}</style>
      This is post: {router.query.id}
      <div>
        <h2>{post.title}</h2>
        <div>{post.body}</div>
      </div>
    </div>
  );
}

// export async function getServerSideProps(context) {
//   const response = await fetch(
//     `https://jsonplaceholder.typicode.com/posts/${context.params.id}`
//   );

//   const post = await response.json();

//   return {
//     props: { post }, // will be passed to the page component as props
//   };
// }
export async function getStaticProps(context) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${context.params.id}`
  );

  const post = await response.json();

  return {
    props: { post }, // will be passed to the page component as props
  };
}

export async function getStaticPaths() {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_limit=10`
  );

  const posts = await response.json();
  const ids = posts.map(post => post.id);
  console.log(ids);
  const paths = ids.map(id => ({ params: { id: id.toString() } }));

  // post1.html..post10.html
  return {
    paths,
    // paths: [
    //   { params: { id: '1' } },
    //   { params: { id: '2' } },
    //   { params: { id: '3' } },
    // ],
    fallback: false, // false or 'blocking'
  };
}
