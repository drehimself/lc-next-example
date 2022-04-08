import Link from 'next/link';
import React from 'react';

export default function posts({ posts }) {
  return (
    <div>
      <p>List of posts goes here</p>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <Link href={`/posts/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

// export async function getServerSideProps(context) {
//   const response = await fetch(
//     `https://jsonplaceholder.typicode.com/posts?_limit=10`
//   );

//   const posts = await response.json();

//   return {
//     props: { posts },
//   };
// }
export async function getStaticProps(context) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_limit=10`
  );

  const posts = await response.json();

  return {
    props: { posts },
  };
}
