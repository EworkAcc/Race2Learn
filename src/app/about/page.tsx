import React from 'react';
import Navbar from '@/components/NavBar';
import CustFooter from '@/components/Footer';
import Image from 'next/image';
import image from './tiresBG.jpg';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-white">
        <Navbar />
        <div className="relative h-screen w-full">
            <img
                src={typeof image === 'string' ? image : image.src}
                alt="Tires background"
                className="absolute inset-0 w-full h-full object-cover object-left"
            />
            <div className="relative z-10 flex items-center justify-start h-full px-8 max-w-6xl mx-auto">
                <div className="text-left max-w-2xl">
                    <h1 className="text-5xl font-bold text-black mb-6" style={{textShadow: '2px 2px 4px rgba(255,255,255,0.8)'}}>About us</h1>
                    <p className="text-xl text-black leading-relaxed" style={{textShadow: '1px 1px 2px rgba(255,255,255,0.8)'}}>
                        A nonprofit that gets kids excited about RC vehicles 
                        to get kids excited about science and math!
                    </p>
                </div>
            </div>
        </div>

        <div className="bg-[#a43a3a] text-white">
            <div className="py-16">
            <div className="max-w-6xl mx-auto px-8">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                    <p className="text-lg leading-relaxed mb-6">
                    We are a nonprofit organization dedicated to inspiring youth through hands-on learning in science, technology, engineering, math (STEM), and life skills—using radio-controlled (RC) vehicles, robotics, and full-size car projects as engaging educational platforms. 
                    </p>
                </div>
                <div className="flex justify-center">
                    <Image 
                        src="/remoteCar1.png" 
                        alt="RC Vehicle" 
                        width={400}
                        height={300}
                        className="max-w-full h-auto rounded-lg"
                    />
                </div>
                </div>
            </div>
            </div>

            <div className="py-16 bg-[#773232]">
            <div className="max-w-6xl mx-auto px-8">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="order-2 md:order-1 flex justify-center">
                    <Image 
                        src="/electricCar.png" 
                        alt="Electric RC Car" 
                        width={400}
                        height={300}
                        className="max-w-full h-auto rounded-lg"
                    />
                </div>
                <div className="order-1 md:order-2">
                    <p className="text-lg leading-relaxed mb-6]">
                    Our founder has been deeply involved in RC and automobiles for over 40 years, having started with RC cars at a young age. That early interest in building and experimenting with technology sparked a lifelong passion for engineering and innovation, eventually leading to a successful career in the tech industry.  RODS
                    </p>
                </div>
                </div>
            </div>
            </div>

            <div className="py-16 bg-[#a43a3a]">
            <div className="max-w-6xl mx-auto px-8">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                    <p className="text-lg leading-relaxed mb-6">
                    Now, as a parent, he sees firsthand how RC and robotics make learning exciting—turning everyday spaces into creative classrooms where kids build, explore, and connect. Every outing with RC vehicles draws a crowd, encouraging curiosity, conversation, and community.                     </p>
                </div>
                <div className="flex justify-center">
                    <Image 
                        src="/remoteCar2.jpg" 
                        alt="RC Car in Action" 
                        width={400}
                        height={300}
                        className="max-w-full h-auto rounded-lg shadow-lg"
                    />
                </div>
                </div>
            </div>
            </div>

            <div className="py-16 bg-[#773232]">
            <div className="max-w-6xl mx-auto px-8">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                <Image 
                    src="/engine.png" 
                    alt="RC Car in Action" 
                    width={400}
                    height={300}
                    className="max-w-full h-auto rounded-lg shadow-lg"
                />
                <div className="order-1 md:order-2">
                    <p className="text-lg leading-relaxed mb-6">
                    We are expanding our impact by adding full-size car projects and robotics into our programs, giving youth real-world exposure to mechanics, electronics, and problem-solving. We currently maintain a growing fleet of RC vehicles and robotics kits and are actively working to expand and repair them so we can reach even more children locally and, eventually, in communities across the country and around the world. 
                    </p>
                </div>
                </div>
            </div>
            </div>
        </div>

        <CustFooter />

    </div>
  );
};

export default AboutPage;