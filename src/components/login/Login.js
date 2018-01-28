import React, {Component} from 'react';
import {reset} from 'redux-form';
import {Redirect} from 'react-router-dom';

import LoginTemplate from './LoginTemplate';
import {adminLogin} from '../../services/products-service';

class Login extends Component {
    constructor() {
        super();

        this.state = {
            loginStatus: '',
            redirectToReferrer: false
        }
    }

    handleSubmit = (values, dispatch) => {
        const {from} = this.props.location.state || {from: {pathname: '/products/products-list'}};
        // console.log(values)
        adminLogin(JSON.stringify(values))
            .then(response => {
                if (response.status === 200) {
                    dispatch(reset('login'));
                    this.setState({
                        loginStatus: '',
                        redirectToReferrer: true
                    })
                    // if(this.state.redirectToReferrer === true) {
                    //     return <Redirect to={from} />
                    // }
                }
                return response.json()
            })
            .then(body => {
                this.setState({
                    loginStatus: body.message,
                });
                localStorage.setItem('adminToken', body.token);
                console.log(body)
            })
            .catch(err => {
                this.setState({
                    loginStatus: 'Server is no available. Please try later!',
                });
                console.log(err)
            });
        this.setState({
            loginStatus: '',
        })
    }

    render() {
        const {loginStatus, redirectToReferrer} = this.state;
        const {from} = this.props.location.state || {from: {pathname: '/products/products-list'}};

        return (
            <LoginTemplate
                onSubmit={this.handleSubmit}
                loginStatus={loginStatus}
                redirectToReferrer={redirectToReferrer}
                from={from}
            />
        );
    }
}

export default Login;