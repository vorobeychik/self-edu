import React, { useState } from 'react';
import styles from './Video.module.css';
import Skeleton from 'react-loading-skeleton';
import { VideoType } from '../../types/types';

interface VideoProps{
  video: VideoType,
}

const Video = ({ video }:VideoProps) => {
  let [isPreviewLoaded, setLoadedPreview] = useState(false);
  let [isIconLoaded, setLoadedIcon] = useState(false);

  function previewLoadHandler() {
    setLoadedPreview(true);
  }

  function iconLoadHandler(){
    setLoadedIcon(true);
  }


  return (
        <div className={styles.video} data-testid="video">
            <a href={`https://www.youtube.com/watch?v=${video.id}`}>
                <img
                    className={styles.video_preview}
                    src={video.snippet.thumbnails.high.url}
                    onLoad={previewLoadHandler}
                    style={{ display: isPreviewLoaded ?  'initial' : 'none'  }}
                />
            </a>
            {!isPreviewLoaded && <Skeleton height={195} width={'100%'} />}
            <div className={styles.video_description}>
                <a href={'https://www.youtube.com/channel/UCz7ttPTNO_S1PS9rNsCt_iA'}>
                    <img
                        src={ video.channel.snippet.thumbnails.medium.url}
                        className={styles.channel_icon}
                        onLoad={iconLoadHandler}
                        onError={iconLoadHandler}
                        style={{ display: isIconLoaded ?  'initial' : 'none'  }}
                    />
                </a>
                {!isIconLoaded && <Skeleton circle={true} height={36} width={36} style={{ marginRight: '10px',
                  marginTop: '50%' }}/>}
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