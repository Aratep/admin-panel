import React, {Component} from 'react';
// import {Link, Redirect} from 'react-router-dom';
import {reduxForm, Field} from 'redux-form';

// import Loading from '../loading/Loading';
import {renderField, selectField} from "../../tag-creator/TagCreator";
// import validate from '../../validators/updateItem';
import {OPTIONS} from "../../constants/constants";

class VariantTemplate extends Component {
    render() {
        // let {product, handleSubmit, updateStatus, edited} = this.props;
        //
        // if (product.length < 0) {
        //     return (
        //         <Loading/>
        //     )
        // }
        //
        // console.log(product);

        return (
            <div>
                <div>
                    <Field
                        tagName='input'
                        className="field-size"
                        name="variantImgPath"
                        id='variantImgPath'
                        type="url"
                        htmlFor='variantImgPath'
                        placeholder="http://domain/products/prod-url"
                        label='Variant Image Path'
                        component={renderField}
                    />
                </div>
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
                <br/>
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
            </div>
        )
    }
}

export default reduxForm({
    form: 'variant',
    // validate,
    // initialValues: {
    //     name: 'watch',
    //     path: '',
    //     description: 'some description',
    //     price: 12,
    //     quantity: 12,
    //     status: 'Aactive',
    //
    // }
})(VariantTemplate)
//
// setTimeout(() => {
//     this.props.navigation.navigate("NewGame");
// }, 150);