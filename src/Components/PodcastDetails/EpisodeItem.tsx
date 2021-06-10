import React from 'react';
import { RSSData } from '../../types';

interface Props {
  episodeDetails: RSSData
}

const EpisodeItem: React.FC<Props> = ({ episodeDetails }) => (
    <li className='episode-list-item'>
      {episodeDetails.title}
    </li>
);

export default EpisodeItem;