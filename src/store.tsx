import { configureStore } from '@reduxjs/toolkit';
import tabReducer from './reducers/tabReducer';

export const store = configureStore({
  reducer: {
    tabStore: tabReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
