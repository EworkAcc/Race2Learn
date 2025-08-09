import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/components/NavBar';
import CustFooter from '@/components/Footer';

export default function ProjectsPage() {
    const videos = [
        {
            id: '1Rbpu3ZlahA',
            title: '525 hp Chevy Corvette 6.2L V8 LS3-powered Porsche 911 Carrera 4s AWD (996 Chassis)',
            description: 'An incredible build featuring a Chevy LS3 V8 engine swap into a Porsche 911 Carrera 4s with all-wheel drive capability.',
            url: 'https://www.youtube.com/watch?v=1Rbpu3ZlahA',
            date: 'Mar 15, 2024'
        },
        {
            id: 'C9hduTP7dnQ',
            title: 'Racing2Learn: Budget Build: T-Maxx Brushless Conversion: Hobbywing EZRUN WP-SC8 3400KV Combo',
            description: 'Complete guide to converting your T-Maxx to brushless power with the Hobbywing EZRUN system for incredible performance on a budget.',
            url: 'https://www.youtube.com/watch?v=C9hduTP7dnQ',
            date: 'Feb 28, 2024'
        },
        {
            id: '0hZeOl49b9E',
            title: 'Traxxas Revo 3.3 Brushless Conversion: Forward Only Conversion, Comparison to Revo 2.5, Battery Tray',
            description: 'Detailed comparison and conversion guide for upgrading your Traxxas Revo 3.3 to brushless power with custom battery tray modifications.',
            url: 'https://www.youtube.com/watch?v=0hZeOl49b9E',
            date: 'Feb 10, 2024'
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar/>
            <div className="bg-white py-16">
                <div className="max-w-6xl mx-auto px-4 text-center">
                    <h1 className="text-4xl font-bold text-red-700 mb-4">Projects</h1>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                        YouTube channel that uses radio control vehicles to get kids excited about science and math!
                    </p>
                </div>
            </div>

            <div className="max-w-6xl mx-auto px-4 py-12">
                <h2 className="text-3xl font-bold text-red-700 text-center mb-12">Latest Videos</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {videos.map((video, index) => (
                        <div key={video.id} className="bg-red-400 rounded-lg shadow-lg overflow-hidden flex flex-col">
                            <div className="relative w-full" style={{ aspectRatio: '16/9', minHeight: '200px' }}>
                                <iframe
                                    src={`https://www.youtube.com/embed/${video.id}`}
                                    title={video.title}
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    className="w-full h-full border-0"
                                />
                            </div>
                            
                            <div className="p-6 flex-1 flex flex-col">
                                <div className="flex justify-between items-start mb-3">
                                    <span className="text-white text-sm font-medium">{video.date}</span>
                                </div>
                                
                                <h3 className="text-white font-bold text-lg mb-3 leading-tight">
                                    {video.title}
                                </h3>
                                
                                <p className="text-white/90 text-sm mb-6 leading-relaxed flex-1">
                                    {video.description}
                                </p>
                                
                                <div className="flex items-center justify-between mt-auto">
                                    <div className="flex items-center space-x-3">
                                        <Link 
                                            href="https://www.youtube.com/@Racing2Learn"
                                            className="flex items-center space-x-3 hover:opacity-80 transition-opacity"
                                        >
                                            <div className="w-8 h-8 rounded-full overflow-hidden bg-white flex items-center justify-center">
                                                <Image
                                                    src="/RC2LLogo.png"
                                                    alt="Racing2Learn"
                                                    width={32}
                                                    height={32}
                                                    className="rounded-full"
                                                />
                                            </div>
                                            <span className="text-white font-medium">Racing2Learn</span>
                                        </Link>
                                    </div>
                                    
                                    <Link 
                                        href={video.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-white hover:text-white/80 transition-colors font-medium flex items-center space-x-1"
                                    >
                                        <span>Go Watch</span>
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="bg-white py-16">
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="text-3xl font-bold text-red-700 text-center mb-4">
                        Impressive Numbers That Speak For Themselves
                    </h2>
                    <p className="text-gray-600 text-center mb-12">
                        Real-time statistics for the racing2learn youtube channel
                    </p>
                    
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="text-center">
                            <div className="text-4xl lg:text-5xl font-bold text-red-600 mb-2">2K+</div>
                            <div className="text-gray-600 text-sm uppercase tracking-wide">Subscribers</div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl lg:text-5xl font-bold text-red-600 mb-2">700k+</div>
                            <div className="text-gray-600 text-sm uppercase tracking-wide">Views</div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl lg:text-5xl font-bold text-red-600 mb-2">600+</div>
                            <div className="text-gray-600 text-sm uppercase tracking-wide">Videos</div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl lg:text-5xl font-bold text-red-600 mb-2">2015</div>
                            <div className="text-gray-600 text-sm uppercase tracking-wide">Est.</div>
                        </div>
                    </div>
                </div>
            </div>
            <CustFooter/>
        </div>
    );
}