import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import * as serviceWorker from './serviceWorker';
//引入路由插件相关
import { HashRouter as Router } from "react-router-dom";

ReactDOM.render(
  <Router>
    <StrictMode>
      <App />
    </StrictMode>
  </Router>,
  document.getElementById('root')
);

serviceWorker.unregister();

reportWebVitals();
