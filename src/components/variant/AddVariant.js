import React, {Component} from 'react';
import {reset} from 'redux-form';

import AddVariantTemplate from "./AddVariantTemplate";
import {addNewVariant} from '../../services/products-service';
import {singleProduct} from '../../actions/index';
import {getToken} from "../../services/auth-service";

class AddVariant extends Component {
    constructor() {
        super();

        this.state = {
            token: null,
            updateStatus: '',
            edited: false
        }
    }

    componentDidMount() {
        this.getApiToken();
        // let product;
        // const {dispatch} = this.props;
        //
        // getAllProducts()
        //     .then(response => {
        //         return response.json()
        //     })
        //     .then(body => {
        //         // console.log(body);
        //         product = body.products.filter(prod => prod._id === this.props.match.params.id);
        //         // console.log(product);
        //         dispatch(singleProduct(product))
        //     })
        //     .catch(err => {
        //         console.log(err)
        //     });
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
        const id = this.props.match.params.id;
        console.log(id)
        const {token} = this.state;
        console.log(values)
        addNewVariant(JSON.stringify({values, id, token}))
            .then(response => {
                console.log(response)
                // if (response.status === 200) {
                //     dispatch(reset('updateItem'));
                //     this.setState({
                //         updateStatus: '',
                //         edited: true
                //     })
                //
                // }
                return response.json()
            })
            .then(body => {
                console.log(body)
                // this.setState ({
                //     updateStatus: body.message
                // })
            })
            .catch(err => {
                // this.setState({
                //     updateStatus: 'Server is no available. Please try later!'
                // })
                console.log(err)
            });
        // this.setState({
        //     updateStatus: '',
        // })
    }

    render() {
        // const {product} = this.props;
        // const {updateStatus, edited} = this.state;
        // console.log(product)

        return (
            <div>
                <AddVariantTemplate
                    onSubmit={this.handleSubmit}
                    // product={product}
                    // updateStatus={updateStatus}
                    // edited={edited}
                />
            </div>
        )
    }
}

export default AddVariant