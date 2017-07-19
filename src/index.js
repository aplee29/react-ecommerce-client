// node module imports
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

// custom module imports
import './index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import store from './redux/store';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
