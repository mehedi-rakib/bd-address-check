'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiAlertCircle, FiFileText, FiBell } from 'react-icons/fi';

const newsItems = [
  { type: 'news', title: 'New Toyota Models Available for Import', date: '2025-05-22', description: 'Latest models from Toyota are now available for import. Check out our inventory.' },
  { type: 'notice', title: 'Important Changes in Import Regulations', date: '2025-05-21', description: 'New regulations affecting car imports will be effective from June 1st.' },
  { type: 'update', title: 'Special Discount on Shipping Services', date: '2025-05-20', description: '15% off on all shipping services until the end of this month.' },
  { type: 'news', title: 'Upcoming Car Auction in Tokyo', date: '2025-05-19', description: 'Join our biggest auction of the year in Tokyo next week.' },
  { type: 'notice', title: 'Maintenance Schedule Update', date: '2025-05-18', description: 'New maintenance schedule for imported vehicles.' },
  { type: 'update', title: 'New Partnership Announcement', date: '2025-05-17', description: 'Strategic partnership with leading logistics provider.' },
];

const infoBoxes = [
  {
    title: 'Latest Updates',
    icon: <FiAlertCircle className="w-6 h-6" />,
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-200',
    textColor: 'text-blue-700',
  },
  {
    title: 'Documents',
    icon: <FiFileText className="w-6 h-6" />,
    bgColor: 'bg-green-50',
    borderColor: 'border-green-200',
    textColor: 'text-green-700',
  },
  {
    title: 'Notifications',
    icon: <FiBell className="w-6 h-6" />,
    bgColor: 'bg-purple-50',
    borderColor: 'border-purple-200',
    textColor: 'text-purple-700',
  },
];

const Information = () => {
  const [showAllNews, setShowAllNews] = useState(false);
  const displayedNews = showAllNews ? newsItems : newsItems.slice(0, 3);

  return (
    <div className="py-8 md:px-4  ">
      {/* News Updates */}
      <div className="max-w-7xl mx-auto mb-8">
        <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-4 overflow-hidden">
          <div className="flex items-center gap-2 mb-6">
            <FiBell className="w-5 h-5 text-sky-500" />
            <h3 className="font-semibold text-xl text-gray-700">Latest News & Updates</h3>
          </div>
          
          <div className="space-y-4">
            <AnimatePresence>
              {displayedNews.map((news, index) => (
                <motion.div
                  key={news.date}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="p-3 rounded-lg border border-gray-100 hover:border-sky-100 hover:bg-sky-50/30 transition-all duration-300"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                      <img src="/images/car-1.jpg" alt="" className='h-7 md:h-10' />
                      <div className='pl-2 md:pl-6'>
                      <h4 className="font-medium text-gray-800">
                        {news.title}
                        <span className="text-sm text-gray-500 whitespace-nowrap md:hidden block">
                      {news.date}
                    </span>
                      </h4>
                      <p className=" text-sm text-gray-600 hidden md:block">
                        {news.description}
                      </p>
                      </div>
                     
                      </div>
                       <p className=" text-sm text-gray-600 md:hidden">
                        {news.description}
                      </p>
                      
                    </div>
                    <span className="text-sm text-gray-500 whitespace-nowrap hidden md:block">
                      {news.date}
                    </span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {newsItems.length > 3 && (
            <motion.div
              className="mt-4 text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <button
                onClick={() => setShowAllNews(!showAllNews)}
                className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-sky-600 hover:text-sky-700 transition-colors duration-200"
              >
                {showAllNews ? 'Show Less' : 'View More'}
                <motion.span
                  animate={{ rotate: showAllNews ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  ↓
                </motion.span>
              </button>
            </motion.div>
          )}
        </div>
      </div>

      {/* Info Boxes Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
        {infoBoxes.map((box, index) => (
          <motion.div
            key={box.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className={`p-6 rounded-lg border ${box.bgColor} ${box.borderColor} hover:shadow-lg transition-shadow duration-300`}
          >
            <div className="flex items-start gap-4">
              <div className={`${box.textColor} p-2 rounded-full ${box.bgColor}`}>
                {box.icon}
              </div>
              <div>
                <h3 className={`font-semibold ${box.textColor} mb-2`}>
                  {box.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  Click to view all {box.title.toLowerCase()}
                </p>
              </div>
            </div>
            <motion.div
              className="mt-4 w-full h-1 bg-gray-100 rounded-full overflow-hidden"
              whileHover={{ scale: 1.01 }}
            >
              <motion.div
                className={`h-full ${box.borderColor.replace('border', 'bg')}`}
                initial={{ width: '0%' }}
                animate={{ width: '60%' }}
                transition={{ duration: 1, delay: index * 0.2 }}
              />
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Information;