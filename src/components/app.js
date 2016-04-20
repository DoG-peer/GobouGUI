import React, { Component, PropTypes } from 'react';
import { ipcRenderer } from 'electron';
import ItemListContainer from '../containers/item-list-container'
export default class App extends Component {
  static propTypes = {
    subscribeIpc: PropTypes.func.isRequired,
  }

  componentDidMount() {
    this.props.subscribeIpc();
  }

  render() {
    return(
      <div>
        <p>gobou</p>
        <ItemListContainer></ItemListContainer>
      </div>
    );
  }
};
