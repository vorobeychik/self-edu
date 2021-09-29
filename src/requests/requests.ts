import axios from 'axios';
import { VideoId, VideoType } from '../types/types';

const link = 'https://youtube.googleapis.com/youtube/v3/';
const apiKey = 'AIzaSyBsWryzykEdGaOZviswelvN9-2sAiKX7x4';

enum RequestTypes{
  Snippet = 'snippet',
  Statistics = 'statistics',
  SnippetAndStatistics = 'snippet%2Cstatistics',
  Id = 'id',
}



async function getVideosStatistic(ids:string[]){
  const idList = ids.join();
  const { data: { items : videos } } = await axios.get(`${link}videos?part=${RequestTypes.SnippetAndStatistics}&id=${idList}&key=${apiKey}`);
  return videos;
}

async function getChannelStatistic(ids:string[]){
  const idList = ids;
  const { data: { items: channels } } = await axios.get(`${link}channels?part=${RequestTypes.SnippetAndStatistics}&id=${idList}&key=${apiKey}`);
  return channels;
}

async function getVideoIds(query:string, maxResults:number){
  const { data: { items: videoIds } } = await axios.get(`${link}search?type=video&part=${RequestTypes.Id}&q=${query}&maxResults=${maxResults}&key=${apiKey}`);
  return videoIds;
}

export async function getVideos(query:string, maxResults:number = 40){
  let videoIds = await getVideoIds(query, maxResults);
  videoIds = videoIds.map((videoId:VideoId) => videoId.id.videoId);

  let videos = await getVideosStatistic(videoIds);

  const channelIds = videos.map((video:VideoType) => video.snippet.channelId);
  const channels = await getChannelStatistic(channelIds);

  videos = videos.map((video:VideoType) => {
    const channel = channels.find((element:any) => element.id === video.snippet.channelId);
    return { ...video, channel };
  });
  console.log('полная стата', videos);
  return videos;
}