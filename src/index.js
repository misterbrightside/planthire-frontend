import React from 'react';
import ReactDOM from 'react-dom';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';
import App from './containers/App';
import './index.css';
import getStore from './reducers';

const store = getStore();
const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
  <App 
    history={history}
    store={store}
  />,
  document.getElementById('root')
);
