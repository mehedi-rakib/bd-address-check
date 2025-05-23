'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
    Paper,
    Typography,
    Divider,
    IconButton,
    Box,
    Chip
} from '@mui/material';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import GavelIcon from '@mui/icons-material/Gavel';
import NewReleasesIcon from '@mui/icons-material/NewReleases';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

const Sidebar = () => {
    const [hoveredItem, setHoveredItem] = useState(null);

    const importantNotices = [
        {
            id: 1,
            title: "System Maintenance Notice",
            date: "2025-05-25",
            type: "urgent",
            description: "Scheduled maintenance on Sunday, 25th May from 2 AM - 4 AM JST"
        },
        {
            id: 2,
            title: "New Auction Guidelines",
            date: "2025-05-24",
            type: "important",
            description: "Updated bidding procedures for international buyers"
        },
        {
            id: 3,
            title: "Holiday Schedule",
            date: "2025-05-23",
            type: "notice",
            description: "Upcoming holiday closure dates for June"
        }
    ];

    const auctionUpdates = [
        {
            id: 1,
            venue: "Sendai",
            date: "2025-05-26",
            type: "upcoming",
            vehicles: "150+ vehicles",
            highlight: "Featuring rare classic cars"
        },
        {
            id: 2,
            venue: "Oyama",
            date: "2025-05-27",
            type: "registration",
            vehicles: "200+ vehicles",
            highlight: "Luxury vehicle special auction"
        },
        {
            id: 3,
            venue: "Bayside",
            date: "2025-05-28",
            type: "live",
            vehicles: "180+ vehicles",
            highlight: "Commercial vehicle focus"
        }
    ];

    const getChipColor = (type) => {
        const colors = {
            urgent: 'error',
            important: 'warning',
            notice: 'info',
            upcoming: 'primary',
            registration: 'success',
            live: 'error'
        };
        return colors[type] || 'default';
    };

    return (
        <div className="space-y-6 p-4">
            {/* Important Notices Section */}
            <Paper elevation={3} className="overflow-hidden">
                <Box className="bg-blue-600 p-4 flex items-center gap-2">
                    <NotificationsActiveIcon className="text-white" />
                    <Typography variant="h6" className="text-white font-medium">
                        Important Notices
                    </Typography>
                </Box>
                <div className="p-4 space-y-4">
                    {importantNotices.map((notice) => (
                        <motion.div
                            key={notice.id}
                            initial={{ x: -20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            whileHover={{ x: 10 }}
                            onHoverStart={() => setHoveredItem(`notice-${notice.id}`)}
                            onHoverEnd={() => setHoveredItem(null)}
                            className="p-3 rounded-lg border border-gray-100 hover:bg-gray-50 transition-all cursor-pointer"
                        >
                            <div className="flex items-start justify-between">
                                <div className="space-y-2">
                                    <div className="flex items-center gap-2">
                                        <NewReleasesIcon className="text-blue-500" fontSize="small" />
                                        <Typography variant="subtitle1" className="font-medium">
                                            {notice.title}
                                        </Typography>
                                    </div>
                                    <Chip 
                                        size="small" 
                                        color={getChipColor(notice.type)} 
                                        label={notice.type.toUpperCase()}
                                    />
                                </div>
                                <motion.div
                                    animate={{ opacity: hoveredItem === `notice-${notice.id}` ? 1 : 0 }}
                                >
                                    <ArrowForwardIcon className="text-blue-500" />
                                </motion.div>
                            </div>
                            <Typography variant="body2" className="mt-2 text-gray-600">
                                {notice.description}
                            </Typography>
                            <div className="flex items-center gap-1 mt-2">
                                <AccessTimeIcon fontSize="small" className="text-gray-400" />
                                <Typography variant="caption" className="text-gray-500">
                                    {new Date(notice.date).toLocaleDateString()}
                                </Typography>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </Paper>

            {/* Auction Updates Section */}
            <Paper elevation={3} className="overflow-hidden">
                <Box className="bg-green-600 p-4 flex items-center gap-2">
                    <GavelIcon className="text-white" />
                    <Typography variant="h6" className="text-white font-medium">
                        Auction Updates
                    </Typography>
                </Box>
                <div className="p-4 space-y-4">
                    {auctionUpdates.map((auction) => (
                        <motion.div
                            key={auction.id}
                            initial={{ x: -20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            whileHover={{ x: 10 }}
                            onHoverStart={() => setHoveredItem(`auction-${auction.id}`)}
                            onHoverEnd={() => setHoveredItem(null)}
                            className="p-3 rounded-lg border border-gray-100 hover:bg-gray-50 transition-all cursor-pointer"
                        >
                            <div className="flex items-start justify-between">
                                <div className="space-y-2">
                                    <div className="flex items-center gap-2">
                                        <Typography variant="subtitle1" className="font-medium">
                                            {auction.venue} Auction
                                        </Typography>
                                    </div>
                                    <div className="flex gap-2">
                                        <Chip 
                                            size="small" 
                                            color={getChipColor(auction.type)} 
                                            label={auction.type.toUpperCase()}
                                        />
                                        <Chip 
                                            size="small" 
                                            variant="outlined" 
                                            label={auction.vehicles}
                                        />
                                    </div>
                                </div>
                                <motion.div
                                    animate={{ opacity: hoveredItem === `auction-${auction.id}` ? 1 : 0 }}
                                >
                                    <ArrowForwardIcon className="text-green-500" />
                                </motion.div>
                            </div>
                            <Typography variant="body2" className="mt-2 text-gray-600">
                                {auction.highlight}
                            </Typography>
                            <div className="flex items-center gap-1 mt-2">
                                <AccessTimeIcon fontSize="small" className="text-gray-400" />
                                <Typography variant="caption" className="text-gray-500">
                                    {new Date(auction.date).toLocaleDateString()}
                                </Typography>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </Paper>
        </div>
    );
};

export default Sidebar;