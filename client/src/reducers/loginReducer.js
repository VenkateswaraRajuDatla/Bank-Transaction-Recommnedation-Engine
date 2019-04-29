import { SIGNIN_SUCCESS, SIGNIN_CRED_ERROR, SIGNIN_ERROR, SIGNOUT } from '../actions/pranithActions';


export const initialState = {
  isLoggedIn: window.localStorage.getItem('isLoggedIn') || false,
  username: window.localStorage.getItem('username') || '',
  message: '',
  usertype: window.localStorage.getItem('userType')||'user',
  userSession: '',
  email:window.localStorage.getItem('email') || '',
};


export default function login(state = initialState, action) {
  switch (action.type) {
    case SIGNIN_SUCCESS:
      window.localStorage.setItem('isLoggedIn', true);
      window.localStorage.setItem('username', action.payload.data[0].displayname);
      window.localStorage.setItem('email', action.payload.data[0].email);
      window.localStorage.setItem('userType',action.payload.data[0].userType);
      return { ...state,
        isLoggedIn: true,
        username: action.payload.data[0].displayname,
        usertype: action.payload.data[0].userType,
        email:action.payload.data[0].email,
        message: '' };
    case SIGNIN_CRED_ERROR:
      window.localStorage.clear();
      return { ...state, message: action.message };
    case SIGNIN_ERROR:
      window.localStorage.clear();
      return { ...state, message: action.message };
    case SIGNOUT:
      window.localStorage.clear();
      return { ...state, isLoggedIn: false, message: '' };
    default:
      return state;
  }
}
