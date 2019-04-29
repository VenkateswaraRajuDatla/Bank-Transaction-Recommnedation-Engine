import React, { Component  } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Line } from "react-chartjs-2";
import { MDBContainer } from "mdbreact";
import _ from 'underscore';
// import './AgePlot.scss';

export class MonthPlot extends Component {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/Lrffmzfc/';
  constructor(props) {
    super(props);
    this.state = { };
  }


  componentDidMount() { }

  render() {
    const {ageData} = this.props;
    let dataLine = {}
    let label = []
    let series = []
    let lineChartOptions = {
      low: 0,
      showArea: true
    }
    if (ageData != null && ageData.month != null){
       Object.keys(ageData.month).map(k => {label.push(k); series.push(parseInt(ageData.month[k]));});
       dataLine = {
         labels: label,
         datasets: [
           {
             label: "Month vs Amount Influx",
             fill: true,
             lineTension: 0.1,
             backgroundColor: "rgba(44,177,188,0.4)",
             borderColor: "rgba(88,145,200,2)",
             borderCapStyle: "butt",
             borderDash: [],
             borderDashOffset: 0.0,
             borderJoinStyle: "miter",
             pointBorderColor: "rgba(75,172,182,3)",
             pointBackgroundColor: "#fff",
             pointBorderWidth: 1,
             pointHoverRadius: 5,
             pointHoverBackgroundColor: "rgba(75,192,192,1)",
             pointHoverBorderColor: "rgba(220,220,220,1)",
             pointHoverBorderWidth: 2,
             pointRadius: 1,
             pointHitRadius: 10,
             data: series
           }
         ]
       }
    }


    // console.log('dnkf',dataLine.datasets[0].data);

    return (
      <div className = 'month-plot col-8'>
      {dataLine && dataLine.labels && <MDBContainer>
        <h3 className="mt-5">Relation between Amount deposited and the Month </h3>
        <Line data={dataLine} options={{ responsive: true }} />
      </MDBContainer>}
      </div>
    );
  }
}

function stateToProps(state) {
  return {
    ageData:state.bankRequest.meta_data
  };
}

function dispatchToProps(dispatch) {
  return {
    ...bindActionCreators({

    }, dispatch)
  };
}


MonthPlot = connect(stateToProps, dispatchToProps)(MonthPlot);

export default (MonthPlot);
