import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { podcastMetadata } from '../types';

export interface PodcastDetailState {
  podcastDetail: podcastMetadata
}

const initialState = { podcastDetail: {} } as PodcastDetailState;

const podcastDetailSlice = createSlice({
  name: 'podcastDetail',
  initialState,
  reducers: {
    setPodcastDetail(state, action: PayloadAction<podcastMetadata>) {
      state.podcastDetail = action.payload;
    },
  },
});

export const { setPodcastDetail } = podcastDetailSlice.actions;

export default podcastDetailSlice.reducer;

export const podcastDetailSelector = (state: {
  podcastDetailStore: PodcastDetailState
  }): PodcastDetailState => state.podcastDetailStore;
