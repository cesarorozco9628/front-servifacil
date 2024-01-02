import React from 'react';
import {NavLink} from 'react-router-dom';
import { useSelector } from 'react-redux'; 
import { logOut } from '../Redux/Actions';
import { useDispatch } from 'react-redux'; 

const Navigation = () => {
    const dispatch = useDispatch();

    const user = useSelector(state => state.User);

    const showMenu = () => {
        const toggle = document.getElementById('toggle');
        const navbar = document.getElementById('navbar');


        document.onclick = function(e){
            if(e.target.id !== 'header' && e.target.id !== 'toggle' && e.target.id !== 'navbar'){
                toggle.classList.remove('active');
                navbar.classList.remove('active');
            }
        }


        toggle.onclick = function () {
            toggle.classList.toggle('active');
            navbar.classList.toggle('active');
        }
    }
    const log_out = () => {
        dispatch(logOut());
    }

    return(
        <nav id='header'>
            <NavLink className='logo' exact to=''>Servifacil</NavLink>
            <div id="toggle" onClick={showMenu}>
            </div>
            <div id='navbar'>
                <ul>
                    <li><NavLink exact to='/Home'>Home</NavLink></li>
                    {
                        user ? 
                        <li className='nav-item' onClick={log_out}>Log out</li>
                        :
                        <li><NavLink exact to='/Login'>Log in</NavLink></li>
                    }
                    {
                         user.id_rol === 1 ? 
                         <li><NavLink exact to='/Admin'>Administrador</NavLink></li>
                         :
                         ( user.id_rol === 2 && <li><NavLink exact to='/Emp'>Empleado</NavLink></li>)
                    }
                    
                   

                </ul>
            </div>
        </nav>
    );
}


export default Navigation;