import React from 'react';
import { useAppSelector } from './hooks';
import './App.scss';
import { Tab } from './types';

import Navbar from './Components/Navbar';
import UserSubscriptions from './Components/UserSubscriptions';
import PodcastDirectory from './Components/PodcastDirectory';
import PodcastDetails from './Components/PodcastDetails';
import MediaBar from './Components/MediaBar';

const App: React.FC = () => {
  // Let's implement the basic functionality of react-router without actually using react-router.
  // I don't think we need it because URL handling will not be needed for an app like this.
  const currentTab = useAppSelector((state) => state.tabStore.currentTab);

  // Instead of props, components that require state will fetch it from the redux store
  // e.g. PodcastDetails will load whatever is in podcastDetailStore
  const handleCurrentTab = () => {
    switch (currentTab) {
      case Tab.UserSubscriptions:
        return (<UserSubscriptions />);
      case Tab.PodcastDirectory:
        return (<PodcastDirectory />);
      case Tab.PodcastDetails:
        return (<PodcastDetails />);
      default:
        return (<UserSubscriptions />);
    }
  };

  return (
    <>
      <Navbar />
      <div className='container'>
        { handleCurrentTab() }
      </div>
      <MediaBar />
    </>
  );
};

export default App;
