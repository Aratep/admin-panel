import React, {Component} from 'react';
import jwt from 'jsonwebtoken';
import ReactLoading from 'react-loading';
import {Link} from 'react-router-dom';

import {getAllUsers} from '../../services/users-service';
import {allUsers} from '../../actions/index';

class Users extends Component {
    componentDidMount() {
        const {dispatch} = this.props;

        getAllUsers()
            .then(response => {
                return response.json()
            })
            .then(body => {
                if (body.token) {
                    jwt.verify(body.token, 'secret_key', (err, users) => {
                        if (err) console.log(err);
                        dispatch(allUsers(users.users, users.countOfUsers))
                    })
                }
            })
            .catch(err => {
                console.log(err)
            });
    }


    render() {
        const {users} = this.props;

        if (users.length <= 0) {
            return <ReactLoading color='black'/>
        }

        return (
            <div className="">
                <h3>
                    All Users ({users.count})
                </h3>
                <table className="table">
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Registered</th>
                        <th>User's Cart</th>
                    </tr>
                    </thead>

                    {Object.values(users).map(users => (
                        Object.values(users).map((user, index) => {
                            return <tbody key={index}>
                            <tr>
                                <td>{index + 1}</td>
                                <td>{user.username}</td>
                                <td>{user.email}</td>
                                <td>{user.created}</td>
                                <td>
                                    <Link to={`/user-cart/${user._id}`} className="btn btn-success">
                                        Cart
                                    </Link>
                                </td>
                            </tr>
                            </tbody>
                        })
                    ))}
                </table>
            </div>
        );
    }
}

export default Users;
