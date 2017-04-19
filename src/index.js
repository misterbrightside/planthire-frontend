import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';
import { persistStore } from 'redux-persist';
import App from './containers/App';
import './index.css';
import getStore from './reducers';

const store = getStore();
persistStore(store);
const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
  <Provider store={store}>
    <App history={history} />
  </Provider>,
  document.getElementById('root')
);
