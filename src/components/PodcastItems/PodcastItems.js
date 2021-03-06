import React from 'react';
import PropTypes from 'prop-types';
import podcastShapes from '../../helpers/propz/podcastShapes';
import './PodcastItems.scss';
import authRequests from '../../helpers/data/authRequests';

class PodcastItems extends React.Component {
  static propTypes = {
    podcast: podcastShapes,
    deleteSingleListingPodcast: PropTypes.func,
  }

  editEvent = (e) => {
    e.preventDefault();
    const { passListingToEditPodcast, podcast } = this.props;
    passListingToEditPodcast(podcast.id);
  }

  deleteEvent = (e) => {
    e.preventDefault();
    const { deleteSinglePodcast, podcast } = this.props;
    deleteSinglePodcast(podcast.id);
  }

  render() {
    const { podcast } = this.props;
    const uid = authRequests.getCurrentUid();

    const makeButtons = () => {
      if (podcast.uid === uid) {
        return (
          <div>
            <span className="col">
              <button className="btn trash btn-secondary" onClick={this.deleteEvent}>
                <i className="fas fa-trash-alt"></i>
              </button>
            </span>
            <span className="col">
              <input type="radio" id="radio2" name="radioDisabled" className="custom-Radio-Podcasts" />
              <label className="podcastsLabel" htmlFor="radioPodcasts">DONE</label>
            </span>
          </div>
        );
      }
      return <span className="col-3"></span>;
    };
    return (
      <li className="podcast-item text-center">
        <span className="col">{podcast.name}</span>
        <span className="col"><a href={podcast.url} target="_blank" rel="noopener noreferrer">{podcast.url}</a></span>
        {makeButtons()}
      </li>
    );
  }
}

export default PodcastItems;
