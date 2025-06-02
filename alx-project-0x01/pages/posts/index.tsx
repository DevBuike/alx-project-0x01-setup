// pages/posts/index.tsx
import React from 'react';
import PostCard from '@/components/common/PostCard';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const PostsPage: React.FC = () => {
  const dummyPosts = [
    { title: 'Post One', body: 'This is the first post.', author: 'Alice' },
    { title: 'Post Two', body: 'This is the second post.', author: 'Bob' },
  ];

  return (
    <>
      <Header />
      <main className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-6">Posts</h1>
        <div className="space-y-4">
          {dummyPosts.map((post, index) => (
            <PostCard key={index} {...post} />
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default PostsPage;
