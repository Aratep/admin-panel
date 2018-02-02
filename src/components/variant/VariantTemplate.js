import React, {Component} from 'react';
// import {Link, Redirect} from 'react-router-dom';
import {reduxForm, Field} from 'redux-form';

// import Loading from '../loading/Loading';
import {renderField, selectField} from "../../tag-creator/TagCreator";
// import validate from '../../validators/updateItem';
import {OPTIONS} from "../../constants/constants";

class VariantTemplate extends Component {
    render() {
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
                <br />
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

// export default VariantTemplate

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