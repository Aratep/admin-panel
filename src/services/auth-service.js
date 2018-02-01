import React from 'react';
import {withRouter} from 'react-router-dom';

import {TOKEN_URL, GET} from '../constants/constants';

export const AuthButton =  withRouter(({history}) => (
    <a className='pointer' onClick={() => {
        localStorage.removeItem('adminToken');
        return history.push('/login')
    }}>LOG OUT</a>
));

export const getToken = () => {
    return fetch(TOKEN_URL, {
        method: GET
    })
}
