import React, { useEffect, useState } from 'react';
import Parser from 'rss-parser';
import { useAppSelector } from '../../hooks';
import CORS_PROXY_URL from '../../config';
import { RSSData } from '../../types';
import EpisodeItem from './EpisodeItem';

const PodcastDetails: React.FC = () => {
  const [episodes, setEpisodes] = useState<RSSData[]>([]);

  const parser = new Parser();

  const currentPodcast = useAppSelector((state) => state.podcastDetailStore.podcastDetail);

  const getRssObject = async () => {
    try {
      const res = await parser.parseURL(`${CORS_PROXY_URL}${currentPodcast.feedUrl}`);
      return res;
    } catch (e) {
      throw new Error(e);
    }
  };

  useEffect(() => {
    const getInfo = async () => {
      try {
        const podcastObject = await getRssObject();
        const episodeArray = podcastObject.items;
        if (episodeArray) {
          setEpisodes(episodeArray);
        }
      } catch (e) {
        // TODO: error messages of some sort
      }
    };
    void getInfo();
  }, []);

  return (
    <div>
      <p>{currentPodcast.artistName}</p>
      <ul>
        {episodes.map((e: RSSData) =>
          <EpisodeItem
            key={e.guid}
            episodeDetails={e}
          />
        )}
      </ul>
    </div>
  );
};

export default PodcastDetails;
