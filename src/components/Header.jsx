import React from 'react';
import { motion } from 'framer-motion';
import logo from '../assets/images/logo.png';

const Header = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="bg-[#E0F7FA] py-3 md:py-4 shadow-md"
    >
      <div className="container mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 flex-row-reverse">
        <div className="flex items-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="bg-transparent hover:bg-blue-500 border border-blue-500 text-blue-500 hover:text-white font-bold py-1 px-3 md:py-2 md:px-4 rounded-full transition duration-300 ease-in-out ml-2 md:ml-4 text-sm md:text-base"
          >
            شاهد المزيد
          </motion.button>
          <span className="text-gray-600 text-sm md:text-base ml-2 md:ml-4">محكمة الشعب</span>
        </div>
        <div className="flex items-center">
          <div className="w-8 h-8 md:w-10 md:h-10 rounded-full overflow-hidden mr-2 md:mr-3">
            <img
              src={logo}
              alt="Middle East Coin"
              className="w-full h-full object-cover"
            />
          </div>
          <h2 className="text-base md:text-lg font-semibold text-gray-800">Middle East</h2>
        </div>
      </div>
    </motion.div>
  );
};

export default Header;