import React from 'react';
import { motion } from 'framer-motion';
import flagsData from '../data/flags';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.03,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { 
      type: "spring", 
      stiffness: 300, 
      damping: 24 
    }
  }
};

const FlagGrid = () => {
  return (
    <div className="max-w-[1920px] mx-auto px-4 py-2">
      <motion.div
        className="bg-transparent rounded-lg p-4"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.div 
          className="grid grid-cols-13 gap-2 justify-center"
          variants={containerVariants}
        >
          {flagsData.map((country, index) => (
            <motion.div 
              key={index}
              className="flex flex-col items-center"
              variants={itemVariants}
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
            >
              <div className="w-[70px] h-[50px] bg-white/30 backdrop-blur-sm rounded-sm shadow-sm overflow-hidden">
                <img
                  src={country.image}
                  alt={country.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <p className="text-xs text-center mt-1 font-cairo text-gray-800">{country.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default FlagGrid;
