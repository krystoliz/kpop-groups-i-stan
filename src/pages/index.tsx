import React from 'react';
import GroupList from '../components/GroupList';
import AddGroupForm from '../components/AddGroupForm';
import Head from 'next/head';

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>K-pop Groups I Stan</title>
        <meta name="description" content="Track your favorite K-pop groups" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-100 to-purple-100">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
        
        <div className="relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h1 className="text-5xl md:text-6xl font-bold text-center mb-8 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              K-pop Groups I Stan
            </h1>
            <p className="text-center text-gray-600 text-lg mb-12 max-w-2xl mx-auto">
              Keep track of your favorite K-pop groups and discover new ones.
              Add your favorite groups and showcase them with beautiful cards!
            </p>
            
            <AddGroupForm />
            <GroupList />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;