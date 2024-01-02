import React from 'react';

const LazyLoading = () => {

    return(
        <div className="text-center d-flex align-items">
            <div className='me-2 d-flex align-items-center'>Cargando </div>
            <div className="spinner-border" role="status">
                <span className="sr-only"></span>
            </div>
        </div>
    );
}

export default LazyLoading;