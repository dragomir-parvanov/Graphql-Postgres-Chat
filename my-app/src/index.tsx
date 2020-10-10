import React from 'react';
import ReactDOM from 'react-dom';
import './web-client/index.css';
import App from './web-client/App';
import * as serviceWorker from './web-client/serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
