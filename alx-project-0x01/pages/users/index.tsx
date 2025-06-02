// pages/users/index.tsx
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const UsersPage: React.FC = () => {
  const dummyUsers = ['Alice', 'Bob', 'Charlie'];

  return (
    <>
      <Header />
      <main className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-6">Users</h1>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          {dummyUsers.map((user, index) => (
            <li key={index}>{user}</li>
          ))}
        </ul>
      </main>
      <Footer />
    </>
  );
};

export default UsersPage;
