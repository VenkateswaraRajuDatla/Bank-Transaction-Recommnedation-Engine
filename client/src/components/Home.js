import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Router, Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import './global.scss';
import LoanJumbotron from './LoanJumbotron';
import BankJumbotron from './BankJumbotron';
import BCJumbotron from './BCJumbotron';
import Toolbar from './responsiveBars/Toolbar/Toolbar';
import Footer from './responsiveBars/footer/footer';


export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { };
  }


  componentDidMount() { }

  render() {
    const user = window.localStorage.getItem('userType');
    let value = false;

    if (user == 'admin') {
      value = true;
  } else {
    value = false;
  }


    return (
      <div className="MainApp container-fluid">
      <div className="row">
          <Toolbar/>
      </div>

      <div className = "add-panel row d-flex justify-content-around">
      {!value && <LoanJumbotron/>}
      {value && <BankJumbotron/>}
      <BCJumbotron/>

      </div>
      <Footer/>

      </div>


    );
  }
}

function stateToProps(state) {
  return {


  };
}

function dispatchToProps(dispatch) {
  return {
    ...bindActionCreators({

    }, dispatch)
  };
}


Home = connect(stateToProps, dispatchToProps)(Home);

export default (Home);
