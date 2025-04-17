import React, { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';

const ZoomControls = () => {
  const [zoomLevel, setZoomLevel] = useState(100);

  const handleZoomIn = () => {
    setZoomLevel((prevLevel) => Math.min(prevLevel + 10, 200));
  };

  const handleZoomOut = () => {
    setZoomLevel((prevLevel) => Math.max(prevLevel - 10, 50));
  };

  return (
    <div className="fixed bottom-4 right-4 lg:bottom-8 lg:right-8 flex items-center">
      <div className="bg-[#90D4FF] rounded-full w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 flex items-center justify-center text-white mr-3 md:mr-4 shadow-md">
        <FiSearch className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
      </div>
      
      <div className="bg-white bg-opacity-70 rounded-full shadow-lg flex items-center p-1.5 md:p-2">
        <button
          onClick={handleZoomIn}
          className="bg-gray-200 rounded-full w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 flex items-center justify-center text-gray-700 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-300 ml-1.5 md:ml-2"
        >
          <AiOutlinePlus className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5" />
        </button>
        
        <span className="mx-2 text-sm sm:text-base md:text-lg font-semibold text-gray-800">
          {zoomLevel}
        </span>
        
        <button
          onClick={handleZoomOut}
          className="bg-gray-200 rounded-full w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 flex items-center justify-center text-gray-700 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-300"
        >
          <AiOutlineMinus className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5" />
        </button>
      </div>
    </div>
  );
};

export default ZoomControls;