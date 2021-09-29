import React from 'react';
import styles from './Video.module.css';
import { VideoType } from '../../types/types';

interface VideoProps{
  video: VideoType,
}

const Video = ({ video }:VideoProps) => {
  return (
        <div className={styles.video} data-testid="video">
            <a href={`https://www.youtube.com/watch?v=${video.id}`}>
                <img
                    className={styles.video_preview}
                    src={video.snippet.thumbnails.high.url}
                />
            </a>
            <div className={styles.video_description}>
                <img src={ video.channel.snippet.thumbnails.medium.url} className={styles.channel_icon}/>
                <div className={styles.video_description_text}>
                    <a href={`https://www.youtube.com/watch?v=${video.id}`}>
                        <p className={styles.video_title}>{ video.snippet.title }</p>
                    </a>
                    <p className={styles.video_channel_name}>{ video.snippet.channelTitle }</p>
                    <div className={styles.video_statistic_container}>
                        <p className={styles.video_views}>Views { video.statistics.viewCount }</p>
                        <p className={styles.video_likes}>Likes { video.statistics.likeCount }</p>
                    </div>
                </div>
            </div>
        </div>
  );
};

export default Video;