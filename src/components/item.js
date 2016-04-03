import React, { Component, PropTypes } from 'react';

export default class Item extends Component {
  static propTypes = {
    text: PropTypes.string.isRequired,
  }

  render() {
    return (
      <li>
        {this.props.text}
      </li>
    );
  }
}
