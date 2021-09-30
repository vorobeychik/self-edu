import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getVideos } from '../requests/requests';
import { RootState } from './store';
import { VideoType } from '../types/types';




export const searchVideos:any = createAsyncThunk(
  'app/fetchVideos',
  async ({ query, searchMode }:{ query: string, searchMode: SearchMode }) => {
    const videos = await getVideos(query);
    return { videos, searchMode };
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
    [searchVideos.fulfilled]: (state:AppInitialState, action:PayloadAction<{ videos:VideoType[], searchMode: SearchMode }> ) => {
      if (action.payload.searchMode === SearchMode.Insert){
        state.videos = action.payload.videos;
      } else {
        state.videos = [...state.videos, ... action.payload.videos];
      }

    },
  },
});

export default appSlice.reducer;
export const { setQuery  } = appSlice.actions;

export const selectQuery = (state:RootState) => state.app.query;
export const selectVideos = (state: RootState) => state.app.videos;