/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';
import Parser from 'rss-parser';
import { useAppSelector } from '../../hooks';

const PodcastDetails: React.FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [episodes, setEpisodes] = useState<Parser>();

  const parser = new Parser();

  const currentPodcast = useAppSelector((state) => state.podcastDetailStore.podcastDetail);

  const getRssObject = async () => {
    try {
      const res = await parser.parseURL(`http://localhost:1337/${currentPodcast.feedUrl}`);
      return res;
    } catch (e) {
      throw new Error(e);
    }
  };

  useEffect(() => {
    const getInfo = async () => {
      try {
        const podcastObject = await getRssObject();
        console.log(podcastObject.items);
      } catch (e) {
        console.log(e);
      }
    };
    // eslint-disable-next-line no-void
    void getInfo();
  }, []);

  return (
    <div>
      <p>{currentPodcast.artistName}</p>
    </div>
  );
};

export default PodcastDetails;
