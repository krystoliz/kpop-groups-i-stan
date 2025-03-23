import React, { useState } from 'react';

const AddGroupForm: React.FC = () => {
  const [name, setName] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name) {
      setError('Group name is required');
      return;
    }

    const response = await fetch('/api/groups', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, image_url: imageUrl }),
    });

    if (response.ok) {
      setSuccess('Group added successfully!');
      setName('');
      setImageUrl('');
      setError('');
    } else {
      const data = await response.json();
      setError(data.error || 'Failed to add group');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium">Group Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-2 border rounded-lg"
        />
      </div>
      <div>
        <label className="block text-sm font-medium">Image URL (Optional)</label>
        <input
          type="text"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
          className="w-full p-2 border rounded-lg"
        />
      </div>
      {error && <p className="text-red-500">{error}</p>}
      {success && <p className="text-green-500">{success}</p>}
      <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-lg">
        Add Group
      </button>
    </form>
  );
};

export default AddGroupForm;