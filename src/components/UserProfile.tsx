import React from 'react';
import Image from 'next/image'; // ✅ Importa el componente de Next.js
import { User } from '../types';

interface UserProfileProps {
  user: User;
}

const UserProfile: React.FC<UserProfileProps> = ({ user }) => {
  return (
    <div className="flex flex-col items-center p-6 bg-white dark:bg-gray-900 rounded-xl shadow-sm dark:shadow-gray-800">
      <div className="relative w-24 h-24">
        <Image
          src={user.avatar}
          alt={user.name}
          fill
          className="rounded-full object-cover border-4 border-white dark:border-gray-800 shadow-md"
          sizes="96px" // opcional, ayuda con el responsive
        />
      </div>

      <h2 className="mt-4 text-xl font-bold text-gray-900 dark:text-white">{user.name}</h2>

      <div className="mt-2 flex space-x-4 text-gray-600 dark:text-gray-400">
        <div className="text-center">
          <p className="font-medium">{user.followers}</p>
          <p className="text-sm">Followers</p>
        </div>
        <div className="text-center">
          <p className="font-medium">{user.following}</p>
          <p className="text-sm">Following</p>
        </div>
      </div>

      <button className="mt-4 w-full py-2 rounded-full bg-red-600 hover:bg-red-700 text-white font-medium transition-colors">
        Follow
      </button>

      <button className="mt-2 w-full py-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-900 dark:text-white font-medium transition-colors">
        Message
      </button>
    </div>
  );
};

export default UserProfile;
