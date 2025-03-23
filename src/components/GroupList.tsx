import React, { useEffect, useState } from 'react';

interface Group {
  id: number;
  name: string;
  image_url?: string;
}

const GroupList: React.FC = () => {
  const [groups, setGroups] = useState<Group[]>([]);

  useEffect(() => {
    fetch('/api/groups')
      .then((res) => res.json())
      .then((data) => setGroups(data))
      .catch((error) => console.error('Error fetching groups:', error));
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {groups.map((group) => (
        <div key={group.id} className="p-4 border rounded-lg shadow-md">
          <h3 className="text-xl font-bold">{group.name}</h3>
          {group.image_url && (
            <img src={group.image_url} alt={group.name} className="mt-2 rounded-lg" />
          )}
        </div>
      ))}
    </div>
  );
};

export default GroupList;