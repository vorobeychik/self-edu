import axios from 'axios';
import { Channel, VideoId, VideoType } from '../types/types';


const link = 'https://youtube.googleapis.com/youtube/v3/';
const apiKey = process.env.REACT_APP_API_KEY;

enum RequestTypes{
  Snippet = 'snippet',
  Statistics = 'statistics',
  SnippetAndStatistics = 'snippet%2Cstatistics',
  Id = 'id',
}

async function getVideosStatistic(ids:string[]):Promise<VideoType[]>{
  const idList = ids.join();
  const { data: { items : videos } } = await axios.get(`${link}videos?part=${RequestTypes.SnippetAndStatistics}&id=${idList}&key=${apiKey}`);
  return videos;
}

// 'https://youtube.googleapis.com/youtube/v3/videos?part=part-template'
// [{ 'part-tempalte':'part' }];
//
// const template = (link: string, args: {}[]) => {
//   args.forEach(({ key, value }) => {
//     link.replace(key, value);
//   });
// };

type VideoIdResponse = { videoIds: VideoId[], nextPageToken: string };
// type VideoResponse = { videos: videoType[], nextPageToken: string };

async function getChannelStatistic(ids:string[]):Promise<Channel[]>{
  const idList = ids;
  const { data: { items: channels } } = await axios.get(`${link}channels?part=${RequestTypes.SnippetAndStatistics}&id=${idList}&key=${apiKey}`);
  return channels;
}

async function getVideoIds(query:string, maxResults:number, pageToken: string):Promise<VideoIdResponse>{
  const { data: { items: videoIds, nextPageToken } } = await axios.get(`${link}search?type=video&part=${RequestTypes.Id}&q=${query}&pageToken=${pageToken}&maxResults=${maxResults}&key=${apiKey}`);
  return { videoIds, nextPageToken };
}

export async function getVideos(query:string, page: string, maxResults:number = 40): Promise<any>{
  let { videoIds, nextPageToken } = await getVideoIds(query, maxResults, page);
  const selectedVideosIds: string[] = videoIds.map((videoId:VideoId) => videoId.id.videoId);

  let videos = await getVideosStatistic(selectedVideosIds);

  const channelIds = videos.map((video:VideoType) => video.snippet.channelId);
  const channels = await getChannelStatistic(channelIds);

  videos = videos.map((video:VideoType) => {
    const channel = channels.find((element:Channel) => element.id === video.snippet.channelId)!;
    return { ...video, channel };
  });

  return  { videos, nextPageToken };


}