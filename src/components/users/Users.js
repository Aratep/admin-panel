import React, {Component} from 'react';
import jwt from 'jsonwebtoken';

import {getAllUsers} from '../../services/users-service';

class Users extends Component {
    constructor() {
        super();


    }

    componentDidMount() {
        // const {dispatch} = this.props;

        getAllUsers()
            .then(response => {
                // console.log(response);
                return response.json()
            })
            .then(body => {
                // console.log(body)
                if (body.token) {
                    jwt.verify(body.token, 'secret_key', (err, users) => {
                        if (err) console.log(err);
                        console.log(users)
                        // dispatch(allUsers(decoded.users, decoded.countOfUsers))
                    })
                }
            })
            .catch(err => {
                console.log(err)
            });
        // setTimeout(function () {
        //     localStorage.removeItem('_token');
        //     return <Redirect to='/login' />
        // }, 5000);
    }



    render() {
        return (
           <div>Users</div>
        );
    }
}

export default Users;
