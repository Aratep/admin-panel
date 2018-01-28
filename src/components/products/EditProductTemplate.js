import React, {Component} from 'react';
import {Link, Redirect} from 'react-router-dom';
import {reduxForm, Field} from 'redux-form';

import Loading from '../loading/Loading';
import {renderField, selectField} from "../../tag-creator/TagCreator";
import validate from '../../validators/updateItem';

class EditProductTemplate extends Component {
    componentDidMount () {
        this.props.initialize({
            name: 'product name'
        });
    }
    render() {
        let {product, handleSubmit, updateStatus, edited} = this.props;

        if (product.length < 0) {
            return (
                <Loading/>
            )
        }

        console.log(product);

        return (
            <div>
                {
                    Object.values(product).map(prod => {
                        return prod.map((p, i) => {

                            return <form onSubmit={handleSubmit} key={i}>
                                <p className='validation-error'>
                                    {updateStatus}
                                </p>
                                <div>
                                    <Field
                                        tagName='input'
                                        name="name"
                                        id='name'
                                        className='field-size'
                                        type="text"
                                        htmlFor='name'
                                        placeholder={p.name}
                                        label='Product Name'
                                        component={renderField}
                                        value={p.name}
                                    />
                                </div>
                                <br/>
                                <div>
                                    <Field
                                        tagName='input'
                                        className="field-size"
                                        name="path"
                                        id='path'
                                        type="url"
                                        htmlFor='path'
                                        placeholder={p.imagePath}
                                        label='Product Image Path'
                                        component={renderField}
                                    />
                                </div>
                                <br/>
                                <div>
                                    <Field
                                        tagName='textarea'
                                        className=""
                                        name="description"
                                        id='description'
                                        type="text"
                                        htmlFor='description'
                                        placeholder={p.description}
                                        label='Product Description'
                                        rows='4'
                                        cols='50'
                                        component={renderField}
                                    />
                                </div>
                                <br/>
                                <div>
                                    <Field
                                        tagName='input'
                                        className="field-size"
                                        name="price"
                                        id='price'
                                        type="text"
                                        htmlFor='price'
                                        placeholder={p.price}
                                        label='Product Price'
                                        component={renderField}
                                    /><br/>
                                </div>
                                <div>
                                    <Field
                                        tagName='input'
                                        className="field-size"
                                        name="quantity"
                                        id='quantity'
                                        type="text"
                                        htmlFor='quantity'
                                        placeholder={p.available_quantity}
                                        label='Product Available Quantity'
                                        component={renderField}
                                    /><br/>
                                </div>
                                <div>
                                    <Field
                                        tagName='select'
                                        className="field-size"
                                        name="status"
                                        id='status'
                                        options={p.status}
                                        label='Product Status'
                                        component={selectField}
                                    />
                                    <br/>
                                </div>
                                {
                                    edited === true && <Redirect to={`/products/products-list`}/>
                                }
                                <p className="">
                                    <input type="submit" value="Update Item"/>
                                </p>
                            </form>
                        })


                    })
                }

                <Link to='/products/products-list'>Back</Link>
            </div>
        )
    }
}

export default reduxForm({
    form: 'updateItem',
    validate,
    initialValues: {
        // name: 'localStorage.getItem(name)',
        // path: localStorage.getItem('path'),
        // description: localStorage.getItem('description'),
        // price: localStorage.getItem('price'),
        // quantity: localStorage.getItem('quantity'),
        // status: localStorage.getItem('status'),

    }
})(EditProductTemplate)
//
// setTimeout(() => {
//     this.props.navigation.navigate("NewGame");
// }, 150);