// export const API = process.env.REACT_APP_CONTACTS_API_URL ||'https://koxbkdez09.execute-api.us-west-2.amazonaws.com/prod';
let blockchainURL = '';
// console.info('cur env: ' + process.env.NODE_ENV);
switch (process.env.NODE_ENV) {
  case 'test':
  case 'prod':
  case 'production':
    blockchainURL = 'https://koxbkdez09.execute-api.us-west-2.amazonaws.com/prod';
    break;
  default:
    blockchainURL = 'http://127.0.0.1:3002';
}
export const blockchainAPI = blockchainURL;

