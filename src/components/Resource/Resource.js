import React from 'react';
import './Resource.scss';

class Resource extends React.Component {
  render() {
    const { resource } = this.props;
    return (
      <div className="resources">
        <h5>{resource.name}
          <a href={resource.url} target="_blank" rel="noopener noreferrer">
            <span className="col-6">{resource.url}</span>
          </a></h5>
      </div>
    );
  }
}

export default Resource;
