import React from 'react';
import { RSSData } from '../../types'

interface Props {
  episodeDetails: RSSData
}

const EpisodeItem: React.FC<Props> = ({ episodeDetails }) => (
    <li>
      {episodeDetails.title}
    </li>
);

export default EpisodeItem;