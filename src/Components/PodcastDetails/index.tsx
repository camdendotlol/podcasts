import React, { useEffect, useState } from 'react';
import Parser from 'rss-parser';
import { useAppSelector } from '../../hooks';
import CORS_PROXY_URL from '../../config';
import { RSSData } from '../../types';
import EpisodeItem from './EpisodeItem';

const PodcastDetails: React.FC = () => {
  const [episodes, setEpisodes] = useState<RSSData[]>([]);
  const [showAll, setShowAll] = useState<boolean>(false);

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

  const completeList = () => {
    if (showAll) {
      return (
        <>
          <h3>More Episodes</h3>
          <ul className='episode-list'>
            {episodes.slice(5, episodes.length).map((e: RSSData) =>
              <EpisodeItem
                key={e.guid}
                episodeDetails={e}
              />
            )}
          </ul>
        </>
      );
    }
    
  };

  return (
    <div className='details-view'>
      <img
        src={currentPodcast.artworkUrl600}
        className='details-view-artwork'
        alt=""
      />
      <h1>{currentPodcast.collectionName}</h1>
      <h3>Recent Episodes</h3>
      <ul className='episode-list'>
        {episodes.slice(0, 5).map((e: RSSData) =>
          <EpisodeItem
            key={e.guid}
            episodeDetails={e}
          />
        )}
      </ul>
      <button
        onClick={() => setShowAll(!showAll)} 
        className='show-all-episodes-btn'
      >
          {showAll ? 'Hide' : 'Show All'}
      </button>
      {completeList()}
    </div>
  );
};

export default PodcastDetails;
