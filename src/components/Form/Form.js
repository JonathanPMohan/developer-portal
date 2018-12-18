
import React from 'react';
import './Form.scss';

class InputForm extends React.Component {
  render() {
    return (
      <div className="userInput row">
        <div className="form col-8 mt-2">
          <div className="col-auto">
            <div className="input-group mb-2">
              <div className="input-group-prepend">
              </div>
              <input type="text" className="userName form-control" id="name-input" placeholder="What's In A Name?"></input>
            </div>
          </div>
          <div className="col-auto">
            <div className="input-group mb-2">
              <div className="input-group-prepend">
              </div>
              <input type="text" className="itemLink form-control" id="link-input" placeholder="Drop That Link!"></input>
            </div>
          </div>
        </div>
        <div className="col-3 radio-buttons">
          <div className="form-check">
            <input className="form-check-input" type="radio" name="tutorialRadio" id="tutorial-radio" value="option1"></input>
            <label className="form-check-label">Tutorial</label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" name="blogRadio" id="blog-radio" value="option1"></input>
            <label className="form-check-label">Blog</label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" name="resourceRadio" id="resource-radio" value="option1"></input>
            <label className="form-check-label">Resource</label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" name="podcastRadio" id="podcast-radio" value="option1"></input>
            <label className="form-check-label">Podcast</label>
          </div>
        </div>
        <div id="submitButton">
          <button type="submit" className="btn btn-alert add-btn">
            <i className="fas fa-plus-circle icon-large"></i>
          </button>
        </div>
      </div>
    );
  }
}

export default InputForm;
