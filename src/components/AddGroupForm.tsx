import React, { useState } from 'react';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';

const AddGroupForm: React.FC = () => {
  const [name, setName] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      if (!name) {
        toast.error('Group name is required');
        return;
      }

      const response = await fetch('/api/groups', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, image_url: imageUrl }),
      });

      if (response.ok) {
        toast.success('Group added successfully!');
        setName('');
        setImageUrl('');
      } else {
        const data = await response.json();
        toast.error(data.error || 'Failed to add group');
      }
    } catch (error) {
      toast.error('An error occurred while adding the group');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-md mx-auto"
    >
      <form
        onSubmit={handleSubmit}
        className="backdrop-blur-md bg-white/30 p-8 rounded-2xl shadow-xl border border-white/20"
      >
        <h2 className="text-2xl font-bold mb-6 text-center bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
          Add New K-pop Group
        </h2>
        
        <div className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Group Name
            </label>
            <motion.input
              whileFocus={{ scale: 1.02 }}
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 bg-white/50"
              placeholder="Enter group name"
            />
          </div>

          <div>
            <label htmlFor="imageUrl" className="block text-sm font-medium text-gray-700 mb-1">
              Image URL
            </label>
            <motion.input
              whileFocus={{ scale: 1.02 }}
              type="url"
              id="imageUrl"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 bg-white/50"
              placeholder="Enter image URL"
            />
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            disabled={isSubmitting}
            className={`w-full py-2 px-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-semibold shadow-lg
              ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:opacity-90'} transition-all duration-200`}
          >
            {isSubmitting ? 'Adding...' : 'Add Group'}
          </motion.button>
        </div>
      </form>
    </motion.div>
  );
};

export default AddGroupForm;