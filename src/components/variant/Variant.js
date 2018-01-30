import React, {Component} from 'react';
// import {Link, Redirect} from 'react-router-dom';
import {Field} from 'redux-form';

import VariantTemplate from './VariantTemplate';
import {renderField, selectField} from "../../tag-creator/TagCreator";
// import validate from '../../validators/updateItem';
import {OPTIONS} from "../../constants/constants";
import {addVariantForm, removeVariantForm} from '../../actions/index';

class Variant extends Component {
    addVariantForm = (node) => {
        const {dispatch} = this.props;

        dispatch(addVariantForm(node));
    }

    removeVariantForm = (id) => {
        const {dispatch} = this.props;

        dispatch(removeVariantForm(id));
    }

    render() {
        // let {product, handleSubmit, updateStatus, edited} = this.props;
        //
        // if (product.length < 0) {
        //     return (
        //         <Loading/>
        //     )
        // }
        //
        const {variantForm} = this.props;
        console.log(variantForm);

        return (
            <div>
                <div>
                    <Field
                        tagName='input'
                        name="variantImagePath"
                        id='variantImagePath'
                        className='field-size'
                        type="text"
                        htmlFor='variantImagePath'
                        placeholder='Variant Image Path'
                        label='Variant Image Path'
                        component={renderField}
                    />
                </div>
                <br/>
                <div>
                    <Field
                        tagName='input'
                        name="variantName"
                        id='variantName'
                        className='field-size'
                        type="text"
                        htmlFor='variantName'
                        placeholder='Variant Name'
                        label='Variant Name'
                        component={renderField}
                    />
                </div>
                <br />
                <div>
                    <Field
                        tagName='input'
                        className="field-size"
                        name="variantPrice"
                        id='variantPrice'
                        type="text"
                        htmlFor='variantPrice'
                        placeholder='Variant Price'
                        label='Variant Price'
                        component={renderField}
                    />
                </div>
                <br/>
                <div>
                    <Field
                        tagName='select'
                        className="field-size"
                        name="variantStatus"
                        id='variantStatus'
                        options={OPTIONS}
                        label='Variant Status'
                        component={selectField}
                    />
                    <br/>
                </div>
                <div>
                    {
                        variantForm.map((form, index) => {
                            return <div key={index}>
                                <VariantTemplate  {...form} />
                                <a className='btn btn-danger'
                                    onClick={this.removeVariantForm.bind(this, form.id)}>
                                    Remove
                                </a>
                            </div>
                        })
                    }
                </div>
                <div>
                    <a className='btn btn-success'
                        onClick={this.addVariantForm.bind(this, <VariantTemplate/>)}>
                        More Variant
                    </a>
                </div><br />

            </div>
        )
    }
}

export default Variant
