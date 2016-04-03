import React, { PropTypes } from 'react';

export default class List extends React.Component {
  static propTypes = {
    lists:         PropTypes.array.isRequired,
    onListChanged: PropTypes.func.isRequired
  }

  render() {
    return(
      <div className={``}></div>
    )
  }
}
