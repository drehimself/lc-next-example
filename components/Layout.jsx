import Link from 'next/link';
import React from 'react';

export default function Layout({ children }) {
  return (
    <div>
      <nav>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/posts">Posts</Link>
      </nav>
      <div>{children}</div>
    </div>
  );
}
