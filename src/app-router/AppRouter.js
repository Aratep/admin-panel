import React from 'react';
import {Route, Switch} from 'react-router-dom';

import {PrivateRoute} from './PrivateRouter';
import Dashboard from '../components/dashboard/Dashboard';
import Products from '../components/products/Products';
import Login from '../components/login/Login';
import Users from '../components/users/Users';
import {NoMatch} from '../components/no-match/NoMatch';

export const AppRouting = () => (
    <div>
        <Switch>
            <PrivateRoute exact path="/" component={Dashboard}/>
            <PrivateRoute path="/products" component={Products}/>
            <PrivateRoute path="/users" component={Users}/>
            <Route path="/login" component={Login}/>
            <Route component={NoMatch}/>
        </Switch>
    </div>
)
