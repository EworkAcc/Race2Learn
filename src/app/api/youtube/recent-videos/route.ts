import { NextResponse } from 'next/server';
import { prisma } from '@/lib/db';

interface YouTubePlaylistItem {
    snippet: {
        resourceId: {
            videoId: string;
        };
        title: string;
        description: string;
        publishedAt: string;
        thumbnails: {
            high?: { url: string };
            default?: { url: string };
        };
    };
}

interface DatabaseVideo {
    id: string;
    videoId: string;
    title: string;
    description: string;
    url: string;
    thumbnail: string;
    publishedAt: Date;
    createdAt: Date;
    updatedAt: Date;
}

export async function GET() {
    try {
        const videos = await prisma.video.findMany({
            orderBy: { publishedAt: 'desc' },
            take: 3
        });

        if (videos.length === 0) {
            const fallbackVideos = [
                {
                    id: '1Rbpu3ZlahA',
                    title: '525 hp Chevy Corvette 6.2L V8 LS3-powered Porsche 911 Carrera 4s AWD (996 Chassis)',
                    description: 'An incredible build featuring a Chevy LS3 V8 engine swap into a Porsche 911 Carrera 4s with all-wheel drive capability.',
                    url: 'https://www.youtube.com/watch?v=1Rbpu3ZlahA',
                    date: 'Mar 15, 2024',
                    thumbnail: '',
                    publishedAt: '2024-03-15T00:00:00Z'
                },
                {
                    id: 'C9hduTP7dnQ',
                    title: 'Racing2Learn: Budget Build: T-Maxx Brushless Conversion: Hobbywing EZRUN WP-SC8 3400KV Combo',
                    description: 'Complete guide to converting your T-Maxx to brushless power with the Hobbywing EZRUN system for incredible performance on a budget.',
                    url: 'https://www.youtube.com/watch?v=C9hduTP7dnQ',
                    date: 'Feb 28, 2024',
                    thumbnail: '',
                    publishedAt: '2024-02-28T00:00:00Z'
                },
                {
                    id: '0hZeOl49b9E',
                    title: 'Traxxas Revo 3.3 Brushless Conversion: Forward Only Conversion, Comparison to Revo 2.5, Battery Tray',
                    description: 'Detailed comparison and conversion guide for upgrading your Traxxas Revo 3.3 to brushless power with custom battery tray modifications.',
                    url: 'https://www.youtube.com/watch?v=0hZeOl49b9E',
                    date: 'Feb 10, 2024',
                    thumbnail: '',
                    publishedAt: '2024-02-10T00:00:00Z'
                }
            ];
            
            return NextResponse.json({ videos: fallbackVideos });
        }

        const formattedVideos = videos.map((video: DatabaseVideo) => ({
            id: video.videoId,
            title: video.title,
            description: video.description,
            url: video.url,
            date: video.publishedAt.toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'short',
                day: 'numeric'
            }),
            thumbnail: video.thumbnail,
            publishedAt: video.publishedAt.toISOString()
        }));

        return NextResponse.json({ videos: formattedVideos });
    } catch (error) {
        console.error('Database error:', error);
        return NextResponse.json(
            { error: 'Failed to fetch recent videos' },
            { status: 500 }
        );
    }
}