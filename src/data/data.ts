import { VideoType } from '../types/types';

export const testVideo:VideoType = {
  id: '123123',
  snippet:{
    title: 'Js',
    channelId: '123123123',
    channelTitle: 'learn js',
    thumbnails:{
      high:{
        url: 'asd',
      },
      standard:{
        url: 'asd',
      },
    },
  },
  statistics:{
    viewCount: 123123,
    likeCount: 123123,
  },
  channel:{
    snippet:{
      title: 'learn js',
      thumbnails:{
        default:{
          url: 'asdasdasd',
        },
        medium:{
          url: 'asdasd',
        },
      },
    },
  },
};

export const testVideos: VideoType[] = new Array(40).fill(0).map(() =>  JSON.parse(JSON.stringify(testVideo)));