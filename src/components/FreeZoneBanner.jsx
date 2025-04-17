import React from 'react';
import { motion } from 'framer-motion';
import patternSvg from '../assets/patterns.svg';

const FreeZoneBanner = () => {
  return (
    <div className="max-w-[1920px] mx-auto px-3 sm:px-4">
      <div className="relative w-full rounded-xl md:rounded-lg bg-[#E8FFF0] py-2.5 md:py-3 lg:py-4 flex flex-row-reverse justify-between items-center px-3 sm:px-4 md:px-6 lg:px-8 overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
        {/* Pattern Background */}
        <div
          className="absolute inset-0 w-full h-full opacity-15 md:opacity-20 z-0"
          style={{
            backgroundImage: `url(${patternSvg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        />
        
        {/* Text */}
        <motion.h2
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-[#2D2D2D] font-cairo text-[13px] sm:text-sm md:text-[15px] lg:text-base xl:text-lg font-bold text-right z-10 ml-1.5 sm:ml-2 pr-1 leading-tight"
        >
          لتصفح المنطقة الحرة<br className="sm:hidden"/> اضغط هنا
        </motion.h2>

        {/* Enhanced Button */}
        <motion.button
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ 
            duration: 0.5, 
            delay: 0.2,
            type: "spring",
            stiffness: 300
          }}
          whileHover={{ 
            scale: 1.05,
            boxShadow: "0 4px 12px rgba(50, 165, 239, 0.3)"
          }}
          whileTap={{ 
            scale: 0.96,
            boxShadow: "0 2px 6px rgba(50, 165, 239, 0.2)"
          }}
          className="z-10 text-white font-cairo text-xs sm:text-[13px] md:text-sm rounded-full px-3.5 sm:px-4 md:px-5 lg:px-6 py-1.5 md:py-2 bg-[#32A5EF] hover:bg-[#2585C7] active:bg-[#1E75B5] transition-all duration-200 ease-out shadow-sm whitespace-nowrap"
        >
          <span className="relative top-px">المنطقة الحرة</span>
        </motion.button>
      </div>
    </div>
  );
};

export default FreeZoneBanner;