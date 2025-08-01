import React from 'react';
import { Check, Shield, Users, Gift } from 'lucide-react';
import Navbar from '@/components/NavBar';
import CustFooter from '@/components/Footer';
import Link from 'next/link';

const DonatePage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
        <Navbar />
        <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-[#a43a3a] mb-4">Support Us Today</h1>
            <p className="text-xl text-gray-600">Pick a site to support us from</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
                <div className="flex items-center justify-center mb-6">
                    <div className="w-16 h-16 rounded-full overflow-hidden bg-white shadow-md mr-4 flex items-center justify-center">
                        <img 
                        src="/PaypalLogo.png" 
                        alt="PayPal Logo" 
                        className="h-12 w-12 object-contain"
                        />
                    </div>
                    <h2 className="text-3xl font-bold text-gray-800">PayPal</h2>
                </div>

                <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Features:</h3>
                <ul className="space-y-3">
                    <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Fast and secure donation by accepted worldwide</span>
                    </li>
                    <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Use your PayPal balance, credit, or debit cards</span>
                    </li>
                    <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">One-time or monthly giving options</span>
                    </li>
                    <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Secure payment with PayPal Buyer Protection</span>
                    </li>
                    <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Tax-deductible receipts provided after donation</span>
                    </li>
                </ul>
                </div>

                <button className="w-full bg-[#a43a3a] text-white py-4 rounded-xl font-semibold text-lg hover:bg-red-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
                Select Plan
                </button>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200 relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-[#a43a3a] text-white px-6 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                </span>
                </div>

                <div className="flex items-center justify-center mb-6 mt-4">
                <img 
                    src="/PatreonLogo.png" 
                    alt="Patreon Logo" 
                    className="h-16 w-auto object-contain mr-4"
                />
                <h2 className="text-3xl font-bold text-gray-800">Patreon</h2>
                </div>

                <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Features:</h3>
                <ul className="space-y-3">
                    <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Monthly recurring support for consistent funding</span>
                    </li>
                    <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Exclusive updates and behind-the-scenes content</span>
                    </li>
                    <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Community of supporters with shared mission</span>
                    </li>
                    <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Multiple pledge tiers with different benefits</span>
                    </li>
                    <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Easy to manage subscriptions and billing</span>
                    </li>
                    <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Direct connection with Racing2Learn team</span>
                    </li>
                </ul>
                </div>
                <Link href="https://www.patreon.com/racing2learn">
                    <button className="w-full bg-[#a43a3a] text-white py-4 rounded-xl font-semibold text-lg hover:bg-red-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
                    Select Plan
                    </button>
                </Link>
            </div>
            </div>

            <div className="mt-16 bg-white rounded-2xl shadow-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-[#a43a3a] text-center mb-8">Why Your Support Matters</h3>
            <div className="grid md:grid-cols-2 gap-8">
                <div className="text-center">
                    <div className="w-16 h-16 bg-[#a43a3a] rounded-full flex items-center justify-center mx-auto mb-4">
                        <Users className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-2">Community Impact</h4>
                    <p className="text-gray-600">Your donation directly supports STEM education that inspires the next generation of innovators.</p>
                </div>
                <div className="text-center">
                    <div className="w-16 h-16 bg-[#a43a3a] rounded-full flex items-center justify-center mx-auto mb-4">
                        <Shield className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-2">Secure Giving</h4>
                    <p className="text-gray-600">All donations are processed securely and you'll receive immediate confirmation and receipts.</p>
                </div>
            </div>
            </div>

            <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">
                Need help with your donation or have questions?
            </p>
            <p className="text-[#a43a3a] font-semibold">
                Contact us at: <a href="mailto:donate@racing2learn.org" className="underline">donate@racing2learn.org</a>
            </p>
            <p className="text-gray-600 mt-2 mb-10">
                Tax ID: 12-3456789
            </p>
            </div>
        </div>
        <CustFooter/>
    </div>
  );
};

export default DonatePage;