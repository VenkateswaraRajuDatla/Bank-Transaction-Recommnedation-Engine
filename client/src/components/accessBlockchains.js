import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import AccessBlockchainBody from './pk/accessBlockchainBody';

import './global.scss';
import Toolbar from './responsiveBars/Toolbar/Toolbar';
import Footer from './responsiveBars/footer/footer';


export class AccessBlockchains extends Component {
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
                    <AccessBlockchainBody />
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


AccessBlockchains = connect(stateToProps, dispatchToProps)(AccessBlockchains);

export default (AccessBlockchains);
