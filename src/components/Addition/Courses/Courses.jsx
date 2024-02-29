import React, { useEffect } from 'react';
import { MovieCintainer } from './Courses.styled';
import YouTube from 'react-youtube';

export class Courses extends React.Component {
  render() {
    const opts = {
      height: '100%',
      width: '100%',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
      },
    };
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });

    return (
      <MovieCintainer style={{ display: 'flex', gap: '20px' }}>
        <YouTube videoId="U6Gdf2_DHUQ" opts={opts} onReady={this._onReady} />
        <YouTube videoId="NlS_dTDsHHQ" opts={opts} onReady={this._onReady} />
      </MovieCintainer>
    );
  }

  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }
}
