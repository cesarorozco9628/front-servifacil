import axios from 'axios';
import { User, ErrorPetition, loginAccess } from '../Redux/Actions';

export const validate_email_string = (value_tgt) => {
    const value = value_tgt
    const rgx =/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return rgx.test(value);
}

export const show_or_hide_element = (id, boolean) => {
    const element = document.getElementById(`${id}`);
    boolean ? element.classList.add('d-none') :  element.classList.remove('d-none');
}


export const get_data_user = (data, dispatch, setState, setError, history, setDisabled) => {
    const config = {
      method: 'POST',
      url: 'https://servifacil-back.onrender.com/api/v1/login',
      headers: {
        'Content-Type': 'application/json',
      },
      // Transforma los datos en una cadena JSON y colócala en el cuerpo de la solicitud
      data: JSON.stringify(data),
    };
  
    axios(config)
      .then((response) => {
        dispatch(User(response.data.user));
        dispatch(loginAccess());
        setState(false);
        setError(false);
        history.push('/');
        setDisabled(false)

      })
      .catch((error) => {
        dispatch(ErrorPetition(error));
        setState(false);
        setError(true);
        setDisabled(false)
      });
  };
  