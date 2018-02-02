import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';
import {Redirect} from 'react-router-dom';

import {renderField} from '../../tag-creator/TagCreator';
import validate from '../../validators/admin';

class LoginTemplate extends Component {
    render() {
        const {handleSubmit, loginStatus, redirectToReferrer} = this.props;

        return (
            <div className="container">
                <div className="custom-row">
                    <div className="col-md-offset-5 col-md-3">
                        <div className="form-login">
                            <form onSubmit={handleSubmit}>
                                <h4>Welcome back.</h4>
                                <p className='validation-error'>
                                    {loginStatus}
                                </p>
                                <div>
                                    <Field
                                        tagName='input'
                                        name="username"
                                        id='username'
                                        className='form-control input-sm chat-input field-size font-size'
                                        type="text"
                                        htmlFor='username'
                                        placeholder="username"
                                        label='username'
                                        component={renderField}
                                    />
                                </div>
                                <br/>
                                <div>
                                    <Field
                                        tagName='input'
                                        name="password"
                                        id='password'
                                        className='form-control input-sm chat-input field-size font-size'
                                        type="password"
                                        htmlFor='password'
                                        placeholder="password"
                                        label='password'
                                        component={renderField}
                                    />
                                </div>
                                <br/>
                                <div className="wrapper">
                                    <span className="group-btn">
                                        <input className="btn  btn-md" type="submit" value="Login"/>
                                    </span>
                                </div>
                            </form>
                        </div>
                        {
                            redirectToReferrer && <Redirect to='/products/products-list'/>
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default reduxForm({
    form: 'login',
    validate,
})(LoginTemplate)

