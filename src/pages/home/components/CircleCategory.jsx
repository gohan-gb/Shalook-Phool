import React from 'react';
import { motion } from 'framer-motion';

const CircleCategory = ({ label, image }) => {
  return (
    <motion.div
      className="flex items-center justify-center cursor-pointer"
      whileTap={{ scale: 0.9 }} // Keep tap effect if desired
    >
      <div className="flex flex-col items-center">
        <img 
          src={image} 
          alt={label} 
          className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 rounded-full mb-2 object-cover" // Responsive image sizes
        />
        <span className="text-xs sm:text-sm md:text-base lg:text-lg font-semibold text-center">{label}</span>
      </div>
    </motion.div>
  );
};

export default CircleCategory;
