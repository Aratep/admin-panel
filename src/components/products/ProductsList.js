import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import ReactLoading from 'react-loading';

import {getAllProducts, deleteProduct} from '../../services/products-service';
import {allProducts, removeProduct} from '../../actions/index';

class ProductsList extends Component {

    componentDidMount() {
        this.getProductsList();
    }

    getProductsList = () => {
        const {dispatch} = this.props;

        getAllProducts()
            .then((response) => {
                return response.json();
            })
            .then(products => {
                dispatch(allProducts(products.products, products.count))
            })
            .catch((err) => {
                console.log(err)
            });
    }

    deleteSingleProduct = (id) => {
        const {dispatch} = this.props;

        deleteProduct(JSON.stringify({id}))
            .then(response => {
                dispatch(removeProduct(id));
                return response.json()
            })
            .then(body => {
                console.log(body);
            })
            .catch(err => {
                console.log(err)
            });
    };

    render() {
        const {products} = this.props;

        if (products.length <= 0) {
            return <ReactLoading color='black'/>
        }
        return (
            <div className="">
                <h3>
                    All Products ({products.count})
                </h3>
                <table className="table">
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Image</th>
                        <th>Description</th>
                        <th>Price</th>
                        <th>Available Quantity</th>
                        <th>Satus</th>
                        <th>Actions</th>
                    </tr>
                    </thead>
                    {Object.values(products).map(products => (
                        Object.values(products).map((product, index) => (

                            <tbody key={index}>
                            <tr>
                                <td>{index + 1}</td>
                                <td>{product.name}</td>
                                <td><img src={product.imagePath} alt={product.name} className='img-style'/></td>
                                <td>{product.description}</td>
                                <td>${product.price}</td>
                                <td>{product.available_quantity}</td>
                                <td>{product.status}</td>
                                <td>
                                    <button className="btn btn-danger"
                                            onClick={this.deleteSingleProduct.bind(this, product._id)}>
                                        <i className="fa fa-trash-o fa-lg"/>
                                    </button>
                                    <Link to={`/products/product/${product._id}`} className="btn btn-success">
                                        <i className="fa fa-pencil fa-lg"/>
                                    </Link>
                                </td>
                            </tr>
                            </tbody>
                        ))
                    ))}
                </table>
            </div>
        );
    }
}

export default ProductsList;
