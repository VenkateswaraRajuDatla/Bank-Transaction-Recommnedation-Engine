import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Router, Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import './global.scss';


export class LoanJumbotron extends Component {
  constructor(props) {
    super(props);
    this.state = { };
  }


  componentDidMount() { }

  render() {
    return (
      <div className="jumbotron col-3 ">
        <h1 className="display-4">Loan Prediction</h1>
        <p className="lead">Predict your loan approval!!</p>
        <p>Enter your loan details. We will predict your approval.</p>
        <Link className="btn btn-primary btn-lg " to="/loan_prediction" role="button">Click Here</Link>
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


LoanJumbotron = connect(stateToProps, dispatchToProps)(LoanJumbotron);

export default (LoanJumbotron);
