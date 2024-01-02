import React from 'react';
import { Redirect } from "react-router-dom";
import { useSelector } from 'react-redux';



const GetRol = (props) => {

 const user = useSelector(state => state.User);
    return(
        <>
            { (user.id_rol == props.rol ) ? props.children : <Redirect to='/Home'/>}
        </>
    );
}

export default GetRol;