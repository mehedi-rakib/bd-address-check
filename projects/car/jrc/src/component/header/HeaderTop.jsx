'use client';

import { motion } from 'framer-motion';
import MenuIcon from '@mui/icons-material/Menu';
import PersonIcon from '@mui/icons-material/Person';
import Image from 'next/image';
import { MailOutlineOutlined } from '@mui/icons-material';
import LanguageIcon from '@mui/icons-material/Language';

const HeaderTop = ({ onMenuClick, isMenuOpen }) => {
    const buttonVariants = {
        hover: { scale: 1.05, transition: { duration: 0.2 } },
        tap: { scale: 0.95 }
        
    };

    const logoVariants = {
        initial: { x: -100, opacity: 0 },
        animate: { x: 0, opacity: 1, transition: { duration: 0.5 } }
    };

    return (
        <div className="">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center py-1">
                    <motion.div
                        variants={logoVariants}
                        initial="initial"
                        animate="animate"
                        className="text-2xl font-bold bg-gradient-to-r from-[#FE6B8B] to-[#FF8E53] bg-clip-text text-transparent"
                    >
                        <Image
                            src="/logo.svg"
                            alt="Logo"
                            width={100}
                            height={10}
                            className="h-16 w-auto"
                        />
                    </motion.div>

                    <div className="flex items-center gap-4">
                        <div className="hidden md:flex items-center gap-4">
                            <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
                                <button className="flex items-center gap-2 px-4 py-1 bg-yellow-400 text-white font-semibold hover:text-blue-900 transition-colors">
                                    <PersonIcon className="w-5 h-5" />
                                    <span>Register Now</span>
                                </button>
                            </motion.div>
                            <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
                                <button className="flex items-center gap-2 px-4 py-1 border bg-blue-900 border-white hover:text-yellow-400 transition-colors">
                                    <MailOutlineOutlined className="w-5 h-5" />
                                    <span>Contact Us</span>
                                </button>
                            </motion.div>
                            <div >
                               <div className='flex '>
                                <button className='flex items-center border border-blue-900 px-2 text-blue-900 hover:bg-blue-800 '>
                                    <LanguageIcon className="w-5 h-5" />
                                    日本語
                                </button>
                                <button className='px-2 py-1 bg-blue-900 text-white hover:bg-blue-800'>
                                    English
                                </button>
                               </div>
                               
                               
                            </div>
                        </div>                       
                         <button 
                            className=" md:hidden p-2 text-blue-900 rounded-full hover:bg-gray-800 transition-colors"
                            onClick={onMenuClick}
                        >
                            <MenuIcon className="w-16 h-16" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeaderTop;