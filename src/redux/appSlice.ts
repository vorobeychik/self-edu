import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getVideos } from '../requests/requests';
import { RootState } from './store';
import { VideoType } from '../types/types';


interface SearchVideosProps{ query: string, searchMode: SearchMode, page:string }


export const searchVideos:any = createAsyncThunk(
  'app/fetchVideos',
  async ({ query, searchMode, page }:SearchVideosProps) => {
    const { videos, nextPageToken } = await getVideos(query, page);
    return { videos, searchMode, nextPageToken };
  },
);

type AppInitialState = {
  videos: VideoType[],
  query: string,
  page: string,
  isLoading: boolean,
};

const initialState:AppInitialState = {
  query: '',
  videos: [],
  page: '',
  isLoading: false,
};

export enum SearchMode{
  Add = 'Add',
  Insert = 'Insert',
}

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers:{
    setQuery:(state, action:PayloadAction<string>) =>{
      state.query = action.payload;
    },
  },
  extraReducers:{
    [searchVideos.fulfilled]: (state:AppInitialState, action:PayloadAction<{ videos:VideoType[], nextPageToken: string, searchMode:SearchMode }> ) => {
      console.log(action.payload);
      state.videos =  action.payload.searchMode === SearchMode.Insert ? action.payload.videos : state.videos.concat(action.payload.videos);
      state.page = action.payload.nextPageToken;
      state.isLoading = false;
      return state;
    },
    [searchVideos.pending]:(state:AppInitialState) => {
      state.isLoading = true;
    },
  },
});

export default appSlice.reducer;
export const { setQuery  } = appSlice.actions;
export const selectIsLoading = (state: RootState) => state.app.isLoading;
export const selectQuery = (state:RootState) => state.app.query;
export const selectQueryAndPage = (state: RootState) => ({ query: state.app.query, page: state.app.page });
export const selectVideos = (state: RootState) => state.app.videos;