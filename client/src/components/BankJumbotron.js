import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Router, Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import './global.scss';


export class BankJumbotron extends Component {
  constructor(props) {
    super(props);
    this.state = { };
  }


  componentDidMount() { }

  render() {
    return (
      <div className="jumbotron col-3">
        <h1 className="display-4">Bank Influx Prediction</h1>
        <p className="lead">Predict your Bank Influx!!</p>
        <p>Predict your the amount that will be deposited into your bank </p>
        <Link className="btn btn-primary btn-lg" to="/bank_request" role="button">Click Here</Link>
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


BankJumbotron = connect(stateToProps, dispatchToProps)(BankJumbotron);

export default (BankJumbotron);
