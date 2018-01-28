import React from 'react';
import {Route, Switch} from 'react-router-dom';

import {PrivateRoute} from './PrivateRouter';
import Dashboard from '../components/dashboard/Dashboard';
import Products from '../components/products/Products';
import Login from '../components/login/Login';
// import SingleProductContainer from '../containers/SingleProduct';
// import ProductsList from '../components/products/ProductsList';
import {NoMatch} from '../components/no-match/NoMatch';

export const AppRouting = () => (
    <div>
        <Switch>
            <PrivateRoute exact path="/" component={Dashboard}/>
            {/*<Route path="/products" component={Products}/>*/}
            <PrivateRoute path="/products" component={Products}/>
            <Route path="/login" component={Login}/>
            {/*<PrivateRoute exact path="/product/:id" component={SingleProductContainer}/>*/}
            {/*<Route path="/products-list" component={ProductsList}/>*/}
            {/*<Route path="/add-new-product" component={AddNewProduct}/>*/}
            {/*<PrivateRoute exact path="/update-user-data/:id" component={UpdateUserContainer}/>*/}
            {/*<PrivateRoute exact path="/remove-user/:id" component={RemoveUser}/>*/}
            <Route component={NoMatch}/>
        </Switch>
    </div>
)
