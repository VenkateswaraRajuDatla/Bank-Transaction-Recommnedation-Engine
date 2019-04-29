
import { combineReducers } from 'redux';
import login from './loginReducer';
import form from './form';
import blockchainTransactions from './blockchainTransactions';
import accessRules from './accessRules';
import bankRequest from './bankRequest';
import loanPredict from './loanRequest';



let rootReducer = combineReducers({
  login:login,
  loan:loanPredict,
  form:form,
  blockchainTransactions:blockchainTransactions,
  accessRules:accessRules,
  bankRequest:bankRequest
});

export default rootReducer;
