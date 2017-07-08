import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as css from './css/main.less';

import { createStore, applyMiddleware } from 'redux';
import reducers from 'store/store';
import { activePageChange } from 'store/app/activePage';

import About from 'views/About';
import Home from 'views/Home';

import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';

const loggerMiddleware = createLogger();

const store = createStore(
  reducers,
  applyMiddleware(thunk, loggerMiddleware),
);

store.dispatch(activePageChange('hello'));

ReactDOM.render(
  <Provider store={store}>
    <Home/>
  </Provider>,
  document.getElementById('root')
);
