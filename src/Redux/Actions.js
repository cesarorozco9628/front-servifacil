import axios from 'axios';

export const ACTIONS_TYPE = {
    loginAccess: 'LOGIN_ACCESS',
    logOut: 'LOG_OUT',
    User: 'USER',
    Error: 'ERROR'
}

export const loginAccess = (value) => {
    return {
        type: ACTIONS_TYPE.loginAccess,
        payload: value,
    }
}

export const logOut = (value) => {
    return {
        type: ACTIONS_TYPE.logOut,
        payload: value,
    }
}
export const User = (value) => {
    return {
        type: ACTIONS_TYPE.User,
        payload: value,
    }
}
export const ErrorPetition = (value) => {
    return {
        type: ACTIONS_TYPE.Error,
        payload: value,
    }
}
export const Users = (data) => {
    return async (dispatch) => {
        try {
          const response = await axios.get('https://servifacil-back.onrender.com/api/v1/login', { data: data });
          debugger
          dispatch(User(response.data));
        } catch (error) {
          debugger
          dispatch(ErrorPetition(error.message));
        }
    };
}

//testr
export const GetClient = () => {
    return async (dispatch) => {
        return axios.get('http://localhost:8080/get_customer_byid/{id}')
            .then((response) => {

            })
            .catch((err) => {

            })
    }
}