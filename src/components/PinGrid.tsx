import React from 'react';
import { Pin, Category, User } from '../types';

import PinCard from './PinCard';

interface PinGridProps {
  pins: Pin[];
  onPinClick: (pin: Pin) => void;
}

const PinGrid: React.FC<PinGridProps> = ({ pins, onPinClick }) => {
  // Divide pins into columns for masonry layout
  const getColumnPins = (columnIndex: number, columnCount: number) => {
    return pins.filter((_, index) => index % columnCount === columnIndex);
  };

  // Responsive column counts based on screen size
  return (
    <div className="w-full px-2 py-4">
      {/* Mobile: 2 columns */}
      <div className="grid grid-cols-2 gap-2 sm:hidden">
        <div className="space-y-2">
          {getColumnPins(0, 2).map(pin => (
            <PinCard key={pin.id} pin={pin} onClick={onPinClick} />
          ))}
        </div>
        <div className="space-y-2">
          {getColumnPins(1, 2).map(pin => (
            <PinCard key={pin.id} pin={pin} onClick={onPinClick} />
          ))}
        </div>
      </div>

      {/* Tablet: 3 columns */}
      <div className="hidden sm:grid md:hidden grid-cols-3 gap-3">
        <div className="space-y-3">
          {getColumnPins(0, 3).map(pin => (
            <PinCard key={pin.id} pin={pin} onClick={onPinClick} />
          ))}
        </div>
        <div className="space-y-3">
          {getColumnPins(1, 3).map(pin => (
            <PinCard key={pin.id} pin={pin} onClick={onPinClick} />
          ))}
        </div>
        <div className="space-y-3">
          {getColumnPins(2, 3).map(pin => (
            <PinCard key={pin.id} pin={pin} onClick={onPinClick} />
          ))}
        </div>
      </div>

      {/* Desktop: 5 columns */}
      <div className="hidden md:grid grid-cols-4 lg:grid-cols-5 gap-4">
        {Array.from({ length: 5 }).map((_, columnIndex) => (
          <div key={columnIndex} className="space-y-4">
            {getColumnPins(columnIndex, 5).map(pin => (
              <PinCard key={pin.id} pin={pin} onClick={onPinClick} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PinGrid;