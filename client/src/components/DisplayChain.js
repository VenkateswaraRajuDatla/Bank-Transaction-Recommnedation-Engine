import React, { Component } from 'react';
import { connect } from 'react-redux';
import Slider from 'react-slick';
import lodash from 'lodash';
import moment from 'moment';
import { getChain } from '../actions/pranithActions';
//import './pk/blockchain.scss';
import { Link } from 'react-router-dom';
import DisplayChainBody from "./pk/displayChainBody";
import Toolbar from './responsiveBars/Toolbar/Toolbar';
import Footer from './responsiveBars/footer/footer';

const axios = require('axios');

class DisplayChain extends Component {



    state = {
      movieSearch: '',
      Date: moment(new Date()).format()
    }




    render() {





        return (

            <div className="container-fluid">
                <div className="row">
                    <Toolbar/>
                </div>
                <div className="row">
                    <DisplayChainBody/>
                </div>
                <div className="row">
                    {/*<Footer/>*/}
                </div>
            </div>

        );

    }
}

function mapStateToProps(state) {
  return {        login:state.login,
      blockchainTransactions: state.blockchainTransactions,
      accessRules:state.accessRules
  };
}

export default connect(mapStateToProps, { getChain })(DisplayChain);

