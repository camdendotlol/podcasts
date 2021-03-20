import React from 'react';
import { useAppSelector } from './hooks';
import './App.scss';
import { Tab } from './types';

import Navbar from './Components/Navbar';
import UserSubscriptions from './Components/UserSubscriptions';
import PodcastDirectory from './Components/PodcastDirectory';
import MediaBar from './Components/MediaBar';

const App: React.FC = () => {
  // const [currentTab, setCurrentTab] = useState<Tab>(Tab.UserSubscriptions);

  const currentTab = useAppSelector((state) => state.tabStore.currentTab);

  // Let's implement the basic functionality of react-router without actually using react-router.
  // I don't think we need it because URL handling will not be needed.
  const handleCurrentTab = () => {
    switch (currentTab) {
      case Tab.UserSubscriptions:
        return (<UserSubscriptions />);
      case Tab.PodcastDirectory:
        return (<PodcastDirectory />);
      default:
        return (<UserSubscriptions />);
    }
  };

  return (
    <>
      <Navbar />
      { handleCurrentTab() }
      <MediaBar />
    </>
  );
};

export default App;
