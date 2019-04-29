import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import CountUp from 'react-countup';
import './Counter.scss'


export class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { };
  }


  componentDidMount() { }

  render() {
    const {bank_pred} = this.props;
    let data = bank_pred.data;
    return (

      <div className = 'amountCounter d-flex justify-content-center'>
      <div className = 'description align-self-center'><p> Predicted Influx is </p></div>
      <div className = 'counter'>  <CountUp start={0} end = {data} duration = {3} /><span>$</span></div>
      </div>
    );
  }
}

function stateToProps(state) {
  return {
    bank_pred: state.bankRequest,

  };
}

function dispatchToProps(dispatch) {
  return {
    ...bindActionCreators({

    }, dispatch)
  };
}


Counter = connect(stateToProps, dispatchToProps)(Counter);

export default (Counter);
