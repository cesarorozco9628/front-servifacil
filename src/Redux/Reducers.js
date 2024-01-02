import {ACTIONS_TYPE} from './Actions';

const INITIAL_STATE = {
    login: false,
    User: [],
    Error:''
}

const Reducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case ACTIONS_TYPE.loginAccess:
            return {
                ...state,
                login: true,
            }
        case ACTIONS_TYPE.logOut:
            return {
                ...state,
                login: false,
            }
        case ACTIONS_TYPE.User:
            return {
                ...state,
                User: action.payload
            }
        case ACTIONS_TYPE.Error:
            return {
                ...state,
                Error:action.payload
            }
        default:
            return state;    
    }
}

export default Reducer;