import React, {Component} from 'react';
import {Link, Redirect} from 'react-router-dom';
import {reduxForm, Field} from 'redux-form';

import {renderField, selectField} from "../../tag-creator/TagCreator";
import validate from '../../validators/addVariant';
import {OPTIONS} from '../../constants/constants';

class AddVariantTemplate extends Component {
    render() {
        let {handleSubmit, isAdded} = this.props;

        return (
            <div>
                <form onSubmit={handleSubmit}>
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
                    <p className="">
                        <input type="submit" value="Add Variant" className='btn btn-primary'/>
                    </p>
                </form>
                {
                    isAdded === true && <Redirect to={`/products/products-list`}/>
                }
                <Link to='/products/products-list'>Back</Link>
            </div>
        )
    }
}

export default reduxForm({
    form: 'addVariant',
    validate,
})(AddVariantTemplate)
