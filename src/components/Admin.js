import React from 'react';
import { useSelector } from 'react-redux';
import Navigation from './Navi';

const Admin = () => {
    const user = useSelector(state => state.User);

    return(
        <>
            <Navigation></Navigation>
            <section>
                <div className='container text-home'>
                    <h1>Bienvenido  {user.id_rol === 1 ? 'Administrador' : 'Empleado'} !!</h1>

                    <h2>Esta información solo se muestra para el Administrador</h2>

                    <h3 className='my-3'>
                        Informacion del Usuario.
                    </h3>
                    <div>
                        <p>Username: <strong>{user.user}</strong></p>
                        <p>Email: <strong>{user.email}</strong></p>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Admin;