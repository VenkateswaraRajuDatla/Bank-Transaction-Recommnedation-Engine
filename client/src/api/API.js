// export const API = process.env.REACT_APP_CONTACTS_API_URL ||'https://koxbkdez09.execute-api.us-west-2.amazonaws.com/prod';
let URL = '';
// console.info('cur env: ' + process.env.NODE_ENV);
switch (process.env.NODE_ENV) {
  case 'test':
  case 'prod':
  case 'production':
    URL = 'http://127.0.0.1:3001';
    break;
  default:
    URL = 'http://127.0.0.1:3001';
}
export const API = URL;
