'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Projects', href: '/projects' },
    { name: 'YouTube', href: 'https://www.youtube.com/c/Racing2Learn' },
    { name: 'About Us', href: '/about' },
  ];

    return (
        <nav className="bg-[#a43a3a] shadow-lg sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex items-center">
                        <Link href ="/" className="flex-shrink-0">
                        <img 
                        src="/RC2LLogo.png" 
                        alt="Race2Learn Logo" 
                        className="h-45 w-auto object-contain mr-3"
                        />
            
                        </Link>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            {navItems.map((item) => (
                                <a
                                key={item.name}
                                href={item.href}
                                className="text-white hover:bg-white hover:bg-opacity-20 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ease-in-out transform hover:scale-105"
                                >
                                {item.name}
                                </a>
                            ))}
                            <a
                                href="/support"
                                className="bg-white text-[#a43a3a] hover:bg-gray-100 px-6 py-2 rounded-full text-sm font-bold transition-all duration-300 ease-in-out transform hover:scale-105 shadow-lg"
                            >
                                Support Us
                            </a>
                        </div>
                    </div>

                    <div className="md:hidden">
                        <button
                        onClick={toggleMenu}
                        className="inline-flex items-center justify-center p-2 rounded-full text-white hover:bg-white hover:bg-opacity-20 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white transition-all duration-300"
                        aria-expanded="false"
                        >
                        <span className="sr-only">Open main menu</span>
                        {isMenuOpen ? (
                            <X className="block h-6 w-6" aria-hidden="true" />
                        ) : (
                            <Menu className="block h-6 w-6" aria-hidden="true" />
                        )}
                        </button>
                    </div>
                </div>
            </div>

            <div className={`md:hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                <div className="px-2 pt-2 pb-3 space-y-1 bg-[#a43a3a] border-t border-white border-opacity-20">
                    {navItems.map((item) => (
                        <a
                        key={item.name}
                        href={item.href}
                        className="text-white hover:bg-white hover:bg-opacity-20 block px-4 py-3 rounded-xl text-base font-medium transition-all duration-300"
                        onClick={() => setIsMenuOpen(false)}
                        >
                        {item.name}
                        </a>
                    ))}
                    <a
                        href="#support"
                        className="bg-white text-[#a43a3a] hover:bg-gray-100 block px-4 py-3 rounded-xl text-base font-bold transition-all duration-300 mx-2 mt-3 text-center shadow-lg"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Support Us
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;