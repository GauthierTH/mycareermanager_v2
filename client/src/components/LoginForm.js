import React, { useState } from 'react'
import { useHistory, useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

import { login } from '../services/backend/authentication'
import store from '../redux/store';
  
const LoginForm = () => {
  let history = useHistory();
  let location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };

  const [emailInput, setEmailInput] = useState('')
  const [passwordInput, setPasswordInput] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()

    const data = {
      email: emailInput,
      password: passwordInput
    }

    await store.dispatch(login(data))
    history.replace(from)
  }

  return(
    <form className='col-3' onSubmit={handleSubmit}>
      <div className="form-group">
        <input type="email" className="form-control" placeholder="Email" value={emailInput} onChange={(e) => setEmailInput(e.target.value)} />
      </div>
      <div className="form-group">
        <input type="password" className="form-control" placeholder="Mot de passe" value={passwordInput} onChange={(e) => setPasswordInput(e.target.value)} />
      </div>
      <button type="submit" className="btn btn-primary">Connexion</button>
      <div className='mt-3'>
        <Link to="/register">S'inscrire</Link>
      </div>
    </form>
  )
}
  
export default LoginForm
