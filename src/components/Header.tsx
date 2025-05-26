import React, { useState } from 'react';
import {
  LogInIcon as LogoIcon,
  Search,
  Bell,
  MessageCircle,
  User,
  Moon,
  Sun
} from 'lucide-react';

import useDarkMode from '../hooks/useDarkMode';
import { categories } from '../data/pins';

const Header: React.FC = () => {
  const [isDarkMode, toggleDarkMode] = useDarkMode();
  const [searchTerm, setSearchTerm] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-gray-900 shadow-sm dark:shadow-gray-800">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <div className="flex items-center gap-1">
            <LogoIcon size={28} className="text-red-600" />
            <span className="font-bold text-xl hidden sm:inline">Pinterest</span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-6">
            {['Home', 'Explore', 'Create'].map((label) => (
              <a
                key={label}
                href="#"
                className="font-medium text-gray-800 dark:text-white hover:text-red-600 dark:hover:text-red-500 transition-colors"
              >
                {label}
              </a>
            ))}
          </nav>

          {/* Search Bar */}
          <div className="relative flex-1 mx-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for ideas..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onFocus={() => setShowDropdown(true)}
                onBlur={() => setTimeout(() => setShowDropdown(false), 200)}
                className="w-full py-2 pl-10 pr-4 rounded-full bg-gray-100 dark:bg-gray-800 border-none focus:ring-2 focus:ring-red-500 dark:text-white"
              />
              <Search
                size={18}
                className="absolute left-3 top-2.5 text-gray-500 dark:text-gray-400"
              />
            </div>

            {/* Search dropdown suggestions */}
            {showDropdown && (
              <div className="absolute mt-1 w-full bg-white dark:bg-gray-800 rounded-md shadow-lg py-2 z-10">
                <p className="px-4 py-1 text-sm text-gray-500 dark:text-gray-400">
                  Popular searches
                </p>
                {categories.slice(0, 5).map((category) => (
                  <div
                    key={category.id}
                    className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer"
                  >
                    <span className="text-gray-800 dark:text-white">
                      {category.name}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Right Icons */}
          <div className="flex items-center space-x-4">
            {[Bell, MessageCircle, User].map((Icon, index) => (
              <button
                key={index}
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                aria-label={`Icon ${index}`}
              >
                <Icon size={20} className="text-gray-700 dark:text-gray-300" />
              </button>
            ))}

            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? (
                <Sun size={20} className="text-gray-300" />
              ) : (
                <Moon size={20} className="text-gray-700" />
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
