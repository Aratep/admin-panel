import React, {Component} from 'react';
import {reset} from 'redux-form';

import AddNewProductTemplate from './AddNewProductTemplate';
import {createProduct} from '../../services/products-service';
import {getToken} from '../../services/auth-service';

class AddNewProduct extends Component {
    constructor() {
        super();

        this.state = {
            token: '',
            addStatus: '',
            isAdded: false,
            hasEmail: false
        }
    }

    componentDidMount = () => {
        this.getApiToken();
    }

    getApiToken = () => {
        getToken()
            .then(response => {
                return response.json()
            })
            .then(body => {
                this.setState({token: body.token})
            })
            .catch(err => {
                console.log(err)
            });
    }

    handleSubmit = (values, dispatch) => {
        const {token} = this.state;
        console.log(values);

        createProduct(JSON.stringify({values, token}))
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
