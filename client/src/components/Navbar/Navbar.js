import React from 'react'
import { Link, useHistory } from "react-router-dom";
import { useDispatch } from 'react-redux';

import { logoutHelper } from '../../tools/helper/logout'
import './Navbar.scss'
import rocketIcon from '../../images/rocket-icon.svg'
import dropdownIcon from '../../images/dropdown-icon.svg'

const Navbar = () => {
  const dispatch = useDispatch();
  let history = useHistory();

  return(
    <nav className='navbar'>
      <Link to="/">
        <img src={rocketIcon} class="rocket-icon" />
        My Career Manager
      </Link>

      <div class="dropdown">
        <div className='dropdown-button'>
          Connected as Gauthier
          <img class="dropdown-arrow" src={dropdownIcon} />
        </div>
        <div class="dropdown-content">
          <ul>
            <li><Link to="/">My account</Link></li>
            <li onClick={() => logoutHelper(dispatch, history)}>Log Out</li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
  
export default Navbar
