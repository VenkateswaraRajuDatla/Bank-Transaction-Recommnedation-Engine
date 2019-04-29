import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {ENDPOINTS} from '../config';
import _ from 'lodash';
import {Field, FieldArray, reduxForm, formValueSelector, getFormValues} from 'redux-form';
import { Checkbox, RadioButtonGroup, AutoComplete, SelectField, TextField, Toggle, DatePicker } from 'redux-form-material-ui';
import MenuItem from 'material-ui/MenuItem';
import {loanRequest} from '../actions/pranithActions';
import FileDrop from 'react-file-drop';
import {fileUpload} from '../actions/pranithActions';
import CloudUpload from 'material-ui/svg-icons/file/cloud-upload';




class FileUpload extends Component {

    constructor(props) {
        super(props);

    }

    handleDrop = (files) => {
        //this.setState({files});
        this.props.fileUpload(files);
       // console.info("inside the function", files[0].name);
    };



    componentDidMount() {
    }

    render() {

        return (
            <div className='dropzone d-flex justify-content-center'>
                <div className='col-6'><FileDrop
                          onDrop={this.handleDrop}>
                    <p>Drop CSV files</p>
                    <CloudUpload/>
                </FileDrop></div>
            </div>
        )

    }

}

function mapStateToProps(store) {
    return ({});
}

function mapDispatchToProps(dispatch) {
    return {
        ...bindActionCreators({fileUpload}, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FileUpload);
