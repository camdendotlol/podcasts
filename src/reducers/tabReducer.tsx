import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Tab } from '../types';

export interface TabState {
  currentTab: Tab
}

const initialState = { currentTab: Tab.UserSubscriptions } as TabState;

const tabSlice = createSlice({
  name: 'tabs',
  initialState,
  reducers: {
    setCurrentTab(state, action: PayloadAction<Tab>) {
      state.currentTab = action.payload;
    },
  },
});

export const { setCurrentTab } = tabSlice.actions;

export default tabSlice.reducer;

export const tabSelector = (state: { tabStore: TabState }): TabState => state.tabStore;
