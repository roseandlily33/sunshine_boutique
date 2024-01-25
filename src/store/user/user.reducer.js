import  USER_ACTION_TYPES  from "./user.types";

export const INITIAL_STATE = {
    currentUser: null
}
export const userReducer = (state = INITIAL_STATE, action ={}) => {
    console.log('Start State of User Reducer', state, action);
    //const {type, payload} = action;
   
    console.log('USER REDUCER', action.type, action.payload);
    switch(action.type){
        case USER_ACTION_TYPES.SET_CURRENT_USER: return{
            ...state, currentUser: action.payload
        }
        default: {
            return state;
        }
    }
}

  