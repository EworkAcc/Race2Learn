'use client';

import React from 'react';

const CustFooter = () => {
    return (
        <footer className="bg-gray-900 text-white py-16">
            <div className="max-w-6xl mx-auto px-4">
                <div className="grid md:grid-cols-4 gap-8">
                    <div>
                    <div className="flex items-center mb-4">
                        <img src="/RC2LLogo.png" alt="Race2Learn Logo" className="h-45 w-auto object-contain mr-3" />
                    </div>
                    <p className="text-gray-400 mb-4">
                        Your support partner for advance and measuring education for students.
                    </p>
                    <div className="flex space-x-4">
                        <div className="w-8 h-8 bg-gray-700 rounded flex items-center justify-center">f</div>
                        <div className="w-8 h-8 bg-gray-700 rounded flex items-center justify-center">t</div>
                        <div className="w-8 h-8 bg-gray-700 rounded flex items-center justify-center">in</div>
                    </div>
                    </div>
                    
                    <div>
                    <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                    <ul className="space-y-2 text-gray-400">
                        <li><a href="#" className="hover:text-white">Home</a></li>
                        <li><a href="#" className="hover:text-white">About Us</a></li>
                        <li><a href="#" className="hover:text-white">Packages</a></li>
                        <li><a href="#" className="hover:text-white">Online Banking</a></li>
                        <li><a href="#" className="hover:text-white">Contact Us</a></li>
                    </ul>
                    </div>
                    
                    <div>
                    <h4 className="text-lg font-semibold mb-4">Banking Services</h4>
                    <ul className="space-y-2 text-gray-400">
                        <li><a href="#" className="hover:text-white">Checking Accounts</a></li>
                        <li><a href="#" className="hover:text-white">Savings Accounts</a></li>
                        <li><a href="#" className="hover:text-white">Credit Cards</a></li>
                        <li><a href="#" className="hover:text-white">Loans & Mortgages</a></li>
                        <li><a href="#" className="hover:text-white">Investments</a></li>
                        <li><a href="#" className="hover:text-white">Business Banking</a></li>
                    </ul>
                    </div>
                    
                    <div>
                    <h4 className="text-lg font-semibold mb-4">Contact & Support</h4>
                    <div className="space-y-2 text-gray-400">
                        <p>📍 123 Banking Street, Financial District</p>
                        <p>New York, NY 10001</p>
                        <p>📞 1-800-BANKING</p>
                        <p>✉️ info@racing2learn.com</p>
                        <p>🌐 Mon-Fri: 9AM-5PM EST</p>
                    </div>
                    </div>
                </div>
                
                <div className="border-t border-gray-700 mt-12 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center text-gray-400">
                    <p>© 2024 Race2L. All rights reserved.</p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <a href="#" className="hover:text-white">Privacy Policy</a>
                        <a href="#" className="hover:text-white">Terms of Service</a>
                        <a href="#" className="hover:text-white">Cookie Policy</a>
                        <a href="#" className="hover:text-white">Accessibility</a>
                    </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default CustFooter;