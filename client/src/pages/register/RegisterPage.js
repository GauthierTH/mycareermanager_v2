import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom';

import { register } from 'services/backend/authentication'
import store from 'redux/store';
import rocketIcon from 'assets/images/rocket-icon.svg'
  
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
    <>
      <div></div>
      <div></div>
      <div>
        <div className='card auth-card'>
          <div className='align-items-center'>
            <img src={rocketIcon} className='rocket-icon' alt='rocket-icon' />
            My Career Manager
          </div>

          <form onSubmit={handleSubmit} className='auth-form'>
            <input type='email' className='mb-1 auth-input' placeholder='Email' value={emailInput} onChange={(e) => setEmailInput(e.target.value)} />
            <input type='password' className='mb-1 auth-input' placeholder='Password' value={passwordInput} onChange={(e) => setPasswordInput(e.target.value)} />
            <input type='text' className='mb-2 auth-input' placeholder='Username' value={usernameInput} onChange={(e) => setUsernameInput(e.target.value)} />
            <button type='submit' className='btn-primary m-0'>Register</button>
          </form>

          <hr className='w-100' />
          <div className='row align-items-center'>
            <span className='mr-1'>Have an account?</span>
            <Link to='/login'>Log in</Link>
          </div>
        </div>
      </div>
    </>
  )
}
  
export default RegisterPage
