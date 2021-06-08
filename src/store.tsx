import { configureStore } from '@reduxjs/toolkit';
import tabReducer from './reducers/tabReducer';
import podcastDetailReducer from './reducers/podcastDetailReducer';

export const store = configureStore({
  reducer: {
    tabStore: tabReducer,
    podcastDetailStore: podcastDetailReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
