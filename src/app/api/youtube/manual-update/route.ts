import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/db';
import { fetchChannelStats, fetchRecentVideos } from '@/lib/youtube';

export async function POST(request: NextRequest) {
    try {
        console.log('Manual YouTube data update started...');

        const [channelStats, videos] = await Promise.all([
            fetchChannelStats(),
            fetchRecentVideos()
        ]);

        await prisma.video.deleteMany({});
        await prisma.channelStats.deleteMany({});

        await prisma.channelStats.create({
            data: channelStats
        });

        await prisma.video.createMany({
            data: videos
        });

        return NextResponse.json({ 
            success: true, 
            message: `Manually updated ${videos.length} videos and channel stats`,
            data: { channelStats, videosCount: videos.length }
        });

    } catch (error) {
        console.error('Manual update error:', error);
        return NextResponse.json(
            { error: error instanceof Error ? error.message : 'Update failed' },
            { status: 500 }
        );
    }
}