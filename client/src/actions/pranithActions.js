import axios from 'axios';
import swal from 'sweetalert';
import { API } from '../api/API';
import { FLASK_API } from '../api/FLASK_API';
import { blockchainAPI } from '../api/blockchainAPI';
import _ from 'lodash';
import { SET_FILTERS } from './app';
import { headerConfig } from './app';
import { history } from '../store/index';



export const SIGNIN_SUCCESS = 'SIGNIN_SUCCESS';
export const SIGNOUT = 'SIGNOUT';
export const SIGNIN_ERROR = 'SIGNIN_ERROR';
export const LOAN_PREDICTION_REQUEST = 'LOAN_PREDICTION_REQUEST';
export const LOAN_PREDICTION_RESPONSE = 'LOAN_PREDICTION_RESPONSE';
export const LOAN_PREDICTION_ERROR = 'LOAN_PREDICTION_ERROR';
export const SIGNIN_CRED_ERROR = 'SIGNIN_CRED_ERROR';
export const FILEUPLOAD_SUCCESS = 'FILEUPLOAD_SUCCESS';
export const ACCESSRULES_SUCCESS = 'ACCESSRULES_SUCCESS';
export const FILEUPLOAD_ERROR = 'FILEUPLOAD_ERROR';
export const GETCHAIN_SUCCESS = 'GETCHAIN_SUCCESS';
export const MINEBLOCK_SUCCESS = 'MINEBLOCK_SUCCESS';
export const FILE_FORMAT_ERROR = "FILE_FORMAT_ERROR";
export const FILE_UPLOAD = "FILE_UPLOAD";
export const FILE_OUTPUT = "FILE_OUTPUT";


export function signIn(credentials) {
  return function (dispatch) {
    axios.post(`${API}/signin`, credentials, headerConfig)
      .then((res) => {

        console.info(res.status);
        console.info(res);
        if (res.status == 200) {
          dispatch({ type: SIGNIN_SUCCESS, payload: res });
          history.push('/home');
        } else {
          dispatch({ type: SIGNIN_CRED_ERROR, message: 'Error Credentials' });
        }
      })
      .catch((error) => {
        console.log('Error', error);
        dispatch({ type: SIGNIN_ERROR, message: 'Server Error' });
      });
  };
}

export function Signup(credentials) {
    console.log(credentials);
    return function (dispatch) {
        axios.post(`${API}/singup`, credentials, headerConfig)
            .then((res) => {

                console.info(res.status);
                console.info(res);
                if (res.status == 200) {
                    dispatch({ type: SIGNIN_SUCCESS, payload: res });
                    history.push('/home');
                } else {
                    dispatch({ type: SIGNIN_CRED_ERROR, message: 'Error Credentials' });
                }
            })
            .catch((error) => {
                console.log('Error', error);
                dispatch({ type: SIGNIN_ERROR, message: 'Server Error' });
            });
    };
}
export function addTransactions(rows) {
  return function (dispatch) {
    axios.post(`${blockchainAPI}/blockchain/addTransactions`, rows, headerConfig)
      .then((res) => {
        console.info(res.status);
        console.info(res.body);
        if (res.status == 200) {
          dispatch({ type: FILEUPLOAD_SUCCESS, payload: rows });
          // history.push('/dashboard');
        } else {
          // dispatch({ type: SIGNIN_CRED_ERROR, message: 'Error Credentials' });
        }
      })
      .catch((error) => {
        console.log('Error', error);
        // dispatch({ type: SIGNIN_ERROR, message: 'Server Error' });
      });
  };
}

export function getChainLocal() {
  return function (dispatch) {
    axios.post(`${blockchainAPI}/blockchain/getChain`, headerConfig)
      .then((res) => {console.log('from reducer');
        console.info(res.status);
        console.info(res.data);
        console.info(res);
        if (res.status == 200) {
          dispatch({ type: GETCHAIN_SUCCESS, payload: res.data });
          // history.push('/dashboard');
        } else {
          // dispatch({ type: SIGNIN_CRED_ERROR, message: 'Error Credentials' });
        }
      })
      .catch((error) => {
        console.log('Error', error);
        // dispatch({ type: SIGNIN_ERROR, message: 'Server Error' });
      });
  };
}
export function getChain() {
    return function (dispatch) {
        axios.post(`${blockchainAPI}/blockchain/getChainLocal`, headerConfig)
            .then((res) => {
                console.log('from reducer get chain');
                console.log(res);


                if (res.status == 200) {
                    dispatch({ type: GETCHAIN_SUCCESS, payload: res.data });
                    // history.push('/dashboard');
                } else {
                    // dispatch({ type: SIGNIN_CRED_ERROR, message: 'Error Credentials' });
                }
            })
            .catch((error) => {
                console.log('Error deomsdkfhskf', error);
                console.log(error);
                // dispatch({ type: SIGNIN_ERROR, message: 'Server Error' });
            });
    };
}
export function mineBlock(rows) {
  return function (dispatch) {
    axios.post(`${blockchainAPI}/blockchain/mineBlock`, rows, headerConfig)
      .then((res) => {
        console.info(res.status);
        if (res.status == 200) {
          dispatch({ type: MINEBLOCK_SUCCESS, payload: rows });
          // history.push('/dashboard');
            swal({
                title: "Block Mining started",
                text: "mining!!",
                icon: "success",
                button: "Ok",
            });
        } else {
          // dispatch({ type: SIGNIN_CRED_ERROR, message: 'Error Credentials' });
        }
      })
      .catch((error) => {
        console.log('Error', error);
        // dispatch({ type: SIGNIN_ERROR, message: 'Server Error' });
      });
  };
}

export function getAccessRules(reqdata) {
    return function (dispatch) {

        let data={
            reqdata:reqdata,
            email:window.localStorage.getItem('email')
        };
        axios.post(`${API}/getaccessrules`,data, headerConfig)
            .then((res) => {
                console.log('from reducer from accessrules');
                console.info(res.status);
                console.info(res.data);
                console.info(res);
                if (res.status == 200) {
                    dispatch({ type: ACCESSRULES_SUCCESS, payload: res.data });
                    // history.push('/dashboard');
                } else {
                    // dispatch({ type: SIGNIN_CRED_ERROR, message: 'Error Credentials' });
                }
            })
            .catch((error) => {
                console.log('Error', error);
                // dispatch({ type: SIGNIN_ERROR, message: 'Server Error' });
            });
    };
}


export function signOut() {
  return function (dispatch) {
    dispatch({ type: SIGNOUT });
    history.push('/login');
  };
}

export function loanRequest(values){
  return function(dispatch, getState){
    dispatch({type:LOAN_PREDICTION_REQUEST})
    axios.post(`${FLASK_API}/loan_request`,values, headerConfig)
      .then((res) => {
        if (res.status == 200) {
            // console.log(res.data.result)
            dispatch({ type: LOAN_PREDICTION_RESPONSE, payload: res.data.result });
            // history.push('/dashboard');
        }
    })
      .catch((error) => {
        console.log('Error -> ', error);
        console.log(error);
        dispatch({ type: LOAN_PREDICTION_ERROR, message: 'Server Error' });
    });


  }
}


export function fileUpload(files){
    return function(dispatch, getState){
        let newFile = {};
        let hasErrors = false;
        let exceededMemory = false;
        let fileType = files[0].type;
        let fileSize = memoryConversion(files[0].size);
        let fileLimit = 6;
        if (fileType !=='csv' || fileType !=='xlsx'){
            hasErrors = true;}
        if (fileSize >= fileLimit){
                console.log(fileSize);
                exceededMemory = true;}
        if (hasErrors && exceededMemory ){dispatch({type: FILE_FORMAT_ERROR, message:`Error in Uploading CSV file below 6MB, Received "${fileType}" and Its size is "${fileSize}."`});
            return false
          }
        else{dispatch({type:FILE_UPLOAD, message:"File Uploading...."});
            dispatch(processFile(files));}}}

function memoryConversion(fileSize){
  let kb = 1024;
  let mb = 1024
  console.log(Math.ceil(fileSize/(mb*kb)))
  return Math.ceil(fileSize/(mb*kb))
}

export function processFile(files){
    let frmData = new FormData();
    frmData.set('file', files[0], files[0].name);
    return function (dispatch, getState){
        const fileHeaderConfig = {headers:{'Content-Type': 'multipart/form-data'}};
        axios.post(`${FLASK_API}/bank_request`,frmData, fileHeaderConfig)
            .then((res)=>{dispatch({type:FILE_OUTPUT, payload:res});})
            .catch((e)=>{
              console.log(e);
                dispatch({type: FILE_SERVER_ERROR, message:" Server - Parsing Error"});
            });
    }
}
