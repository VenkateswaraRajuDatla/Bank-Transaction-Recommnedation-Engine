import {FILE_UPLOAD, FILE_FORMAT_ERROR, FILE_OUTPUT, FILE_SERVER_ERROR} from '../actions/pranithActions';


export const initialState = {
  data: 0,
  message: "",
  meta_data:{}
};


export default function bankRequest(state = initialState, action) {

  switch (action.type) {
    case FILE_UPLOAD:
      return { ...state, message: action.message };
    case FILE_FORMAT_ERROR:
      return { ...state, message: action.message };
    case FILE_OUTPUT:
    console.log(action.payload.data.result);
      return { ...state, data: action.payload.data.result, meta_data:action.payload.data.plot_result};
    case FILE_SERVER_ERROR:
      return { ...state, message: action.message };

    default:
      return state;
  }
}
