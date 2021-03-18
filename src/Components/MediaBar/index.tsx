import React from 'react';
import { ReactComponent as PlayButton } from 'bootstrap-icons/icons/play-circle.svg';
import { ReactComponent as SkipBackward } from 'bootstrap-icons/icons/skip-start-fill.svg';
import { ReactComponent as SkipForward } from 'bootstrap-icons/icons/skip-end-fill.svg';

const MediaBar: React.FC = () => (
  <div className="media-bar">
    {/* <img className="play-button" src={playButtonSVG} alt="Play" /> */}
    <SkipBackward className="media-control skip-backward-button" />
    <PlayButton className="media-control play-button" />
    <SkipForward className="media-control skip-forward-button" />
  </div>
);

export default MediaBar;
