import {ipcRenderer} from 'electron';
import Actions from '../actions';
import RichState from './rich-state';

export default class IpcAction {
  static subscribe(store) {
    new IpcAction(store).subscribe();
  }
  constructor(store) {
    this.dispatch = store.dispatch;
    this.state = new RichState(store);
    store.subscribe(() => {
      this.state = new RichState(store);
    });
  }

  subscribe() {
    let state = this.state;

    ipcRenderer.on('message', (e, args) => {
      this.dispatch(
        Actions.addItem(args.toString())
      );
      setInterval(() => {
        ipcRenderer.send('update');
      }, 1000 * 2);
    });

    ipcRenderer.on('update', (e, args) => {
      for (let mes of args) {
        this.dispatch(
          Actions.addItem(mes.toString())
        );
      }
    });
  }

  static ready() {
    ipcRenderer.send('ready');
  }
}
