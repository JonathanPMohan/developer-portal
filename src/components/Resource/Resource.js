import React from 'react';

import './Resource.scss';

class Resource extends React.Component {
  render() {
    const { resource } = this.props;
    return (
      <h2>{resource.name}</h2>
    );
  }
}

export default Resource;
