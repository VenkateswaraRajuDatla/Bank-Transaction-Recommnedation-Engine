import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import FileUpload from './FileUpload';
import CountUp from 'react-countup';
import Counter from './Counter';
import Toolbar from './responsiveBars/Toolbar/Toolbar';
import Footer from './responsiveBars/footer/footer';
import AgePlot from './AgePlot';
import JobPlot from './JobPlot';
import MonthPlot from './MonthPlot';
import _ from 'underscore';



export class BRequestPage extends Component {
  constructor(props) {
    super(props);
    this.state = { };
  }


  componentDidMount() { }


  render() {
    const {data} = this.props;
    console.log(data);
    return (
      <div className="bankRequest">
      <div className="row">
          <Toolbar/>
      </div>
      <Counter/>
      <FileUpload/>
      <div className = 'row'> <AgePlot/> <JobPlot/></div>
      <div className = 'row'> <MonthPlot/></div>
      <div className = 'row'> <Footer/></div>      
      </div>
    );
  }
}

function stateToProps(state) {
  return {
    data:state.bankRequest.meta_data

  };
}

function dispatchToProps(dispatch) {
  return {
    ...bindActionCreators({

    }, dispatch)
  };
}


BRequestPage = connect(stateToProps, dispatchToProps)(BRequestPage);

export default (BRequestPage);
