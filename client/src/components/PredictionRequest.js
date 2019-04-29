import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {ENDPOINTS} from '../config';
import _ from 'lodash';
import {Field, FieldArray, reduxForm, formValueSelector, getFormValues} from 'redux-form';
import { Checkbox, RadioButtonGroup, AutoComplete, SelectField, TextField, Toggle, DatePicker } from 'redux-form-material-ui';
import MenuItem from 'material-ui/MenuItem';
import {loanRequest} from '../actions/pranithActions';
import Toolbar from './responsiveBars/Toolbar/Toolbar';
import Footer from './responsiveBars/footer/footer';

class PredictionRequest extends Component {

    renderField(field) {
        const {input, meta: {touched, error}} = field;
        const cname = `form-group ${touched && error ? 'has-danger' : ''} `;

        return (
            <div className={cname}>
                {/*<label>{field.label}</label>*/}
                <input className="form-control large-input"
                       {...input} {...field}
                />
                <div className="text-help text-danger">
                    {touched ? error : ''}
                </div>
            </div>
        )
    }

    renderError() {
        if (this.props.error) {
            return (
                <div className="text-help">
                    {this.props.error}
                </div>
            );
        }
    }

    constructor(props) {
        super(props);
      }



    onSubmit(values) {
      this.props.loanRequest(values);
    }

    render() {

        const {handleSubmit, load, pristine, reset, submitting, loan} = this.props;
        console.log('Prediction',loan);
        if (loan.prediction != ""){
          if (loan.prediction == "Y"){
            swal({
              title: "Congrats!!, Your loan will be Approved!",
              text: "Please contact your banker with the provided details",
              icon: "success",
              button: "Ok",
            });
          }
          else{
            swal({
              title: "Sorry, Your loan can't be approved!",
              text: "Please try a different loan amount ",
              icon: "error",
              button: "Try Again",
            });
          }
        }
        const divStyle = {
          paddingLeft: '30px',

          };

        const gender = [
        {value: 1, text:"Male"},
        {value: 0, text:"Female"}];
        const gradStatus = [

          {value: 0, text:'Not Graduate'},
          {value: 1, text:'Graduate'}];
        const propertyStat = [
        {value: 0, text:'Semi Urban'},
        {value: 1, text:'Urban'},
        {value: 2, text:'Rural'}];
        const dependents = [

          {value: 0, text:'0'},
          {value: 1, text:'1'},
          {value: 2, text:'2'},
          {value: 3, text:'3 or 3+'
        }];
        const yesStat = [
          {value: 0, text:'No'},
          {value: 1, text:'Yes'
        }];


        return (
          <div className='client-login'>
          <div className="row">
              <Toolbar/>
          </div>
          <div className='row d-flex justify-content-center align-items-center flex-column flex-wrap '>

          <div className='col-9 d-flex justify-content-around'>

          <Field className='gender-field' name='gender' component={SelectField} autoWidth={true} floatingLabelText="Gender">
                                          {gender && gender.map((sex, index) => (
                                          <MenuItem key={index} value={sex.value} primaryText={sex.text}/>
                                        ))}
                                        </Field>
          <Field className='married-field' name='married' component={SelectField} autoWidth={true} floatingLabelText="Married">
                                                                        {yesStat && yesStat.map((truth, index) => (
                                                                        <MenuItem key={index} value={truth.value} primaryText={truth.text}/>))}
                                                                        </Field>
          </div>



            <div className='col-9 d-flex justify-content-around'>
            <Field className='education-field' name='education' component={SelectField} autoWidth={true} floatingLabelText="Education">
                                            {gradStatus && gradStatus.map((gradStat, index) => (
                                            <MenuItem key={index} value={gradStat.value} primaryText={gradStat.text}/>))}
                                            </Field>


            <Field className='employment-field' name='self_employed' component={SelectField} autoWidth={true} floatingLabelText="Self Employment">
                                            {yesStat && yesStat.map((truth, index) => (
                                            <MenuItem key={index} value={truth.value} primaryText={truth.text}/>))}
                                            </Field>
            </div>

            <div className= 'col-9 d-flex justify-content-around'>

            <Field name = 'applicant_income' type='text' component={TextField}
                                                                     hintText="" floatingLabelText="Applicant Income"
                                                                     disabled={false}/>


            <Field name = 'co_applicant_income' type='text' component={TextField}
                                                                     hintText="" floatingLabelText="Co-Applicant Income"
                                                                     disabled={false} />
            </div>
            <div className= 'col-9 d-flex justify-content-around'>

            <Field name = 'loan_amount' className = 'loanAmount-field' type='text' component={TextField}
                                                                     hintText="" floatingLabelText="Loan Amount"
                                                                     disabled={false}/>

            <Field className="loanAmountTerm-field" name = 'loanAmountTerm' type='text' component={TextField}
                                                                     hintText="" floatingLabelText="Loan Amount Term"
                                                                     disabled={false} />
            </div>

            <div className='col-9 d-flex justify-content-around'>

            <Field className='creditHistory' name='creditHistory' component={SelectField} autoWidth={true} floatingLabelText="Credit History">
                                            {yesStat && yesStat.map((truthValue, index) => (
                                            <MenuItem key={index} value={truthValue.value} primaryText={truthValue.text}/>))}
                                            </Field>


            <Field className='propertyArea' name='property_area' component={SelectField} autoWidth={true} floatingLabelText="Property Area Select">
                                            {propertyStat && propertyStat.map((property, index) => (
                                            <MenuItem key={index} value={property.value} primaryText={property.text}/>))}
                                            </Field>
            </div>

            <div className='col-9 d-flex offset-md-2 dependents' style={divStyle}>


              <Field className='dependents-field' name='dependents' component={SelectField} autoWidth={true} floatingLabelText="Dependents">
                                              {dependents && dependents.map((dependent, index) => (
                                              <MenuItem key={index} value={dependent.value} primaryText={dependent.text}/>))}
                                              </Field>
              </div>

            <div className = 'row submit-button'><button disabled={pristine || submitting} className="btn btn-success" alternatetext="Submit"  onClick={handleSubmit(this.onSubmit.bind(this))}> Submit
            </button></div>

          </div>
          <Footer/>
          </div>

        )

    }
  }
function stateToProps(store) {
    return ({
      loan:store.loan,
    })

}

function dispatchToProps(dispatch) {
    return {
        ...bindActionCreators({loanRequest}, dispatch)
    }
}


PredictionRequest = reduxForm({ form: 'predRequestForm', enableReinitialize: true })(PredictionRequest);
const selector = formValueSelector('predRequestForm');
PredictionRequest = connect(stateToProps, dispatchToProps)(PredictionRequest);
export default (PredictionRequest)
