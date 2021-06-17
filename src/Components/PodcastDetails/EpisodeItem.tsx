import React from 'react';
import { useAppDispatch } from '../../hooks';
import { RSSData } from '../../types';
import { setMediaPlayerURL } from '../../reducers/mediaPlayerReducer';

interface Props {
  episodeDetails: RSSData
}

const EpisodeItem: React.FC<Props> = ({ episodeDetails }) => {
  const dispatch = useAppDispatch();

  return (
  <li className='episode-list-item' onClick={() => dispatch(setMediaPlayerURL(episodeDetails.enclosure?.url))}>
      {episodeDetails.title}
    </li>
  );
};

export default EpisodeItem;