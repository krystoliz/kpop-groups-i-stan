import React from 'react';
import GroupList from '../components/GroupList';
import AddGroupForm from '../components/AddGroupForm';

const Home: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">My Favorite K-pop Groups</h1>
      <AddGroupForm />
      <GroupList />
    </div>
  );
};

export default Home;