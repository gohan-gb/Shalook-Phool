import React from 'react';
import { motion } from 'framer-motion';
import CircleCategory from './CircleCategory';
import MarginWrapper from '../../../common/MarginWrapper';
import dhuti from '/assets/dhuti.jpg';
import saree from '/assets/saree.jpg';
import kurti from '/assets/kurti.jpg';
import frock from '/assets/frock.jpg';
import lehenga from '/assets/lehenga.jpg';
import punjabi from '/assets/punjabi.jpg';
import umbrella from '/assets/umbrella.jpg';
import tray from '/assets/tray.jpg';
import piri from '/assets/piri.jpg';
import box from '/assets/box.jpg';
import wcard from '/assets/wcard.jpg';

const CategorySection = () => {
  const categories = [
    { img: saree, label: "Saree" },
    { img: dhuti, label: "Dhuti" },
    { img: kurti, label: "Kurti" },
    { img: frock, label: "Frock" },
    { img: lehenga, label: "Lehenga" },
    { img: punjabi, label: "Punjabi" },
    { img: umbrella, label: "Umbrella" },
    { img: wcard, label: "Wedding Card" },
    { img: box, label: "Wooden Box" },
    { img: tray, label: "Wooden Tray" },
    { img: piri, label: "Wooden Piri" },
  ];

  // Create a doubled array for infinite loop effect
  const extendedCategories = [...categories, ...categories];

  return (
    <div className='mb-12'>
      <MarginWrapper>
        <div className='mb-8'>
          <h1 className="heading text-center text-brown">Shop by Category</h1>
        </div>
        <div className=" rounded-lg overflow-hidden">
          <motion.div
            className="flex sm:justify-center justify-between items-center space-x-4 xl:space-x-[-28px] p-4 cursor-grab" // Using space-x to control the gap
            drag="x" // Allows horizontal dragging
            dragConstraints={{ left: -((extendedCategories.length * 150) - 150), right: 0 }} // Adjust based on category count
            dragElastic={1} // Makes dragging more fluid
          >
            {extendedCategories.map((category, index) => (
              <motion.div 
                key={`${category.label}-${index}`} 
                className="min-w-[100px] sm:min-w-[150px] md:min-w-[200px] lg:min-w-[250px] xl:min-w-[calc(100%/5)]" // 5 items on XL screens
              >
                <CircleCategory label={category.label} image={category.img} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </MarginWrapper>
    </div>
  );
};

export default CategorySection;
