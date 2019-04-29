// export const API = process.env.REACT_APP_CONTACTS_API_URL ||'https://koxbkdez09.execute-api.us-west-2.amazonaws.com/prod';
let URL1 = '';
// console.info('cur env: ' + process.env.NODE_ENV);
switch (process.env.NODE_ENV) {
  case 'test':
  case 'prod':
  case 'production':
    URL1 = "http://127.0.0.1:5000";
    break;
  default:
    URL1 = "http://127.0.0.1:5000";
}
export const FLASK_API = URL1;
