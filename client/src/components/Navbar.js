import React from 'react'
import { Link, useHistory } from "react-router-dom";
import { useDispatch } from 'react-redux';

import { logoutHelper } from '../tools/helper/logout'

const Navbar = () => {
  const dispatch = useDispatch();
  let history = useHistory();

  return(
    <div classNameName='border-bottom row justify-content-between m-0'>
      <div>
        <Link to="/">Home</Link>
      </div>

      <div>
        <button onClick={() => logoutHelper(dispatch, history)}>Logout</button>
      </div>
    </div>
  )
}
  
export default Navbar
