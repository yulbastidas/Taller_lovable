import React from 'react';
import Image from 'next/image';

import { Pin } from '../types';

import { X, Send, Download, Link, MoreHorizontal } from 'lucide-react';

interface PinDetailProps {
  pin: Pin | null;
  onClose: () => void;
}

const PinDetail: React.FC<PinDetailProps> = ({ pin, onClose }) => {
  if (!pin) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div 
        className="fixed inset-0 bg-black bg-opacity-75 transition-opacity" 
        onClick={onClose}
      ></div>
      
      <div className="relative min-h-screen flex items-center justify-center p-4">
        <div 
          className="relative bg-white dark:bg-gray-900 rounded-xl shadow-xl max-w-6xl w-full mx-auto overflow-hidden flex flex-col md:flex-row"
          onClick={e => e.stopPropagation()}
        >
          {/* Close button */}
          <button 
            className="absolute top-4 right-4 p-2 bg-gray-200 dark:bg-gray-800 rounded-full z-10 text-gray-600 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors"
            onClick={onClose}
          >
            <X size={20} />
          </button>
          
          {/* Image Section */}
          <div className="w-full md:w-3/5 relative bg-gray-200 dark:bg-gray-800 flex items-center justify-center">
            <Image 
              src={pin.imageUrl}
              alt={pin.title}
              width={800}
              height={600}
              className="object-contain max-h-[80vh]"
              priority={true}
            />
          </div>
          
          {/* Content Section */}
          <div className="w-full md:w-2/5 p-6 overflow-y-auto max-h-[80vh]">
            {/* Actions */}
            <div className="flex justify-between items-center mb-4">
              <div className="flex space-x-2">
                <button className="p-2 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700">
                  <MoreHorizontal size={20} />
                </button>
                <button className="p-2 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700">
                  <Link size={20} />
                </button>
                <button className="p-2 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700">
                  <Download size={20} />
                </button>
              </div>
              
              <button className="py-2 px-4 bg-red-600 hover:bg-red-700 rounded-full text-white font-medium text-sm">
                Save
              </button>
            </div>
            
            {/* Title and Description */}
            <h1 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{pin.title}</h1>
            <p className="text-gray-700 dark:text-gray-300 mb-4">{pin.description}</p>
            
            {/* User Info */}
            <div className="flex items-center mb-6">
              <Image 
                src={pin.user.avatar} 
                alt={pin.user.name} 
                width={40}
                height={40}
                className="rounded-full object-cover"
              />
              <div className="ml-3">
                <p className="font-medium text-gray-900 dark:text-white">{pin.user.name}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">{pin.user.followers} followers</p>
              </div>
              <button className="ml-auto py-2 px-4 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full text-gray-900 dark:text-white font-medium text-sm">
                Follow
              </button>
            </div>
            
            {/* Comments Section */}
            <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
              <h3 className="font-medium text-gray-900 dark:text-white mb-3">Comments</h3>
              
              <div className="space-y-4 mb-4">
                <p className="text-gray-600 dark:text-gray-400 text-sm">Be the first to comment on this pin</p>
              </div>
              
              {/* Comment Input */}
              <div className="relative mt-4">
                <input 
                  type="text" 
                  placeholder="Add a comment"
                  className="w-full py-3 pl-4 pr-10 rounded-full bg-gray-100 dark:bg-gray-800 border-none focus:ring-2 focus:ring-red-500 dark:text-white"
                />
                <button className="absolute right-3 top-3 text-gray-500 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-500">
                  <Send size={20} />
                </button>
              </div>
            </div>
            
            {/* Related Pins */}
            <div className="mt-6">
              <h3 className="font-medium text-gray-900 dark:text-white mb-3">More like this</h3>
              <div className="grid grid-cols-2 gap-2">
                <div className="rounded-lg overflow-hidden aspect-square bg-gray-200 dark:bg-gray-800"></div>
                <div className="rounded-lg overflow-hidden aspect-square bg-gray-200 dark:bg-gray-800"></div>
                <div className="rounded-lg overflow-hidden aspect-square bg-gray-200 dark:bg-gray-800"></div>
                <div className="rounded-lg overflow-hidden aspect-square bg-gray-200 dark:bg-gray-800"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PinDetail;
