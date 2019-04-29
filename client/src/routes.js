import React from 'react';
import { Switch, Route, Redirect } from 'react-router';
import { Router, Link } from 'react-router-dom';
import { history } from 'store/index';
import App from 'components/app';
import DisplayChain from 'components/DisplayChain';
import PredictionRequest from 'components/PredictionRequest';
import Layout from 'components/layout';
import PrivateRoute from './PrivateRoute';
import LoginPage from 'components/pk/loginpage';
import Dashboard from 'components/dashboard';
import AccessBlockchains from 'components/accessBlockchains';
import BRequestPage from 'components/BRequestPage';
import Home from 'components/Home'
import SignUp from 'components/Signup'


const routes = (
  <Router history={history}>
    <Layout>

      <Switch>
        <Route
          exact
          path="/"
          render={() => (window.localStorage.getItem('isLoggedIn') === 'true' ? (
            <Redirect to="/home" />
          ) : (
            <Redirect to="/login" />
          ))}
        />
        <Route
          exact
          path="/home"
          render={() => (window.localStorage.getItem('isLoggedIn') === 'true' ? (
            <Home />
          ) : (
            <Redirect to="/login" />
          ))}
        />
        <Route
          exact
          path="/login"
          render={() => (window.localStorage.getItem('isLoggedIn') === 'true' ? (
            <Redirect to="/home" />
          ) : (
            <LoginPage />
          ))}
        />
        <Route
          exact
          path="/displaychain"
          render={() => (window.localStorage.getItem('isLoggedIn') === 'true' ? (
            <DisplayChain/>
          ) : (
                  <Redirect to="/login" />
          ))}
        />

        <Route
          exact
          path="/dashboard"
          render={() => (window.localStorage.getItem('isLoggedIn') === 'true' ? (
            <Dashboard />
          ) : (
            <Redirect to="/login" />
          ))}
        />
        <Route
            exact
            path="/signup"
            render={() => (window.localStorage.getItem('isLoggedIn') !== 'true' ? (
                <SignUp />
            ) : (
                <Redirect to="/home" />
            ))}
        />
        <Route
            exact
            path="/accessblockchain"
            render={() => (window.localStorage.getItem('isLoggedIn') === 'true' ? (
                <AccessBlockchains />
            ) : (
                <Redirect to="/login" />
            ))}
        />

        <Route
          exact
          path="/loan_prediction"
          render={() => (window.localStorage.getItem('isLoggedIn') === 'true'&& window.localStorage.getItem('userType') === 'user'? (
            <PredictionRequest />
          ) : (
            <Redirect to="/login" />
          ))}
        />

        <Route
          exact
          path="/bank_request"
          render={() => (window.localStorage.getItem('isLoggedIn') === 'true'&& window.localStorage.getItem('userType') === 'admin' ? (
            <BRequestPage />
          ) : (
            <Redirect to="/login" />
          ))}
        />
      </Switch>

    </Layout>
  </Router>
);

export default routes;
