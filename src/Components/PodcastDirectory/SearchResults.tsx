import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { podcastMetadata, iTunesResponse } from '../../types';

interface Props {
  searchQuery: string
}

const SearchResults: React.FC<Props> = ({ searchQuery }: Props) => {
  const [results, setResults] = useState<Array<podcastMetadata>>();

  // See here for API details:
  // https://developer.apple.com/library/archive/documentation/AudioVideo/Conceptual/iTuneSearchAPI/Searching.html#//apple_ref/doc/uid/TP40017632-CH5-SW1

  useEffect(() => {
    // Don't spam Apple's servers if the user hasn't entered a query yet
    if (searchQuery !== '') {
      const querySearch = async () => {
        const searchUrl = `https://itunes.apple.com/search?term=${searchQuery}&country=US&media=podcast&limit=50`;
        const response = await axios.get<iTunesResponse>(searchUrl);
        setResults(response.data.results);
      };
      querySearch();
    }
  }, [searchQuery]);

  const podcastInfo = (podcast: podcastMetadata) => (
    <div>
      <img src={podcast.artworkUrl100} alt="" />
      <p>{podcast.collectionName}</p>
    </div>
  );

  return (
    <div>
      {/* results will be undefined on first render, so avoid returning anything until
      querySearch has done its thing */}
      { results ? results.map((r) => podcastInfo(r)) : null }
    </div>
  );
};

export default SearchResults;
