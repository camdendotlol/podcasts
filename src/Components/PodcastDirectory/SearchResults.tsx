import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
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
      const querySearch = async (): Promise<void> => {
        const searchUrl = `https://itunes.apple.com/search?term=${searchQuery}&country=US&media=podcast&limit=50`;
        const response = await axios.get<iTunesResponse>(searchUrl);
        return setResults(response.data.results);
      };
      // The @typescript-eslint/no-floating-promises rule demands this wacky construction.
      // Not sure how we are supposed to "handle" the promise, though it might be good to
      // give an error if the user is offline or iTunes is down
      querySearch().then(() => null).catch(() => null);
    }
  }, [searchQuery]);

  const shortenTitle = (title: string): string => {
    if (title.length < 20) {
      return title;
    }
    return `${title.slice(0, 20)}...`;
  };

  const podcastInfo = (podcast: podcastMetadata) => (
    <div className="podcast-thumbnail" key={podcast.collectionId}>
      <img src={podcast.artworkUrl100} alt="" />
      <p>{shortenTitle(podcast.collectionName)}</p>
    </div>
  );

  return (
    <div>
      {/* results will be undefined on first render, so avoid returning anything until
      querySearch has done its thing */}
      <Container className="podcast-thumbnail-grid">
        { results ? results.map((r) => podcastInfo(r)) : null }
      </Container>
    </div>
  );
};

export default SearchResults;
