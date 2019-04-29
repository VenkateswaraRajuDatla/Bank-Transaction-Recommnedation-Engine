import React, { Component } from 'react';
import swal from 'sweetalert';
import { Field, formValueSelector, reduxForm } from 'redux-form';
import { Nav,Navbar,Form,FormControl,Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { history } from '../../store/index';
import FileDrop from 'react-file-drop';
import { loginSubmit, checkSession } from '../../actions';
// import {login} from "../reducers/reducer_login";
import { signIn, signOut, addTransactions, mineBlock, getChain } from '../../actions/pranithActions';
import Ledger from './ledger';
import readXlsxFile from 'read-excel-file';
import login from "../../reducers/loginReducer";
import form from "../../reducers/form";
import blockchainTransactions from "../../reducers/blockchainTransactions";
import accessRules from "../../reducers/accessRules";

import CloudUpload from 'material-ui/svg-icons/file/cloud-upload';


class DashboardBody extends Component {
  renderField(field) {
    const className = `form-control input-login ${field.meta.touched && field.meta.error ? 'border-red' : ''}`;
    return (
      <div className="form-group form-group-custom">
        <input className =  {className}

          {...field.input}
                       placeholder={field.label}
          type={field.type}
        />
        <div className="error-message">
          {field.meta.touched ? field.meta.error : ''}
        </div>
      </div>
    );
  }
  constructor(props) {
    super(props);
  }

  getChainlocal() {
    this.props.getChain();
    history.push('/displaychain');
    return (this.props.blockchainTransactions.chain);
    // if (this.props.blockchainTransactions.chain != '') {
    //   return (this.props.blockchainTransactions.chain);
    // }
  }

  createBlockchain() {
    if (this.props.blockchainTransactions.transactions.length != 0) {
      this.props.mineBlock(this.props.blockchainTransactions.transactions);
    }
    this.transactionsFile.value = '';


  }


    componentDidMount() {
      console.log(this.props.login);
      console.log(this.props.login.username);
    }
  handleselectedFileBackup = event => {
    console.log('file changed  nohghg');
    console.log(event);
    if (event.target.files[0].type.includes('excel') || event.target.files[0].type.includes('sheet')) {
      readXlsxFile(event.target.files[0]).then((rows) => {
        console.log(rows);
        for (let i = 1; i < rows.length; i++) {
          Ledger.newTransactionLocal(rows[i][0], rows[i][1], rows[i][2]);
        }
        // console.log(Ledger.blockchain.current_transactions);
        this.props.addTransactions(rows);
        swal({
          title: "File Uploaded!",
          text: "Transactions have been parsed and uploaded",
          icon: "success",
          button: "Finish",
        });
      });
    } else {
      swal({
        title: "File not Uploaded!",
        text: "Please upload an Excel file",
        icon: "error",
        button: "Upload file again",
      });
      event.target.value = '';
      // event.target.files[0].remove();
    }

    // this.setState({
    //     selectedFile: event.target.files[0],
    //     loaded: 0,
    // });
  };

    handleselectedFile = files => {
      console.log('file changed  nohghg');
      console.log(files);
      if (files[0].type.includes('excel') || files[0].type.includes('sheet')) {
        readXlsxFile(files[0]).then((rows) => {
          console.log(rows);
          for (let i = 1; i < rows.length; i++) {
            Ledger.newTransactionLocal(rows[i][0], rows[i][1], rows[i][2]);
          }
          // console.log(Ledger.blockchain.current_transactions);
          this.props.addTransactions(rows);
          swal({
            title: "File Uploaded!",
            text: "Transactions have been parsed and uploaded",
            icon: "success",
            button: "Finish",
          });
        });
      } else {
        swal({
          title: "File not Uploaded!",
          text: "Please upload an Excel file",
          icon: "error",
          button: "Upload file again",
        });
        event.target.value = '';
        // event.target.files[0].remove();
      }

      // this.setState({
      //     selectedFile: event.target.files[0],
      //     loaded: 0,
      // });
    };

    render() {
      console.log('this is from dashboardbody.js');
      console.log(this.props);
      console.log('props login');

      const disnone = {
        display: 'none'
      };
      const errorstyle = {
        color: 'red',
        fontSize: 12
      };



      const { handleSubmit, load, pristine, reset, submitting } = this.props;

      // Is needed.?

      if ((this.props.login.username != '')) {
        history.push('/dashboard');
      }


      return (
        <div className="col-12">
          <div className="row" >
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </div>
          <div className="row" >
            <br></br>


              <h5 className="col-6 offset-1"> Click to view the Transactions in Block Chain</h5>

            <Button variant="primary"
                id="sd"
                onClick={() => {
                  console.log(this.getChainlocal());
                }}
            >Display Chain</Button>
            </div>
           <div className="row" >
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </div> <div className="row" >
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </div>
            <div  className="row" >
            <div style={{display: (this.props.login.usertype == 'admin') ? 'block' : 'none' }} className="col-12">

              <div className="col-5 offset-1">
                <h5>To add transactions to Block Chain, please upload a file</h5>
               </div>
              <div className="col-5 offset-1">

                  {/*<input type="file" name="transactionsFile" id="transactionsFile" onChange={this.handleselectedFile} ref={ref => this.transactionsFile = ref} />*/}
                <FileDrop
                    onDrop={this.handleselectedFile} >
                  <p>Drop Excel files</p>
                  <CloudUpload/>
                </FileDrop>
                  <br/>
                  </div>
              <div className="col-12 offset-1">

                <span className="col-3"><Button  variant="primary" style={{align:'center'}} id="blockchain" onClick={this.createBlockchain.bind(this)}>Mine Block</Button>
                  </span>
              </div>
            </div>

          </div>
        </div>


      );
    }
}


// helper for validation
// values are details that user enter in form
function validate(values) {
  // object that returns errors, if errors is empty the form will be submitted, else it wont be submitted
  // if errors has any properties, redux from assumes that form is invalid
  const errors = {};

  // names are associated to fields in the redux form names
  if (!values.username) {
    errors.username = 'Please enter your username or email';
  }
  if (!values.password) {
    errors.password = 'Please enter your password';
  }
  return errors;
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


DashboardBody = reduxForm({ form: 'loginForm', enableReinitialize: true, validate })(DashboardBody);


const selector = formValueSelector('searchForm');
DashboardBody = connect(mapStateToProps, dispatchToProps)(DashboardBody);

export default DashboardBody;
