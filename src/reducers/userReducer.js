import {SET_USER} from "../actions/actionType";
const INITAL_STATE = {
    user: null,
}

const userReducer = (state = INITAL_STATE, action) => {
    switch (action.type) {
        case SET_USER:
            return {
                ...state,user:action.user,
            }
        default:
            return state;
    }
};

export default userReducer;