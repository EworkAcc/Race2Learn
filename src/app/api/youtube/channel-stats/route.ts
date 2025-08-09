import { NextResponse } from 'next/server';
import { prisma } from '@/lib/db';

export async function GET() {
    try {
        const stats = await prisma.channelStats.findFirst({
            orderBy: { createdAt: 'desc' }
        });

        if (!stats) {
            return NextResponse.json({
                subscriberCount: '2000',
                viewCount: '700000',
                videoCount: '600',
                channelCreatedDate: '2015-01-01T00:00:00Z'
            });
        }

        return NextResponse.json(stats);
    } catch (error) {
        console.error('Database error:', error);
        return NextResponse.json(
            { error: 'Failed to fetch channel statistics' },
            { status: 500 }
        );
    }
}