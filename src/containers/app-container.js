import App from '../components/app';
import Actions from '../actions';
import {connect} from 'react-redux';
import {ipcRenderer} from 'electron';

const mapStateToProps = state => {
  return {
  };
};

const mapDispatchToProps = dispatch => {
  return {
    subscribeIpc: () => {
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
