'use client';

import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/components/NavBar';
import CustFooter from '@/components/Footer';
import { useState, useEffect } from 'react';

interface Video {
    id: string;
    title: string;
    description: string;
    url: string;
    date: string;
    thumbnail: string;
    publishedAt: string;
}

interface ChannelStats {
    subscriberCount: string;
    viewCount: string;
    videoCount: string;
    channelCreatedDate: string;
}

export default function ProjectsPage() {
    const [videos, setVideos] = useState<Video[]>([]);
    const [channelStats, setChannelStats] = useState<ChannelStats | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            setLoading(true);
            
            const [statsResponse, videosResponse] = await Promise.all([
                fetch('/api/youtube/channel-stats'),
                fetch('/api/youtube/recent-videos')
            ]);

            if (statsResponse.ok && videosResponse.ok) {
                const stats = await statsResponse.json();
                const videosData = await videosResponse.json();
                
                setChannelStats(stats);
                setVideos(videosData.videos || []);
                setError(null);
            } else {
                throw new Error('Failed to fetch data from database');
            }
        } catch (err) {
            console.error('Error fetching data:', err);
            setError('Failed to load data');
        } finally {
            setLoading(false);
        }
    };

    const formatNumber = (num: string | number): string => {
        const numValue = typeof num === 'string' ? parseInt(num) : num;
        if (numValue >= 1000000) {
            return (numValue / 1000000).toFixed(1) + 'M';
        } else if (numValue >= 1000) {
            return (numValue / 1000).toFixed(1) + 'K';
        }
        return numValue.toString();
    };

    const formatDate = (dateString: string): string => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', { 
            year: 'numeric', 
            month: 'short', 
            day: 'numeric' 
        });
    };

    const currentYear = new Date().getFullYear();
    const channelStartYear = channelStats?.channelCreatedDate 
        ? new Date(channelStats.channelCreatedDate).getFullYear()
        : 2015;

    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar/>
            <div className="bg-white py-16">
                <div className="max-w-6xl mx-auto px-4 text-center">
                    <h1 className="text-4xl font-bold text-red-700 mb-4">Projects</h1>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                        YouTube channel that uses radio control vehicles to get kids excited about science and math!
                    </p>
                    {error && (
                        <p className="text-orange-600 text-sm mt-2">
                            ⚠️ {error}
                        </p>
                    )}
                </div>
            </div>

            <div className="max-w-6xl mx-auto px-4 py-12">
                <div className="flex justify-between items-center mb-12">
                    <h2 className="text-3xl font-bold text-red-700">
                        {loading ? 'Loading Latest Videos...' : 'Latest Videos'}
                    </h2>
                    <div className="text-gray-500 text-sm">
                        Updated daily at 6 AM UTC
                    </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {videos.map((video, index) => (
                        <div key={video.id} className="bg-red-400 rounded-lg shadow-lg overflow-hidden flex flex-col h-full">
                            <div className="relative w-full bg-black" style={{ aspectRatio: '16/9', minHeight: '200px' }}>
                                {loading ? (
                                    <div className="w-full h-full bg-gray-300 animate-pulse flex items-center justify-center">
                                        <span className="text-gray-500">Loading...</span>
                                    </div>
                                ) : (
                                    <iframe
                                        src={`https://www.youtube.com/embed/${video.id}`}
                                        title={video.title}
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                        className="w-full h-full border-0"
                                    />
                                )}
                            </div>
                            
                            <div className="p-6 flex-1 flex flex-col">
                                <div className="flex justify-between items-start mb-3">
                                    <span className="text-white text-sm font-medium">
                                        {loading ? '...' : formatDate(video.publishedAt)}
                                    </span>
                                </div>
                                
                                <h3 className="text-white font-bold text-lg mb-3 leading-tight">
                                    {loading ? 'Loading video title...' : video.title}
                                </h3>
                                
                                <p className="text-white/90 text-sm mb-6 leading-relaxed flex-1">
                                    {loading ? 'Loading description...' : video.description}
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
                                        <span>Watch</span>
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7-7 7" />
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
                            <div className="text-4xl lg:text-5xl font-bold text-red-600 mb-2">
                                {loading ? '...' : formatNumber(channelStats?.subscriberCount || '0') + '+'}
                            </div>
                            <div className="text-gray-600 text-sm uppercase tracking-wide">Subscribers</div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl lg:text-5xl font-bold text-red-600 mb-2">
                                {loading ? '...' : formatNumber(channelStats?.viewCount || '0') + '+'}
                            </div>
                            <div className="text-gray-600 text-sm uppercase tracking-wide">Views</div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl lg:text-5xl font-bold text-red-600 mb-2">
                                {loading ? '...' : formatNumber(channelStats?.videoCount || '0') + '+'}
                            </div>
                            <div className="text-gray-600 text-sm uppercase tracking-wide">Videos</div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl lg:text-5xl font-bold text-red-600 mb-2">
                                {loading ? '...' : channelStartYear}
                            </div>
                            <div className="text-gray-600 text-sm uppercase tracking-wide">Est.</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="text-right pr-8 pb-4">
                <span className="text-gray-300 text-sm">miro</span>
            </div>
            <CustFooter/>
        </div>
    );
}