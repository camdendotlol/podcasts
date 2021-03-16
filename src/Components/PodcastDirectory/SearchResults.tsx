import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { podcastMetadata, iTunesResponse } from '../../types';

const SearchResults: React.FC = () => {
  const [results, setResults] = useState<Array<podcastMetadata>>();

  // Note: iTunes defaults the location to English and language to American English
  // See https://developer.apple.com/library/archive/documentation/AudioVideo/Conceptual/iTuneSearchAPI/Searching.html#//apple_ref/doc/uid/TP40017632-CH5-SW1 for API details
  const query = 'test'; // temporarily hardcoded for development

  useEffect(() => {
    const querySearch = async () => {
      const searchUrl = `https://itunes.apple.com/search?term=${query}&country=US&media=podcast&limit=50`;
      const response = await axios.get<iTunesResponse>(searchUrl);
      await setResults(response.data.results);
    };
    querySearch();
  }, []);

  const podcastInfo = (podcast: podcastMetadata) => (
    <div>
      <img src={podcast.artworkUrl100} alt="" />
      <p>{podcast.collectionName}</p>
    </div>
  );

  return (
    <div>
      { results ? results.map((r) => podcastInfo(r)) : null }
    </div>
  );
};

export default SearchResults;
