import React from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import { useSelector } from 'react-redux';

import HomePage from './pages/HomePage'
import Navbar from './components/Navbar/Navbar'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import AccountPage from './pages/AccountPage'
import JobApplicationShowPage from './pages/JobApplicationShowPage'
  
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
        <UnauthRoute exact path="/login" component={LoginPage} />
        <UnauthRoute exact path="/register" component={RegisterPage} />
        <Route exact path="/">
          <HomePage />
        </Route>
        <AuthRoute exact path='/my-account' component={AccountPage} />
        <AuthRoute exact path='/job-application/:id' component={JobApplicationShowPage} />
      </Switch>
    </Router>
  )
}
  
export default App
