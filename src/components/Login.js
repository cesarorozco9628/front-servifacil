import React, {useEffect, useState} from 'react';

import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { validate_email_string, show_or_hide_element, get_data_user } from '../aux/aux';
import Navigation from './Navi';
import LazyLoading from '../aux/Lazyloading';


const Register = () => {
    const dispatch = useDispatch();
    const history = useHistory();  
    const [formData, setFormData] = useState({username: '', email: '', password: '' });

    const [disabled, setDisabled] = useState(true);
    const [lazyLoading, setLazyLoading] = useState(false);
    const [errorsession, setErrorSession] = useState(false);

    const handle_login = () => {
       setLazyLoading(true);
       setDisabled(true);
       const data = { password:formData.password, username:formData.username, email:formData.email }
       get_data_user(data, dispatch, setLazyLoading, setErrorSession, history, setDisabled);
    }

     const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({...formData,[name]: value,});
    };

    const validate_fields = () => {
        if( formData.email && formData.username.length > 0 && formData.password.length > 0 ){
            setDisabled(false);
        }else{
            setDisabled(true);
        }
    }

    const handle_email = ( e ) => {
        const { value } = e.target, boolean_password = validate_email_string( value );
        show_or_hide_element( 'id_error_email', boolean_password );
        handleInputChange(e);
    }

    useEffect(() => {
        validate_fields();
    }, [ formData ])
   

    return (
        <>
            <Navigation></Navigation>
        
            <section className='col-12 d-flex flex-column'>
                <div className={errorsession ? "alert alert-danger fade-in-out " : "alert alert-danger fade-in-out d-none"} role="alert">
                    <strong>Error:</strong> "Verifica que los datos sean correctos e inténtalo de nuevo."
                </div>
                <div className="mb-4 col-10 col-md-6">
                    <label className="form-label" >User</label>
                    <input 
                        type="text" 
                        className="form-control col-10"    
                        name="username"
                        value={formData.username}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className="mb-4 position-relative col-10 col-md-6">
                    <label className="form-label" >Email</label>
                    <input 
                        type="text"
                        className="form-control col-10" 
                        name='email' 
                        id="id_email" 
                        value={formData.email}
                        onInput={ handle_email } 
                        required
                        />
                    <p className='email-error d-none' id='id_error_email'>Por favor de ingresar un correo valido.</p>
                </div>
                <div className="mb-4 col-10 col-md-6">
                    <label className="form-label">Password</label>
                    <input 
                        type="password" 
                        className="form-control"  
                        name='password' 
                        id='id_password' 
                        value={formData.password}
                        onInput={ handleInputChange } 
                        required
                    />
                </div>
                <button type="button" id='id_btn_login' onClick={ handle_login } className='btn btn-primary' disabled={ disabled }>
                    {
                        lazyLoading ? 
                        <LazyLoading></LazyLoading>
                        :
                        'Inicio de sesión'
                    }
                    
                  
                </button>
                
            </section>
        </>
    );
}

export default Register;