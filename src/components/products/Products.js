import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import {ProductsRouting} from '../../app-router/ProductsRouter';

class Products extends Component {
    render() {
        return (
            <div>
                <div className="w3-content w3-justify w3-text-grey w3-padding-64">
                    <nav className="navbar navbar-default ">
                        <div className="container-fluid">
                            <ul className="nav navbar-nav">
                                <li><Link to='/products/products-list'>Products List</Link></li>
                                <li><Link to='/products/add-new-product'>Add New Product</Link></li>
                                {/*<li><a href="#">Page 2</a></li>*/}
                                {/*<li><a href="#">Page 3</a></li>*/}
                            </ul>
                        </div>
                    </nav>
                    <ProductsRouting/>
                </div>
            </div>
        );
    }
}

export default Products;
