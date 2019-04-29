import {ACCESSRULES_SUCCESS} from "../actions/pranithActions";


export const initialState = {
    accessRules: []
};


export default function accessRules(state = initialState, action) {
    switch (action.type) {
        case ACCESSRULES_SUCCESS:
            console.log(action);
            return { ...state, accessRules: action.payload };
        default:
            return state;
    }
};
