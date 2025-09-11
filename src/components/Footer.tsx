'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import facebook from "../../public/facebook.png";
import youtube from "../../public/youtube.png";
import PatreonLogo from "../../public/PatreonLogo.png";
import PaypalLogo from "../../public/PaypalLogo.png";

const CustFooter = () => {
    return (
        <footer className="bg-gray-900 text-white py-16">
            <div className="max-w-6xl mx-auto ">
                <div className="grid md:grid-cols-3">
                    <div>
                        <div className="flex items-center">
                            <img src="/RC2LLogo.png" alt="Race2Learn Logo" className="h-45 w-auto object-contain mr-3" />
                        </div>
                        <p className="text-gray-400 mb-2">
                            Getting kids excited about math and science!
                        </p>
                        <div className="flex space-x-4">
                            <Link href="https://www.facebook.com/racing2learn"><div className="w-8 h-8 bg-gray-700 rounded flex items-center justify-center"><Image src={facebook} alt="F" className="w-5 h-5"/></div></Link>
                            <Link href="https://www.youtube.com/@Racing2Learn"><div className="w-8 h-8 bg-gray-700 rounded flex items-center justify-center"><Image src={youtube} alt="Y"/></div></Link>
                        </div>
                    </div>
                    
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                        <ul className="space-y-2 text-gray-400">
                            <li><a href="/" className="hover:text-white">Home</a></li>
                            <li><a href="/projects" className="hover:text-white">Projects</a></li>
                            <li><a href="https://www.youtube.com/@Racing2Learn" className="hover:text-white">Youtube</a></li>
                            <li><a href="/about" className="hover:text-white">About Us</a></li>
                            <li><a href="/support" className="hover:text-white">Support Us</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Support Us</h4>
                        <div className="grid grid-cols-2 gap-4">
                            
                            <div className="grid grid-rows-2 gap-2">
                                <Link href="https://www.patreon.com/racing2learn"><div className="w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 transition-colors"><Image src={PatreonLogo} alt="Patreon" className="w-12 h-12"/></div></Link>
                                <Link href="https://www.patreon.com/racing2learn"><div className="text-gray-400 ml-1 hover:text-white">Patreon</div></Link>
                            </div>
                            <div className="grid grid-rows-2 gap-2">
                                <Link href="https://www.paypal.com/donate?hosted_button_id=FSS7Q69MTGNKL"><div className="w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 transition-colors"><Image src={PaypalLogo} alt="PayPal" className="w-12 h-12 bg-gray-200 rounded-full"/></div></Link>
                                <Link href="https://www.paypal.com/donate?hosted_button_id=FSS7Q69MTGNKL"><div className="text-gray-400 ml-2 hover:text-white">Paypal</div></Link>
                            </div>
                            
                        </div>
                        <div className="text-gray-400">
                            Your support helps us further improve and create educational content. 
                        </div>
                    </div>
                </div>
                
                <div className="border-t border-gray-700 mt-12 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center text-gray-400">
                    <p>© 2025 Race2Learn All rights reserved.</p>
                    {/*
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <a href="#" className="hover:text-white">Privacy Policy</a>
                        <a href="#" className="hover:text-white">Terms of Service</a>
                        <a href="#" className="hover:text-white">Cookie Policy</a>
                        <a href="#" className="hover:text-white">Accessibility</a>
                    </div>
                    */}
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default CustFooter;