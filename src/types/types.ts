export type VideoType = {
  id: string,
  snippet:{
    title: string,
    channelId: string,
    channelTitle: string,
    thumbnails:{
      high:{
        url: string,
      }
      standard:{
        url: string,
      }
    }
  },
  statistics:{
    viewCount: number,
    likeCount: number,
  },
  channel:Channel,
};

export type Channel = {
  id: string,
  snippet:{
    title: string,
    thumbnails:{
      default:{
        url: string,
      },
      medium:{
        url: string,
      },
    }
  }
};
export type VideoId = {
  'kind': string,
  'etag': string,
  'id': {
    'kind': string,
    'videoId': string
  }
};