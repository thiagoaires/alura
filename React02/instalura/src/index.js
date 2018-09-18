import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Login from './componentes/Login'

import './css/reset.css';
import './css/login.css';
import './css/timeline.css';


import {Route, BrowserRouter} from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <BrowserRouter>
    <Fragment>
      <Route exact path="/" component={Login} />
      <Route path="/timeline" component={App} />
    </Fragment>
  </BrowserRouter>, document.getElementById('root')
);
registerServiceWorker();
