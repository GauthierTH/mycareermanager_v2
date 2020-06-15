import React, { useState } from 'react'
import { Link, useHistory } from "react-router-dom";

import { register } from '../services/backend/authentication'
import store from '../redux/store';
  
const RegisterPage = () => {
  let history = useHistory();

  const [usernameInput, setUsernameInput] = useState('')
  const [emailInput, setEmailInput] = useState('')
  const [passwordInput, setPasswordInput] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()

    const data = {
      email: emailInput,
      username: usernameInput,
      password: passwordInput
    }

    await store.dispatch(register(data))
    history.push('/')
  }

  return(
    <div className='row justify-content-center'>
      <form className='col-3' onSubmit={handleSubmit}>
        <div className="form-group">
          <input type="email" className="form-control" placeholder="Email" value={emailInput} onChange={(e) => setEmailInput(e.target.value)} />
        </div>
        <div className="form-group">
          <input type="password" className="form-control" placeholder="Mot de passe" value={passwordInput} onChange={(e) => setPasswordInput(e.target.value)} />
        </div>
        <div className="form-group">
          <input type="text" className="form-control" placeholder="Nom d'utilisateur" value={usernameInput} onChange={(e) => setUsernameInput(e.target.value)} />
        </div>
        <button type="submit" className="btn btn-primary">Inscription</button>
        <div className='mt-3'>
          <Link to="/login">Se connecter</Link>
        </div>
      </form>
    </div>
  )
}
  
export default RegisterPage
