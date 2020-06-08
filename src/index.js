import React from 'react';
import ReactDOM from 'react-dom';
import Wrap from './wrap.js';
import './css/index.css';

import * as serviceWorker from './serviceWorker';


ReactDOM.render(
  <React.StrictMode>
    <Wrap />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
