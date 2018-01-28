import React from 'react';
import {withRouter} from 'react-router-dom';

export const AuthButton =  withRouter(({history}) => (
    <a className='pointer' onClick={() => {
        localStorage.removeItem('adminToken');
        return history.push('/login')
    }}>LOG OUT</a>
));

