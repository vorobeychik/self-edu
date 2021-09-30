import axios from 'axios';
import { testVideos } from '../data/data';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../redux/store';
import userEvent from '@testing-library/user-event';
import App from '../App';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;



describe('reqests', () => {
  it('fetches from api', async () => {
    mockedAxios.get.mockImplementation(() => Promise.resolve({ data : testVideos }));
    const { getByTestId, findByTestId } = render(
        <Provider store={store} ><App /> </Provider>,
    );
    const button = getByTestId('search-button');
    userEvent.click(button);
    const videoContainer = await findByTestId('video');
    console.log(videoContainer);



  });
});