'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Person3, PersonPinCircleOutlined } from '@mui/icons-material';

const images = ['/images/slider-1.jpg','/images/car-1.jpg', '/images/car-2.webp', '/images/car-3.webp'];

const Hero = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (  
    <div className='flex flex-col md:flex-row mx-4 md:mx-3'>  
  <section className="relative w-full  md:m-4 h-[29vh] md:h-[60vh] overflow-hidden rounded-lg shadow-lg">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7 }}
          className="absolute inset-0 w-full h-full"
        >
          <Image
            src={images[current]}
            alt={`Luxury car showcase ${current + 1}`}
            fill
            className="object-cover w-full h-full"
            priority
          />
          {/* <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/30 to-transparent backdrop-blur-[2px]" /> */}
        </motion.div>
      </AnimatePresence>

      {/* <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative z-10 flex flex-col items-center justify-center h-full max-w-2xl mx-auto px-4 text-center gap-4"
      >        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-3xl md:text-5xl font-bold text-white tracking-tight"
        >
          Find Your <span className="text-sky-400">Dream Car</span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-base md:text-lg text-gray-200 max-w-lg"
        >
          Explore top luxury cars with unbeatable offers and seamless experiences.
        </motion.p>

        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}          className="group relative px-6 py-2 font-semibold text-white bg-sky-500 rounded-lg 
            hover:bg-sky-600 transition-all duration-300 
            focus:outline-none focus:ring-2 focus:ring-sky-400 
            focus:ring-offset-2 shadow-lg hover:shadow-sky-500/50"
        >
          <span className="flex items-center gap-2">
            Explore Now
            <motion.div
              className="h-px w-0 bg-white absolute bottom-2 left-0 right-0 mx-auto
                group-hover:w-[calc(100%-2rem)] transition-all duration-300"
            />
          </span>
        </motion.button>

        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {images.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => setCurrent(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                current === index ? 'w-6 bg-white' : 'w-2 bg-white/50'
              }`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            />
          ))}
        </div>
      </motion.div> */}
    </section>
    {/* <div className='flex flex-col justify-center bg-blue-900 rounded-lg p-4 mt-4 h-[25vh] md:h-[60vh]'>
          <Image
            src="/logo.svg"
            alt="Luxury car showcase 4"
            width={500}
            height={500}
            className="opacity-40  w-full h-full"
            priority
          />
          
          <button className='flex text-xl justify-center mx-auto border border-white text-White px-4 md:py-2 md:rounded-lg mt-2 hover:bg-blue-800 hover:text-white'>
            <Person3 className="w-5 h-5 " />
            <span className='ml-2'>Login</span>
            
          </button>
    </div> */}
    <div className="relative w-full md:w-3/4 h-full md:h-[60vh] bg-blue-900 rounded-lg p-4 mt-4 text-white overflow-hidden shadow-lg max-w-md mx-auto">
      {/* Logo image background with opacity */}
      
      {/* Main content */}
      <div className="relative flex flex-col items-center space-y-4 z-10">
        {/* Logo section */}
        <div className="bg-gradient-to-b from-white to-gray-300 w-full md:w-3/4 mb-4 md:mb-8 text-center p-4 rounded-md">
          <Image
            src="/logo.svg"
            alt="JRC-NET Logo"
            width={100}
            height={60}
            className="mx-auto h-20 object-fit w-full"
          />
          <button className="mt-2 text-gray-800 border border-blue-900 px-2 py-1 rounded font-semibold flex items-center justify-center mx-auto text-lg hover:text-blue-900 transition-colors">
            
            <Person3 className="ml-1" />
            Login
          </button>
        </div>

        {/* Rule links */}
        <div className="text-sm text-center text-white/80 space-y-1">
          <p className="space-x-2">
            <span>Membership Terms and conditions</span>| <br /> 
            <span> Auction Rules</span> | <span> {" "}JRC-NET Rules</span>
          </p>
          <p className="space-x-2">
            <span>JRC-NET Proxy Services Rules</span><br className='md:none'/> |  <span>Store Stock Rules</span>
          </p>
        </div>

        {/* Bottom buttons */}
        <div className="flex space-x-4">
          <button className="border border-white px-4 py-1 rounded-md hover:bg-blue-800 hover:text-white transition-colors">
            About the New Plan
          </button>
          <button className="border border-white px-4 py-1 rounded-md hover:bg-blue-800 hover:text-white transition-colors">
            FAQ
          </button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Hero;
