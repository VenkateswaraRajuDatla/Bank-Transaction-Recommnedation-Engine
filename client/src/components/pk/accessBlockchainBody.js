import React, { Component } from 'react';
import swal from 'sweetalert';
import { Field, formValueSelector, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { history } from '../../store/index';
import { getAccessRules } from '../../actions/pranithActions';
import Ledger from './ledger';
import readXlsxFile from 'read-excel-file';
import {Table} from "react-bootstrap"
// import  "././pk/login.css";

class AccessBlockchainBody extends Component {
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
    renderAccessRules() {

        var arrayDates = [];

        for (var i = 0; i < 15; i++) {
            let newDate = new Date();
            newDate.setDate(newDate.getDate() + i);
            arrayDates.push(newDate);
            // console.log(newDate);
        }

        //  console.log(arrayDates)

         if(this.props.accessRules!=null) {



             return (_.map(this.props.accessRules.accessRules, Rule => {
                 return (

                          <tr>


                             <td >{Rule.bankName}</td>

                             <td >{Rule.accessType}</td>
                             <td  >
                                 <Link
                                     to={`/dashboard`}>{Rule.bankName}
                                 </Link>
                             </td>

                          </tr>


                 )
             }))
         }
         else{
             return (


                     <div className="background-white text-center carousel-date">
                      <h3> The User does not have access to any Blockchains</h3>
                         </div>
             )

         }

    }

    //
    //
    // onSubmit(values) {
    //   console.log(this.props.login);
    //   this.props.signIn(values);
    // }



    componentWillMount() {
        this.props.getAccessRules(this.props.login);
        console.log(this.props.login);
      //  console.log(this.props.e);
    }




    render() {


        const disnone = {
            display: 'none'
        };
        const errorstyle = {
            color: 'red',
            fontSize: 12
        };


        const { handleSubmit, load, pristine, reset, submitting } = this.props;

        // Is needed.?




        return (
            <div className="col-12">
                <div className="col-12">
                    <div className="col-12">
                        <Table striped bordered hover size="sm">
                           <thead> <th>
                                Bank Name
                            </th>
                            <th> Access Type</th>
                            <th> Access Link</th>
                           </thead>
                            <tbody>
                            {this.renderAccessRules()}
                            </tbody>
                        </Table>

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
        ...bindActionCreators({ getAccessRules }, dispatch)
    };
}


AccessBlockchainBody = reduxForm({ form: 'loginForm', enableReinitialize: true, validate })(AccessBlockchainBody);


const selector = formValueSelector('searchForm');
AccessBlockchainBody = connect(mapStateToProps, dispatchToProps)(AccessBlockchainBody);

export default AccessBlockchainBody;
