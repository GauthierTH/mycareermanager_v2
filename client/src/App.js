import React from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import { useSelector } from 'react-redux';

import HomePage from './pages/home/HomePage'
import Navbar from './components/navbar/Navbar'
import LoginPage from './pages/login/LoginPage'
import RegisterPage from './pages/register/RegisterPage'
import AccountPage from './pages/account/AccountPage'
import JobApplicationShowPage from './pages/jobApplicationShow/JobApplicationShowPage'
  
const App = () => {
  const isAuthenticated = useSelector(state => state.user.isAuthenticated)

  const UnauthRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => (
      !isAuthenticated ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: '/' }} />
      )
    )} />
  )

  const AuthRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => (
      isAuthenticated ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
      )
    )} />
  )

  return (
    <Router>
      {isAuthenticated && <Navbar />}
      <Switch>
        <UnauthRoute path="/login" component={LoginPage} />
        <UnauthRoute path="/register" component={RegisterPage} />
        <Route exact path="/">
          <HomePage />
        </Route>
        <AuthRoute path='/my-account' component={AccountPage} />
        <AuthRoute path='/job-application/:id' component={JobApplicationShowPage} />
      </Switch>
    </Router>
  )
}
  
export default App
