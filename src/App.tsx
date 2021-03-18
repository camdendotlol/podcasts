import React, { useState } from 'react';
import './App.scss';
import { Tabs } from './types';

import Navbar from './Components/Navbar';
import UserSubscriptions from './Components/UserSubscriptions';
import PodcastDirectory from './Components/PodcastDirectory';
import MediaBar from './Components/MediaBar';

const App: React.FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [currentTab, setCurrentTab] = useState<Tabs>(Tabs.UserSubscriptions);

  // Let's implement the basic functionality of react-router without actually using react-router.
  // I don't think we need it because URL handling will not be needed.
  const handleCurrentTab = () => {
    switch (currentTab) {
      case Tabs.UserSubscriptions:
        return (<UserSubscriptions />);
      case Tabs.PodcastDirectory:
        return (<PodcastDirectory />);
      default:
        return (<UserSubscriptions />);
    }
  };

  return (
    <>
      <Navbar setCurrentTab={setCurrentTab} />
      { handleCurrentTab() }
      <MediaBar />
    </>
  );
};

export default App;
