import React from 'react';
import './Tutorial.scss';

class Tutorial extends React.Component {
  render() {
    const { tutorial } = this.props;
    return (
      <div className="tutorials">
        <h5>{tutorial.name}
          <a href={tutorial.url} target="_blank" rel="noopener noreferrer">
            <span className="col-6">{tutorial.url}</span>
          </a></h5>
      </div>
    );
  }
}

export default Tutorial;
