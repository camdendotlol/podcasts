import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface MediaPlayerState {
  isVisible: boolean,
  streamURL: string | null
}

const initialState: MediaPlayerState = {
  isVisible: false,
  streamURL: null
};

const mediaPlayerSlice = createSlice({
  name: 'podcastDetail',
  initialState,
  reducers: {
    setMediaPlayerURL(state, action: PayloadAction<string | undefined>) {
      // It's possible that not every podcast episode has a URL included.
      // This should be very rare but we need to take care of the possibility anyway with the else block.
      if (action.payload) {
        state.streamURL = action.payload;
      } else {
        state = state;
      }
    },
  },
});

export const { setMediaPlayerURL } = mediaPlayerSlice.actions;

export default mediaPlayerSlice.reducer;

export const mediaPlayerSelector = (state: {
  mediaPlayerStore: MediaPlayerState
}): MediaPlayerState => state.mediaPlayerStore;
