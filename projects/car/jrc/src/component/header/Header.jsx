'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import MenuIcon from '@mui/icons-material/Menu';
import HeaderTop from "./HeaderTop";
import PersonIcon from '@mui/icons-material/Person';
import LanguageIcon from '@mui/icons-material/Language';
import { MailOutlineOutlined } from '@mui/icons-material';

const MainHeader = () => {
    const [mobileOpen, setMobileOpen] = useState(false);
    const menuItems = ['Home', 'Overview','Auction', 'Auction Search', 'Schedules', 'JRC-NET', 'Resources', 'Download Forms'];
    
    // Add user action items
    const userActions = [
        { icon: PersonIcon, label: 'Login' },
        { icon: MailOutlineOutlined, label: 'Contact Us' },
        { icon: LanguageIcon, label: 'English' }
    ];

    const menuItemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: (i) => ({
            y: 0,
            opacity: 1,
            transition: {
                delay: i * 0.1,
                duration: 0.5,
                ease: "easeOut"
            }
        }),
        hover: {
            scale: 1.05,
            transition: { duration: 0.2 }
        }
    };    return (
        <>
            <HeaderTop onMenuClick={() => setMobileOpen(!mobileOpen)} isMenuOpen={mobileOpen} />
            <nav className="bg-blue-900 sticky top-0 z-100">
                <div className="container mx-auto px-4">
                    <div className="relative">
                        {/* Desktop Menu */}
                        <div className="hidden md:block">
                            <motion.ul 
                                className="flex justify-between items-center py-4 max-w-4xl mx-auto"
                                initial="hidden"
                                animate="visible"
                            >
                                {menuItems.map((item, index) => (
                                    <motion.li
                                        key={item}
                                        variants={menuItemVariants}
                                        custom={index}
                                        whileHover="hover"
                                    >
                                        <button className="text-white hover:text-blue-100 transition-colors font-medium">
                                            {item}
                                        </button>
                                    </motion.li>
                                ))}
                            </motion.ul>
                        </div>

                        {/* Full Screen Mobile Menu */}
                        <AnimatePresence>
                            {mobileOpen && (
                                <motion.div
                                    initial={{ opacity: 0, y: -20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    className="fixed inset-0 bg-gray-900 z-50 md:hidden"
                                >
                                    <div className="flex flex-col h-full">
                                        {/* Close Button */}
                                        <div className="flex justify-between p-4">
                                             <img
                                                src="/logo.svg"
                                                alt="Logo"
                                                className="h-10 w-auto"
                                            />
                                            <button
                                                onClick={() => setMobileOpen(false)}
                                                className="text-white p-2 hover:bg-gray-800 rounded-full transition-colors"
                                            >
                                                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                                </svg>
                                            </button>
                                        </div>

                                        {/* Menu Content */}
                                        <div className="flex-1 overflow-y-auto px-4 py-2">
                                           

                                            {/* Navigation Items */}
                                            <div className="mb-6">
                                                {menuItems.map((item, index) => (
                                                    <motion.button
                                                        key={item}
                                                        variants={menuItemVariants}
                                                        initial="hidden"
                                                        animate="visible"
                                                        custom={index + userActions.length}
                                                        className="w-full text-left py-2 px-4 text-white text-lg font-medium hover:bg-gray-800 rounded-lg mb-2"
                                                    >
                                                        {item}
                                                    </motion.button>
                                                ))}
                                            </div>

                                                 {/* User Actions */}
                                            <div className="pt-6 border-t border-gray-800 ">
                                                {userActions.map(({ icon: Icon, label }, index) => (
                                                    <motion.button
                                                        key={label}
                                                        variants={menuItemVariants}
                                                        initial="hidden"
                                                        animate="visible"
                                                        custom={index}
                                                        className="w-full flex items-center gap-3 py-4 px-4 text-white text-lg font-medium hover:bg-gray-800 rounded-lg mb-2"
                                                    >
                                                        <Icon className="w-6 h-6" />
                                                        {label}
                                                    </motion.button>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default MainHeader;