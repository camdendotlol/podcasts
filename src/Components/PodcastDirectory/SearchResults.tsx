import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { podcastMetadata, iTunesResponse, Tab } from '../../types';
import { useAppDispatch } from '../../hooks';

import { setCurrentTab } from '../../reducers/tabReducer';
import { setPodcastDetail } from '../../reducers/podcastDetailReducer';

interface Props {
  searchQuery: string
}

const SearchResults: React.FC<Props> = ({ searchQuery }: Props) => {
  const [results, setResults] = useState<Array<podcastMetadata>>();

  const dispatch = useAppDispatch();

  // See here for API details:
  // https://developer.apple.com/library/archive/documentation/AudioVideo/Conceptual/iTuneSearchAPI/Searching.html#//apple_ref/doc/uid/TP40017632-CH5-SW1

  useEffect(() => {
    // Don't spam Apple's servers if the user hasn't entered a query yet
    if (searchQuery !== '') {
      const querySearch = async (): Promise<void> => {
        const searchUrl = `https://itunes.apple.com/search?term=${searchQuery}&country=US&media=podcast&limit=50`;
        const response = await axios.get<iTunesResponse>(searchUrl);
        return setResults(response.data.results);
      };

      void querySearch();
    }
  }, [searchQuery]);

  const shortenTitle = (title: string): string => {
    if (title.length < 20) {
      return title;
    }
    return `${title.slice(0, 20)}...`;
  };

  const openEpisodeDetails = (podcast: podcastMetadata) => {
    dispatch(setPodcastDetail(podcast));
    dispatch(setCurrentTab(Tab.PodcastDetails));
  };

  const podcastInfo = (podcast: podcastMetadata) => (
    <figure className="podcast-thumbnail" key={podcast.collectionId} onClick={() => openEpisodeDetails(podcast)}>
      <img src={podcast.artworkUrl100} alt="" />
      <figcaption>{shortenTitle(podcast.collectionName)}</figcaption>
    </figure>
  );

  return (
    <div>
      {/* results will be undefined on first render, so avoid
      returning anything until querySearch has done its thing */}
      <div className="podcast-thumbnail-grid">
        { results ? results.map((r) => podcastInfo(r)) : null }
      </div>
    </div>
  );
};

export default SearchResults;
