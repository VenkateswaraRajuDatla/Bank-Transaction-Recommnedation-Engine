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
      <div className="jumbotron col-3">
        <h1 className="display-4">Ledger Access</h1>
        <p className="lead">Third Party Auditing is available!!</p>
        <p>The blockchain consists of transactional data for auditing purpose !!</p>
        <Link className="btn btn-primary btn-lg" to="/accessblockchain" role="button">Click Here</Link>
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
