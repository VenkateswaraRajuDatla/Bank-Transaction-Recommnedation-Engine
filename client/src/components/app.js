import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Login from './loginpk'
import LoginPage from './pk/loginpage'
import {Field, FieldArray, reduxForm, formValueSelector, getFormValues} from 'redux-form';
import {Link} from 'react-router-dom';
import { Checkbox, RadioButtonGroup, AutoComplete, SelectField, TextField, Toggle, DatePicker } from 'redux-form-material-ui';
import MenuItem from 'material-ui/MenuItem';
import './global.scss';



export class AppContainer extends Component {
    constructor(props) {
        super(props);
        this.state = { }
    }


    componentDidMount() { }

    render() {
        return (
            <div className='MainApp'>
            Dashboard
            </div>


        );
    }
}

function stateToProps(state) {
    return {

    }
}

function dispatchToProps(dispatch) {
    return {
        ...bindActionCreators({

        }, dispatch)
    }
}







AppContainer = connect(stateToProps, dispatchToProps)(AppContainer);

export default (AppContainer)
