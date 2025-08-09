interface YouTubeVideo {
    videoId: string;
    title: string;
    description: string;
    url: string;
    thumbnail: string;
    publishedAt: Date;
}

interface YouTubeChannelStats {
    subscriberCount: string;
    viewCount: string;
    videoCount: string;
    channelCreatedDate: string;
}

export async function fetchChannelStats(): Promise<YouTubeChannelStats> {
    const response = await fetch(
        `https://www.googleapis.com/youtube/v3/channels?part=statistics,snippet&id=${process.env.YOUTUBE_CHANNEL_ID}&key=${process.env.YOUTUBE_API_KEY}`
    );

    if (!response.ok) {
        throw new Error(`YouTube API Error: ${response.status}`);
    }

    const data = await response.json();
    
    if (!data.items || data.items.length === 0) {
        throw new Error('Channel not found');
    }

    const channel = data.items[0];
    
    return {
        subscriberCount: channel.statistics.subscriberCount,
        viewCount: channel.statistics.viewCount,
        videoCount: channel.statistics.videoCount,
        channelCreatedDate: channel.snippet.publishedAt
    };
}

export async function fetchRecentVideos(): Promise<YouTubeVideo[]> {
    const channelResponse = await fetch(
        `https://www.googleapis.com/youtube/v3/channels?part=contentDetails&id=${process.env.YOUTUBE_CHANNEL_ID}&key=${process.env.YOUTUBE_API_KEY}`
    );

    if (!channelResponse.ok) {
        throw new Error('Failed to fetch channel data');
    }

    const channelData = await channelResponse.json();
    const uploadsPlaylistId = channelData.items[0].contentDetails.relatedPlaylists.uploads;

    const videosResponse = await fetch(
        `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${uploadsPlaylistId}&maxResults=3&key=${process.env.YOUTUBE_API_KEY}`
    );

    if (!videosResponse.ok) {
        throw new Error('Failed to fetch videos');
    }

    const videosData = await videosResponse.json();

    return videosData.items.map((item: any) => ({
        videoId: item.snippet.resourceId.videoId,
        title: item.snippet.title,
        description: item.snippet.description.substring(0, 200) + '...',
        url: `https://www.youtube.com/watch?v=${item.snippet.resourceId.videoId}`,
        thumbnail: item.snippet.thumbnails.high?.url || item.snippet.thumbnails.default?.url,
        publishedAt: new Date(item.snippet.publishedAt)
    }));
}