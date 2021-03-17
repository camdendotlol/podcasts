import React, { useState } from 'react';
import SearchForm from './SearchForm';
import SearchResults from './SearchResults';

const PodcastDirectory: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');

  return (
    <div>
      <SearchForm setSearchQuery={setSearchQuery} />
      <SearchResults searchQuery={searchQuery} />
    </div>
  );
};

export default PodcastDirectory;
