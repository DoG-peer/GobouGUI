import ItemList from '../components/itemlist';
import Actions from '../actions';
import {connect} from 'react-redux';
import {ipcRenderer} from 'electron';

const mapStateToProps = state => {
  return {
    items: state.items || []
  };
};

const mapDispatchToProps = dispatch => {
  return {
    subscribeIpc: () => {
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemList);
