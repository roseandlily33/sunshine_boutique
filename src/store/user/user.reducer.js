import  USER_ACTION_TYPES  from "./user.types";

export const INITIAL_STATE = {
    currentUser: null
}
export const userReducer = (state = INITIAL_STATE, action ={}) => {
    //const {type, payload} = action;
    switch(action.type){
        case USER_ACTION_TYPES.SET_CURRENT_USER: return{
            ...state, currentUser: action.payload
        }
        default: {
            return state;
        }
    }
}

  