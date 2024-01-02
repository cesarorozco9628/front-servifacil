import React from 'react';
import { Redirect } from "react-router-dom";
import {useSelector} from 'react-redux';



const ProtectedRoute = ({children}) => {

 const login = useSelector((state) => state.login);

    return(
        <>
            { login ? children : <Redirect to='/login'/>}
        </>
    );
}

export default ProtectedRoute;