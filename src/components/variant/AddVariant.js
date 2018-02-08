import React, {Component} from 'react';
import {reset} from 'redux-form';

import AddVariantTemplate from "./AddVariantTemplate";
import {addNewVariant} from '../../services/products-service';
import {getToken} from "../../services/auth-service";

class AddVariant extends Component {
    constructor() {
        super();

        this.state = {
            token: null,
            idAdded: false
        }
    }

    componentDidMount() {
        this.getApiToken();
    }

    getApiToken = () => {
        getToken()
            .then(response => response.json())
            .then(body => this.setState({token: body.token}))
            .catch(err => console.log(err));
    }

    handleSubmit = (values, dispatch) => {
        const id = this.props.match.params.id;
        const {token} = this.state;

        addNewVariant(JSON.stringify({values, id, token}))
            .then(response => {
                console.log(response)
                if(response.status === 200) {
                    dispatch(reset('addVariant'));
                }

                if (response.status === 200) {
                    dispatch(reset('addVariant'));
                    setTimeout(() => {
                        this.setState({
                            isAdded: true
                        })
                    }, 150)
                }
                return response.json()
            })
            .then(body => {
                console.log(body)
            })
            .catch(err => {
                console.log(err)
            });
    }

    render() {
        const {isAdded} = this.state;

        return (
            <div>
                <AddVariantTemplate
                    onSubmit={this.handleSubmit}
                    isAdded={isAdded}
                />
            </div>
        )
    }
}

export default AddVariant