import Video from './Video';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../redux/store';
import { testVideo } from '../../data/data';

describe('Video component', () => {
  it('should render a components', () => {
    const { getByTestId } = render(
          <Provider store={store}>
              <Video video={testVideo} />
          </Provider>);
    const video = getByTestId('video');
    expect(video).toMatchSnapshot();
  });
});