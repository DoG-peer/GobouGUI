import React           from 'react';
import { render }      from 'react-dom';
import { Provider }    from 'react-redux';
import AppContainer    from './containers/app-container';
import IpcAction       from './utils/ipc-action';
import TimeRefresher   from './utils/time-refresher';
// import rootReducer     from './reducers';
import configureStore  from './store/configure-store';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();
let store = configureStore();
IpcAction.subscribe(store);
TimeRefresher.subscribe(store);

render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById('root')
);

IpcAction.ready();
