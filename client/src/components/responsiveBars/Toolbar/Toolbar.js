import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './Toolbar.scss';
import { Nav,Navbar,Form,FormControl,Button } from 'react-bootstrap';
import NavigationItems from '../NavigationItems/NavigationItems';
import {bindActionCreators} from "redux";
import {addTransactions, getChain, mineBlock, signOut} from "../../../actions/pranithActions";
import {connect} from "react-redux";
const imgStyle = {
  height: '95%',
  width: '5%'

};
class Toolbar extends Component {

  render() {
    const user = window.localStorage.getItem('userType');
    let value = false;

    if (user == 'admin') {
      value = true;
  } else {
    value = false;
  }
    return (

        <div className='nav-container col-12'>
          <div className='row headerBTRE'>
            <Link to='/home'><img alt="BTRE" style={imgStyle} src={require('../../../assets/btreIcon2.png')}/></Link>
            {/*<b >BANK TRANSACTION ENGINE</b>*/}
          </div>

          <div className='div2 row'>

            {/*<NavigationItems/>*/}
            <Navbar bg="primary" variant="dark" className="col-12">

              <Nav className="mr-auto">
                <Nav.Link href="/home">Home</Nav.Link>
                <Nav.Link href="/accessblockchain">Block Chains</Nav.Link>
                {!value && <Nav.Link href="/loan_prediction">Loan Predictor</Nav.Link>}
                {value && <Nav.Link href="/bank_request">Cash Inflow Predictor</Nav.Link>}

              </Nav>
              <Form inline>
                {/*<FormControl type="text" placeholder="Search" className="mr-sm-2" />*/}
                {/*<Button variant="outline-light">Search</Button>*/}
                <Button variant="outline-light" onClick={this.props.signOut} >Sign Out</Button>
              </Form>
            </Navbar>

          </div>
        </div>
    );
  }
}
function mapStateToProps(state) {
  return{
    login:state.login,
    blockchainTransactions: state.blockchainTransactions,
    accessRules:state.accessRules
  };

}

function dispatchToProps(dispatch) {
  return {
    ...bindActionCreators({ addTransactions, mineBlock, getChain,signOut }, dispatch)
  };
}

Toolbar = connect(mapStateToProps, dispatchToProps)(Toolbar);

export default Toolbar;
