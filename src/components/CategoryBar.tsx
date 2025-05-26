import React from 'react';


import { categories } from '../data/pins'; 
import { Home, TrendingUp } from 'lucide-react';

const CategoryBar: React.FC = () => {
  return (
    <div className="sticky top-16 z-40 bg-white dark:bg-gray-900 shadow-sm dark:shadow-gray-800">
      <div className="container mx-auto px-4 py-2 overflow-x-auto">
        <div className="flex space-x-2 md:space-x-4 items-center">
          <button className="flex items-center px-3 py-1.5 rounded-full bg-black dark:bg-white text-white dark:text-black font-medium text-sm whitespace-nowrap">
            <Home size={16} className="mr-1.5" />
            Home
          </button>
          
          <button className="flex items-center px-3 py-1.5 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 font-medium text-sm whitespace-nowrap">
            <TrendingUp size={16} className="mr-1.5" />
            Trending
          </button>
          
          {categories.map((category) => (
            <button 
              key={category.id}
              className="px-3 py-1.5 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 font-medium text-sm whitespace-nowrap transition-colors"
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryBar;