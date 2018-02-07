import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import ReactLoading from 'react-loading';

import {getCartList} from '../../services/products-service';
import {userProducts} from '../../actions/index';

class UserCart extends Component {
    componentDidMount() {
        this.userCartList();
    }

    userCartList = () => {
        const {dispatch} = this.props;

        const user_id = this.props.match.params.id;

        getCartList(JSON.stringify({user_id}))
            .then(response => {
                return response.json()
            })
            .then(body => {
                console.log(body)
                //must be dispatch
                dispatch(userProducts(body.userProducts))
            })
            .catch(err => {
                console.log(err)
            });
    }

    render() {
        const {userProducts} = this.props.userProducts;

        if (userProducts === undefined) {
            return <ReactLoading color='black'/>
        }
        return (
            <div className=''>
                {
                    userProducts.length <= 0 ? <h2>Cart is Empty</h2> : <h1>User's Cart</h1>
                }
                {
                    userProducts.map((prod, index) => {

                        return <div key={index} className='box'>
                            <div>
                                <h2>{prod.name}</h2>
                                <div className=''>
                                    <img src={prod.imagePath} alt={prod.name} className='img-style'/>
                                    <div><b>Price:</b> {prod.price}</div>
                                    <div><b>Available Quantity:</b> {prod.available_quantity}</div>
                                    <div><b>Status:</b> <b>{prod.status}</b></div>
                                </div>
                            </div>
                        </div>
                    })
                }
                <div className='after-box'>
                    <Link to='/users' className='w3-button w3-black w3-round-large '>Back</Link>
                </div>
            </div>
        )
    }
}

export default UserCart