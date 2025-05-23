'use client';

import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
    const footerSections = [
        {
            title: 'Overview',
            links: [
                { label: 'Van & Truck', href: '/#' },
                { label: 'Machinery & Motorcycle', href: '/#' },
                { label: '4W Sendai', href: '/#' },
                { label: '4W Oyama', href: '/#' },
                { label: '4W Bayside', href: '/#' },
                { label: 'Rules & Operation', href: '/#' },
                { label: 'JRC-NET', href: '/#' },
            ]
        },
        // {
        //     title: 'ARAI Locations',
        //     links: [
        //         { label: 'Sendai Venue', href: '/sendai-venue' },
        //         { label: 'Oyama Venue', href: '/oyama-venue' },
        //         { label: 'Machinery & Motorcycle Venue', href: '/mm-venue' },
        //         { label: 'Bayside Venue', href: '/bayside-venue' },
        //         { label: 'Nagoya Venue', href: '/nagoya-venue' },
        //         { label: 'Kansai Venue', href: '/kansai-venue' },
        //         { label: 'Fukuoka Venue', href: '/fukuoka-venue' },
        //     ]
        // },
        {
            title: 'Auctions',
            links: [
                { label: 'Van & Truck Auction', href: '/van-truck-auction' },
                { label: 'Machinery & Motorcycle Auction', href: '/mm-auction' },
                { label: '4W Sendai Auction', href: '/4w-sendai-auction' },
                { label: '4W Oyama Passenger cars Auction', href: '/4w-oyama-auction' },
                { label: '4W Bayside Passenger cars Auction', href: '/4w-bayside-auction' },
            ]
        },
        
         {
            title: 'Quick Links',
            links: [
                { label: 'Register Now', href: '/register' },
        { label: 'About Us', href: '/about' },
        { label: 'Privacy Policy', href: '/privacy' },
        { label: 'GDPR Privacy Policy', href: '/gdpr' },
        { label: 'Contact us', href: '/contact' },
            ]
        },
        {
            title: 'Info Links',
            links: [
                { label: 'Parking', href: '/#' },
        { label: 'Bank', href: '/#' },
        { label: 'Charges', href: '/#' },
        { label: 'Logistics', href: '/#' },
        { label: 'Inspection', href: '/#' },
        { label: 'Payment', href: '/#' },
            ]
        },
        {
            title: 'JRC-NET',
            links: [
                { label: 'JRC-NET Basic Information', href: '/JRC-NET-basic' },
                { label: 'JRC-NET Premium Plan (Paid)', href: '/JRC-NET-premium' },
                { label: 'JRC-NET Basic Plan (Paid)', href: '/JRC-NET-basic-plan' },
                { label: 'JRC-NET Free Plan (Free)', href: '/JRC-NET-free' },
                { label: 'JRC-NET Application Form', href: '/JRC-NET-application' },
                { label: 'JRC-NET MOBILE', href: '/JRC-NET-mobile' },
            ]
        }
    ];

    const quickLinks = [
        { label: 'Register Now', href: '/register' },
        { label: 'About Us', href: '/about' },
        { label: 'Privacy Policy', href: '/privacy' },
        { label: 'GDPR Privacy Policy', href: '/gdpr' },
        { label: 'Contact us', href: '/contact' },
    ];

    const infoLinks = [
        { label: 'Parking', href: '/#' },
        { label: 'Bank', href: '/#' },
        { label: 'Charges', href: '/#' },
        { label: 'Logistics', href: '/#' },
        { label: 'Inspection', href: '/#' },
        { label: 'Payment', href: '/#' },
    ];

    return (
        <footer className="bg-gray-900 text-white pt-10 pb-8">
             <Image 
                src="/logo.svg"
                            alt="Logo"
                            width={100}
                            height={10}
                            className="h-16 mx-auto w-auto"
                />
            <div className="container mx-auto px-4 pt-10">
               
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 md:gap-8 content-center ">
                    {footerSections.map((section) => (
                        <div key={section.title} className="space-y-4">
                            <h3 className="text-lg font-semibold text-blue-400 mb-4">
                                {section.title}
                            </h3>
                            <ul className="space-y-2">
                                {section.links.map((link) => (
                                    <li key={link.label}>
                                        <Link 
                                            href={link.href}
                                            className="text-gray-300 hover:text-blue-400 transition-colors duration-200 text-sm block py-1"
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Additional Links */}
                <div className="hidden mt-12 pt-8 border-t border-gray-800">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Quick Links */}
                        <div className="space-y-4">
                            <ul className="space-y-2">
                                {quickLinks.map((link) => (
                                    <li key={link.label}>
                                        <Link 
                                            href={link.href}
                                            className="text-gray-300 hover:text-blue-400 transition-colors duration-200 text-sm block py-1"
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        
                        {/* Info Links */}
                        <div className="space-y-4">
                            <ul className="space-y-2">
                                {infoLinks.map((link) => (
                                    <li key={link.label}>
                                        <Link 
                                            href={link.href}
                                            className="text-gray-300 hover:text-blue-400 transition-colors duration-200 text-sm block py-1"
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Additional Sections */}
                        <div className="space-y-4">
                            <div>
                                <h3 className="text-lg font-semibold text-blue-400 mb-4">
                                    Auction Search
                                </h3>
                                <ul className="space-y-2">
                                    <li>
                                        <Link 
                                            href="/venue-search"
                                            className="text-gray-300 hover:text-blue-400 transition-colors duration-200 text-sm block py-1"
                                        >
                                            Venue/Yard Search from products
                                        </Link>
                                    </li>
                                    <li>
                                        <Link 
                                            href="/products-search"
                                            className="text-gray-300 hover:text-blue-400 transition-colors duration-200 text-sm block py-1"
                                        >
                                            Products Search from Venue/Yard
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="mt-6">
                                <h3 className="text-lg font-semibold text-blue-400 mb-4">
                                    Additional Links
                                </h3>
                                <ul className="space-y-2">
                                    <li>
                                        <Link 
                                            href="/download-forms"
                                            className="text-gray-300 hover:text-blue-400 transition-colors duration-200 text-sm block py-1"
                                        >
                                            Download Forms
                                        </Link>
                                    </li>
                                    <li>
                                        <Link 
                                            href="/usability-test"
                                            className="text-gray-300 hover:text-blue-400 transition-colors duration-200 text-sm block py-1"
                                        >
                                            Usability Test Reporting
                                        </Link>
                                    </li>
                                    <li>
                                        <Link 
                                            href="/auction-rules"
                                            className="text-gray-300 hover:text-blue-400 transition-colors duration-200 text-sm block py-1"
                                        >
                                            Auction Rules
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="mt-12 pt-8 border-t border-gray-800 text-center">
                    <p className="text-gray-400 text-sm">
                        © {new Date().getFullYear()} JP Recondition Cars. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;