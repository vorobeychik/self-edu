import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getVideos } from '../requests/requests';
import { RootState } from './store';
import { VideoType } from '../types/types';


export const searchVideos:any = createAsyncThunk(
  'app/fetchVideos',
  async (query:string) => {
    return getVideos(query);
  },
);

type AppInitialState = {
  videos: VideoType[],
  query: string,
};

const initialState:AppInitialState = {
  query: '',
  videos: [],
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers:{
    setQuery:(state, action:PayloadAction<string>) =>{
      state.query = action.payload;
    },
  },
  extraReducers:{
    [searchVideos.fulfilled]: (state:AppInitialState, action:PayloadAction<VideoType[]> ) => {
      state.videos = action.payload;
    },
  },
});

export default appSlice.reducer;
export const { setQuery  } = appSlice.actions;

export const selectQuery = (state:RootState) => state.app.query;
export const selectVideos = (state: RootState) => state.app.videos;