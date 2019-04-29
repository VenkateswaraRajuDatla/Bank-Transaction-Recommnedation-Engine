import {FILEUPLOAD_SUCCESS, FILEUPLOAD_ERROR, GETCHAIN_SUCCESS, MINEBLOCK_SUCCESS} from '../actions/pranithActions';


export const initialState = {
  transactions: [],
  chain: []
};


export default function login(state = initialState, action) {

  switch (action.type) {
    case FILEUPLOAD_SUCCESS:
      console.log(action);
      return { ...state, transactions: action.payload };
    case FILEUPLOAD_ERROR:
      window.localStorage.clear();
      return { ...state, message: action.message };
    case GETCHAIN_SUCCESS:
      return { ...state, chain: action.payload };
    case MINEBLOCK_SUCCESS:
      return { ...state, transactions: [] };

    default:
      return state;
  }
}
