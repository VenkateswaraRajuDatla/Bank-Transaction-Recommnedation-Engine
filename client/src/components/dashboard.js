import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Toolbar from './responsiveBars/Toolbar/Toolbar';
import Footer from './responsiveBars/footer/footer';
import Form from './responsiveBars/form/form';
import Signup from './responsiveBars/signup/signup';

import DashboardBody from './pk/dashboardBody';
import './global.scss';


export class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = { };
  }


  componentDidMount() { }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
      <Toolbar/>
        </div>

        <div className="row">
        <DashboardBody />
        </div>
        <div className="row">
        <Footer/>
        </div>
      </div>


    );
  }
}

function stateToProps(state) {
  return {
    login:state.login,
    blockchainTransactions: state.blockchainTransactions,
    accessRules:state.accessRules

  };
}

function dispatchToProps(dispatch) {
  return {
    ...bindActionCreators({

    }, dispatch)
  };
}


Dashboard = connect(stateToProps, dispatchToProps)(Dashboard);

export default (Dashboard);
