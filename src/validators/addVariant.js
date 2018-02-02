const validate = values => {
    const errors = {};

    if (!values.variantName) {
        errors.variantName = 'Required'
    }
    if (!values.variantImagePath) {
        errors.variantImagePath = 'Required'
    }
    if (!values.variantPrice) {
        errors.variantPrice = 'Required'
    }
    if (!values.variantStatus) {
        errors.variantStatus = 'Required'
    }
    if (values.variantPrice && !values.variantPrice.match(/^[0-9]*$/) ) {
        errors.variantPrice = 'Must be numberic'
    }

    return errors
}

export default validate