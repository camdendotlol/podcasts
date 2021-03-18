import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import SearchForm from './SearchForm';
import SearchResults from './SearchResults';

const PodcastDirectory: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');

  return (
    <Container className="directory">
      <SearchForm setSearchQuery={setSearchQuery} />
      <SearchResults searchQuery={searchQuery} />
    </Container>
  );
};

export default PodcastDirectory;
