import React from 'react';
import {Route, Switch} from 'react-router-dom';

// import {PrivateRoute} from './PrivateRoute';
import AddNewProduct from '../components/products/AddNewProduct';
import ProductsListContainer from '../containers/ProductsList';
import EditProductContainer from '../containers/EditProduct';
import AddVariant from '../components/variant/AddVariant';

export const ProductsRouting = () => (
    <div>
        <Switch>
            {/*<Route path='/' component={ProductsList}/>*/}
            <Route path="/products/products-list" component={ProductsListContainer}/>
            <Route path="/products/add-new-product" component={AddNewProduct}/>
            <Route exact path="/products/product/:id" component={EditProductContainer}/>
            <Route exact path="/products/product/add-variants/:id" component={AddVariant}/>

            {/*<Route component={NoMatch}/>*/}
        </Switch>
    </div>
)
