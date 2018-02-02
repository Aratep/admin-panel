import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';
import {Redirect} from 'react-router-dom'

import {renderField, selectField} from '../../tag-creator/TagCreator';
import validate from '../../validators/addNewProduct';
import {OPTIONS} from '../../constants/constants';
// import Variant from '../../components/variant/Variant';
import AddVariantForm from '../../containers/AddVariantForm';

class AddNewProductTemplate extends Component {
    constructor() {
        super();

        this.state = {
            isChecked: false,
        };
    }

    toggleChange = () => {
        this.setState({
            isChecked: !this.state.isChecked,
        });
    }

    render() {
        const {handleSubmit, addStatus, isAdded} = this.props;

        return (
            <div id="" className="">
                <form onSubmit={handleSubmit}>
                    <p className='validation-error'>
                        {addStatus}
                    </p>
                    <div>
                        <Field
                            tagName='input'
                            name="name"
                            id='name'
                            className='field-size'
                            type="text"
                            htmlFor='name'
                            placeholder="Product Name"
                            label='Product Name'
                            component={renderField}
                            value='some value '
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
                            placeholder="http://domain/products/prod-url"
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
                            placeholder="Some Description"
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
                            placeholder="Product Price"
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
                            placeholder="Product Available Quantity"
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
                            options={OPTIONS}
                            label='Product Status'
                            component={selectField}
                        />
                        <br/>
                    </div>

                    <p className="">
                        <input type="submit" value="Add Item" className='btn btn-primary'/>
                    </p>
                    {
                        isAdded === true && <Redirect to={`/products/products-list`}/>
                    }
                </form>
            </div>
        );
    }
}

export default reduxForm({
    form: 'addNewProduct',
    validate,
})(AddNewProductTemplate)


