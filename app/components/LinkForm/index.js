/**
 *
 * LinkForm
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';
import TextInput from '../TextInput';

/* eslint-disable react/prefer-stateless-function */
class LinkForm extends React.Component {
  state = {
    urlError: '',
    descriptionError: '',
  };

  onAdd = () => {
    const url = this.url.value();
    const description = this.description.value();
    let urlError = null;
    let descriptionError = null;
    const urlRegExp = /[-a-zA-Z0-9@:%._\\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\\+.~#?&//=]*)/;
    if (!url.match(urlRegExp)) {
      urlError = 'Please provide a valid URL';
    }
    if (!description) {
      descriptionError = 'Please provide a valid description';
    }
    this.setState({
      urlError,
      descriptionError,
    });
    if (!urlError && !descriptionError) {
      this.props.addLink({
        url,
        description,
        topicName: this.props.topicName,
      });
    }
  };

  render() {
    return (
      <div className="overlay">
        <div className="linkForm">
          <div className="heading">Add a Link</div>
          <TextInput
            placeholder="URL"
            className="input"
            errorText={this.state.urlError}
            ref={f => {
              this.url = f;
            }}
          />
          <TextInput
            placeholder="Description"
            className="input"
            errorText={this.state.descriptionError}
            ref={f => {
              this.description = f;
            }}
          />
          <div className="actionContainer">
            <div
              className="button"
              role="none"
              onClick={this.props.addLinkCancelled}
            >
              cancel
            </div>
            <div className="button" role="none" onClick={this.onAdd}>
              Add
            </div>
          </div>
        </div>
      </div>
    );
  }
}

LinkForm.propTypes = {
  addLink: PropTypes.func.isRequired,
  addLinkCancelled: PropTypes.func.isRequired,
  topicName: PropTypes.string.isRequired,
};

export default LinkForm;
