const validate = values => {
    const errors = {}
    if (!values.name) {
        errors.name = 'Required'
    }
    if (!values.path) {
        errors.path = 'Required'
    }
    if (!values.description) {
        errors.description = 'Required'
    }
    if (!values.price) {
        errors.price = 'Required'
    }
    if (!values.quantity) {
        errors.quantity = 'Required'
    }
    if (values.price && !values.price.match(/^[0-9]*$/) ) {
        errors.price = 'Must be numberic'
    }
    if (values.quantity && !values.quantity.match(/^[0-9]*$/) ) {
        errors.quantity = 'Must be numberic'
    }
    // if (values.path && !values.path.match(/^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/)) {
    //     errors.path = 'Enter valid url'
    // }


    // if (values.emailsignup && !values.emailsignup.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
    //     errors.emailsignup = 'Email is not valid'
    // }
// ///^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/
// //     if(values.passwordsignup && values.passwordsignup.length < 6) {
// //         errors.passwordsignup = 'Must contain 6 characters'
// //     }
//     if (values.passwordsignup && !values.passwordsignup.match(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/)) {
//         errors.passwordsignup = 'Please much the requested format'
//     }
//     if(values.passwordsignup_confirm  && values.passwordsignup !== values.passwordsignup_confirm) {
//         errors.passwordsignup_confirm = 'Passwords do not much'
//     }
    return errors
}

export default validate