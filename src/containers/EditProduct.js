import { connect } from 'react-redux';

import EditProduct from '../components/products/EditProduct';

const mapStateToProps = (state) => ({
    product: state.product
})

const EditProductContainer = connect(
    mapStateToProps
)(EditProduct)

export default EditProductContainer