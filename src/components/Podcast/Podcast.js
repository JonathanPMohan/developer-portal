import React from 'react';
import './Podcast.scss';

class Podcast extends React.Component {
  render() {
    const { podcast } = this.props;
    return (
      <div className="podcasts">
        <h5>{podcast.name}
          <a href={podcast.url} target="_blank" rel="noopener noreferrer">
            <span className="col-6">{podcast.url}</span>
          </a></h5>
      </div>
    );
  }
}

export default Podcast;
