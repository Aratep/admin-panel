import React, {Component} from 'react';
import {reset} from 'redux-form';

import AddNewProductTemplate from './AddNewProductTemplate';
import {createProduct} from '../../services/products-service';
// import {addProduct} from '../../actions/index';

class AddNewProduct extends Component {
    constructor() {
        super();

        this.state = {
            addStatus: '',
            isAdded: false,
            hasEmail: false
        }
    }

    handleSubmit = (values, dispatch) => {
        // const {reset} = this.props;
        console.log(values);

        createProduct(JSON.stringify(values))
            .then(response => {
                console.log(response.status)
                if (response.status === 200) {
                    dispatch(reset('addNewProduct'));
                    this.setState({
                        addStatus: '',
                        isAdded: true
                    })
                }
                return response.json()
            })
            .then(body => {
                this.setState({
                    addStatus: body.message,
                })
                // dispatch(addProduct(product));
                console.log(body)
            })
            .catch(err => {
                this.setState({
                    addStatus: 'Server is no available. Please try later',
                })
                console.log(err)
            });
        this.setState({
            addStatus: '',
            hasEmail: true
        })
    }

    render() {
        const {addStatus, isAdded, hasEmail} = this.state;

        return (
            <AddNewProductTemplate
                onSubmit={this.handleSubmit}
                addStatus={addStatus}
                isAdded={isAdded}
                hasEmail={hasEmail}
            />
        );
    }
}

export default AddNewProduct;
