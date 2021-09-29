import Video from './Video';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../redux/store';
import { VideoType } from '../../types/types';

const video:VideoType = {
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

describe('Video component', () => {
  it('should render a components', () => {
    const { getByTestId } = render(
          <Provider store={store}>
              <Video video={video} />
          </Provider>);


  });
});