import React, { useState } from 'react';
import Image from 'next/image';

import { Pin } from '../types';  // Ajusta la ruta si es necesario

import { Heart, Share2, MoreHorizontal, ExternalLink } from 'lucide-react';

interface PinCardProps {
  pin: Pin;
  onClick: (pin: Pin) => void;
}

const PinCard: React.FC<PinCardProps> = ({ pin, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  const aspectRatio = pin.height / pin.width;

  return (
    <div 
      className="rounded-lg overflow-hidden mb-4 cursor-zoom-in transition-transform duration-200 hover:-translate-y-1"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => onClick(pin)}
    >
      <div className="relative" style={{ paddingBottom: `${aspectRatio * 100}%` }}>
        <Image 
          src={pin.imageUrl}
          alt={pin.title}
          fill
          className="absolute top-0 left-0 object-cover rounded-lg bg-gray-300 dark:bg-gray-700"
          sizes="(max-width: 768px) 100vw, 50vw"
          priority={false}
        />
        
        {/* Overlay on hover */}
        {isHovered && (
          <div className="absolute inset-0 bg-black bg-opacity-20 rounded-lg transition-opacity duration-200">
            <div className="absolute top-3 right-3 flex space-x-2">
              <button className="p-2 bg-gray-800 bg-opacity-70 hover:bg-opacity-90 rounded-full text-white">
                <Share2 size={16} />
              </button>
              <button className="p-2 bg-gray-800 bg-opacity-70 hover:bg-opacity-90 rounded-full text-white">
                <MoreHorizontal size={16} />
              </button>
            </div>
            
            <div className="absolute bottom-3 left-3 right-3">
              <button className="w-full py-2 bg-red-600 hover:bg-red-700 rounded-full text-white font-medium text-sm">
                Save
              </button>
            </div>
            
            <button className="absolute top-3 left-3 p-2 bg-gray-800 bg-opacity-70 hover:bg-opacity-90 rounded-full text-white">
              <ExternalLink size={16} />
            </button>
          </div>
        )}
      </div>
      
      <div className="p-2">
        <h3 className="font-medium text-gray-900 dark:text-white text-sm truncate">{pin.title}</h3>
        <div className="flex items-center mt-2">
          <Image
            src={pin.user.avatar}
            alt={pin.user.name}
            width={24}
            height={24}
            className="rounded-full object-cover"
          />
          <span className="ml-2 text-xs text-gray-700 dark:text-gray-300">{pin.user.name}</span>
        </div>
        <div className="flex items-center mt-1 text-xs text-gray-500 dark:text-gray-400">
          <Heart size={12} className="mr-1" />
          <span>{pin.saves}</span>
        </div>
      </div>
    </div>
  );
};

export default PinCard;
