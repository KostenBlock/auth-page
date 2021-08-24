import {LOGIN_SUCCESS} from "../actions/types";

const initialState = {
    user: {
        login: "developer21",
        password: "123456"
    },
    isAuthenticated: false
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return {
                ...state,
                isAuthenticated: true
            }
        default:
            return state;
    }
}

export default reducer;