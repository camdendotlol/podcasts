import React from 'react';
import { useAppSelector } from '../../hooks';

import { ReactComponent as PlayButton } from 'bootstrap-icons/icons/play-fill.svg';
import { ReactComponent as PauseButton } from 'bootstrap-icons/icons/pause-fill.svg';
import { ReactComponent as SkipBackward } from 'bootstrap-icons/icons/skip-start-fill.svg';
import { ReactComponent as SkipForward } from 'bootstrap-icons/icons/skip-end-fill.svg';
import { useState } from 'react';

const MediaBar: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const streamURL = useAppSelector((state) => state.mediaPlayerStore.streamURL);

  let streamAudio: HTMLAudioElement | null = null;
  if (streamURL) {
    streamAudio = new Audio(`${streamURL}`);
  }

  const handleAudio = () => {
    if (streamAudio) {
      void streamAudio.play();
    } else {
      return null;
    }
  };

  const handlePlayButton = () => {
    if (isPlaying) {
      return (
        <PauseButton
          className="media-control play-button"
          onClick={() => setIsPlaying(false)}
        />
      );
    } else {
      return (
        <PlayButton
          className="media-control play-button"
          onClick={() => setIsPlaying(true)}
        />
      );
    }
  };

  return (
    <div className="media-bar">
      <SkipBackward className="media-control skip-backward-button" />
      {handlePlayButton()}
      <audio>
        <source src={streamURL ? streamURL : undefined} />
      </audio>
      { streamAudio ? handleAudio() : null }
      <SkipForward className="media-control skip-forward-button" />
    </div>
  );
};

export default MediaBar;
