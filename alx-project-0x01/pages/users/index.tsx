// pages/users/index.tsx
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import {UserProps} from '@/interfaces';
import UserCard from '@/components/common/UserCard';

const UsersPage: React.FC<UserProps> = ({users}) => {
  return (
    <>
      <Header />
      <main className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-6">Users</h1>
        <div className="grid grid-cols-3 gap-2 ">
          {
            users?.map(({ id, name, username, email, phone, website,address, company  }: UserProps) => (
              <UserCard name={name} username={username} email={email} phone={phone} website={website} address={address} company={company} id={id} />
            ))
          }
        </div>
      </main>
      <Footer />
    </>
  );
};

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users")
  const users = await response.json()

  return {
    props: {
      users
    }
  }
}

export default UsersPage;
