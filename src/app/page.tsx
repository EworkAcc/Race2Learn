import React from 'react';
import { Lightbulb, Users, BookOpen, Target, Play } from 'lucide-react';
import NavBar from '../components/NavBar';
import Link from 'next/link';
import CustFooter from '@/components/Footer';

const HomePage = () => {
  return (
    <div className="min-h-screen">
      <NavBar />
      <div 
        className="relative h-screen bg-cover bg-left bg-no-repeat h-screen w-full bg-[url('../../public/Chasis.jpg')]"
      >
        <div className="absolute inset-0 bg-opacity-40"></div>
        <div className="relative z-10 flex items-center justify-center h-full px-4">
          <div className="text-center max-w-4xl">
            <p className="text-xl md:text-2xl text-black text-extrabold mb-8 max-w-2xl mt-[500px] mr-[00px]">
              A Nonprofit That Gets Kids Excited About Math and Science
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-black text-white px-8 py-3 rounded-full font-semibold hover:bg-gray-100 hover:text-[#a43a3a] transition-all duration-300 transform hover:scale-105">
                Explore
              </button>
              <button className="border-2 border-black text-black px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-[#a43a3a] hover:border-white transition-all duration-300 transform hover:scale-105">
                Donate
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-[#a43a3a] mb-16">VALUES</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center bg-white p-8 rounded-2xl shadow-lg">
              <div className="w-16 h-16 bg-[#a43a3a] rounded-full flex items-center justify-center mx-auto mb-6">
                <Lightbulb className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#a43a3a] mb-4">Wisdom</h3>
              <p className="text-gray-600">
                Teaching kids learning and analytical continuous thinking
              </p>
            </div>
            <div className="text-center bg-white p-8 rounded-2xl shadow-lg">
              <div className="w-16 h-16 bg-[#a43a3a] rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#a43a3a] mb-4">Understanding</h3>
              <p className="text-gray-600">
                Through listening and interactive comprehension and doing
              </p>
            </div>
            <div className="text-center bg-white p-8 rounded-2xl shadow-lg">
              <div className="w-16 h-16 bg-[#a43a3a] rounded-full flex items-center justify-center mx-auto mb-6">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#a43a3a] mb-4">KNOWLEDGE</h3>
              <p className="text-gray-600">
                Embracing a general thorough experience, including writing
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="py-20 bg-gray-100">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="/tractor.png" 
                alt="RC Car Project" 
                className="rounded-2xl shadow-lg h-80 w-auto object-contain"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-[#a43a3a] mb-6">RC Projects</h2>
              <p className="text-gray-600 mb-6">UPCOMING</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  Experiencing RC vehicles hands-on
                </li>
                <li className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  Learning about engineering and mechanics
                </li>
                <li className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  Developing problem solving skills
                </li>
                <li className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  Building and customizing RC cars
                </li>
              </ul>
              <Link href="/projects">
                <button className="bg-[#a43a3a] text-white px-6 py-3 rounded-full font-semibold hover:bg-red-700 transition-all duration-300">
                  Explore Projects
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[#a43a3a] mb-6">Racing2learn YouTube</h2>
              <p className="text-gray-600 mb-6">What You'll Find on the Racing2Learn YouTube Channel</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  Hands-on RC action
                </li>
                <li className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  Event highlights
                </li>
                <li className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  STEM in motion
                </li>
                <li className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  Tutorials & Reviews
                </li>
              </ul>
              <Link href="https://www.youtube.com/c/Racing2Learn">
                <button className="bg-[#a43a3a] text-white px-6 py-3 rounded-full font-semibold hover:bg-red-700 transition-all duration-300 flex items-center gap-2">
                  <Play className="w-5 h-5" />
                  YouTube
                </button>
              </Link>
            </div>
            <div className="flex justify-center">
              <div className="w-80 h-60 bg-gray-200 rounded-2xl flex items-center justify-center shadow-lg">
                <div className="text-center">
                  <Link href="https://www.youtube.com/c/Racing2Learn">
                    <div className="text-6xl font-bold text-red-600 mb-2">YouTube</div>
                    <div className="w-20 h-14 bg-red-600 rounded mx-auto flex items-center justify-center">
                      <Play className="w-8 h-8 text-white fill-white" />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <CustFooter />

    </div>
  );
};

export default HomePage;