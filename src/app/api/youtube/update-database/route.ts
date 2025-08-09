import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/db';
import { fetchChannelStats, fetchRecentVideos } from '@/lib/youtube';

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        if (body.secret !== process.env.CRON_SECRET) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        console.log('Starting daily YouTube data update...');

        const [channelStats, videos] = await Promise.all([
            fetchChannelStats(),
            fetchRecentVideos()
        ]);

        await prisma.channelStats.deleteMany({});
        await prisma.channelStats.create({
            data: channelStats
        });

        await prisma.video.deleteMany({});
        await prisma.video.createMany({
            data: videos
        });

        await prisma.cronLog.create({
            data: {
                status: 'success',
                message: `Updated ${videos.length} videos and channel stats`
            }
        });

        console.log('YouTube data update completed successfully');

        return NextResponse.json({ 
            success: true, 
            message: `Updated ${videos.length} videos and channel stats`,
            timestamp: new Date().toISOString()
        });

    } catch (error) {
        console.error('Cron job error:', error);
        
        await prisma.cronLog.create({
            data: {
                status: 'error',
                message: error instanceof Error ? error.message : 'Unknown error'
            }
        });

        return NextResponse.json(
            { error: 'Failed to update YouTube data' },
            { status: 500 }
        );
    }
}