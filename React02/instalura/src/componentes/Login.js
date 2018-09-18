import React, { Component } from 'react';
import {withRouter} from 'react-router-dom'

class Login extends Component {

  constructor(){
    super()
    this.state = {
      msg: ''
    }
    this.envia = this.envia.bind(this)
  }

  envia(e){
    e.preventDefault();

    const requestInfo = {
      method: 'POST',
      body: JSON.stringify({login: this.login.value, senha: this.senha.value}),
      headers: new Headers({
        'Content-type': 'application/json'
      })
    }

    fetch('https://instalura-api.herokuapp.com/api/public/login', requestInfo)
      .then(res => {
        if(res.ok){
          return res.text()
        } else {
          throw new Error('Nao foi possivel efetuar o login')
        }
      })
      .then(token => {
        console.log(token)
        localStorage.setItem('auth-token', token)
        this.props.history.push('/timeline')
      })
      .catch(error => this.setState({msg: error.message}))

  }

  render(){
    return (
      <div className="login-box">
        {/* <h1 className="header-logo">Instalura</h1> */}
        <span>{this.state.msg}</span>
        <form onSubmit={this.envia}>
          <input type="text" ref={input => this.login = input} />
          <input type="password" ref={input => this.senha = input} />
          <input type="submit" value="login"/>
        </form>
      </div>
    );
  }
}

export default withRouter(Login)