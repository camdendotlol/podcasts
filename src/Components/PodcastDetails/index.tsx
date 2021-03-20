import React from 'react';
import Parser from 'rss-parser';

import { podcastMetadata } from '../../types';

interface Props {
  podcastInfo: podcastMetadata
}

const PodcastDetails: React.FC<Props> = ({ podcastInfo }: Props) => {
  const parser = new Parser();

  const getRssObject = async () => {
    const res = await parser.parseURL(podcastInfo.feedUrl);
    return res;
  };

  console.log(getRssObject);

  return (
    <div>
      <p>{podcastInfo.artistName}</p>
    </div>
  );
};

export default PodcastDetails;
