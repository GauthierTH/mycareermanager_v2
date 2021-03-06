import React, { useState, useEffect } from 'react'
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';

import { logoutHelper } from 'helpers/logout'
import rocketIcon from 'assets/images/rocket-icon.svg'
import dropdownIcon from 'assets/images/dropdown-icon.svg'
import { getUsernameRequest } from 'services/backend/user'

const Navbar = () => {
  const dispatch = useDispatch();
  let history = useHistory();
  const [username, setUsername] = useState('')
  const bearerToken = useSelector(state => state.user.bearerToken)

  const getUsername = async () => {
    let username = await getUsernameRequest(bearerToken)
    setUsername(username)
  }

  useEffect(() => {
    getUsername()
  }, [])

  return(
    <nav className='navbar justify-content-between'>
      <Link to="/">
        <img src={rocketIcon} className="rocket-icon" alt='rocket-icon' />
        My Career Manager
      </Link>

      <div className="dropdown">
        <div className='dropdown-button align-items-center'>
          <span className='username'>Connected as {username}</span>
          <img className="dropdown-arrow" src={dropdownIcon} alt='dropdown-arrow' />
        </div>
        <div className="dropdown-content">
          <ul>
            <li><Link to="/my-account">My account</Link></li>
            <li onClick={() => logoutHelper(dispatch, history)}>Log Out</li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
  
export default Navbar
