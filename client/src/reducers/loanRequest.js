import { LOAN_PREDICTION_RESPONSE, LOAN_PREDICTION_REQUEST, LOAN_PREDICTION_ERROR} from '../actions/pranithActions';


export const initialState = {
  message:"",
  prediction:""
};


export default function loanPredict(state = initialState, action) {
  console.info(action);
  switch (action.type) {
    case LOAN_PREDICTION_REQUEST:
      return { ...state};
    case LOAN_PREDICTION_RESPONSE:
      return { ...state, message: action.message, prediction:action.payload };
    case LOAN_PREDICTION_ERROR:
      return { ...state, message: '' };

    default:
      return state;
  }
}
