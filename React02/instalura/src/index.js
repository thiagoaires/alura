import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Login from './componentes/Login'

import './css/reset.css';
import './css/login.css';
import './css/timeline.css';


import {Route, BrowserRouter} from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker';

function verificaAutenticacao(next, replace){
  console.log('verifica')
  if(localStorage.getItem('auth-token') !== null){
    return true
  }
}


ReactDOM.render(
  <BrowserRouter>
    <Fragment>
      <Route exact path="/" component={Login} />
      <Route path="/timeline" render={() => verificaAutenticacao() ? <App/> : <Login />}/>
    </Fragment>
  </BrowserRouter>, document.getElementById('root')
);
registerServiceWorker();
