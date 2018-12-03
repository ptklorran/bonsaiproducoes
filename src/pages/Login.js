import React, { Component } from 'react';
import { AUTH } from '../services/Firebase'

export default class Login extends Component {

  componentDidMount() {
    console.log('criando')
    AUTH.onAuthStateChanged(user => {
      if (user) {
        console.log('logado')
        console.log(user)
      } else {
        console.log('deslogado')
      }
    })
    console.log('criado')
  }

  render() {
    return (
      <div>
      </div>
    );
  }
}
