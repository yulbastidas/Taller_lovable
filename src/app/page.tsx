import React, { useState } from 'react';
import Header from '../components/Header';
import PinGrid from '../components/PinGrid';
import PinDetail from '../components/PinDetail';
import CategoryBar from '../components/CategoryBar';
import { pins } from '../../data/pins';
import { Pin } from '../../types';


function App() {
  const [selectedPin, setSelectedPin] = useState<Pin | null>(null);
  
  const handlePinClick = (pin: Pin) => {
    setSelectedPin(pin);
    // Prevent body scrolling when modal is open
    document.body.style.overflow = 'hidden';
  };
  
  const handleCloseModal = () => {
    setSelectedPin(null);
    // Re-enable body scrolling
    document.body.style.overflow = 'auto';
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors duration-200">
      <Header />
      <CategoryBar />
      
      <main className="container mx-auto pt-4 pb-16">
        <PinGrid pins={pins} onPinClick={handlePinClick} />
        
        {/* Load more button */}
        <div className="flex justify-center mt-6 mb-8">
          <button className="px-6 py-2 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full text-gray-900 dark:text-white font-medium transition-colors">
            Load more
          </button>
        </div>
      </main>
      
      {/* Pin detail modal */}
      {selectedPin && (
        <PinDetail pin={selectedPin} onClose={handleCloseModal} />
      )}
    </div>
  );
}

export default App;