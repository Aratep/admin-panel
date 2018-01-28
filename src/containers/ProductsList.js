import { connect } from 'react-redux';

import ProductsList from '../components/products/ProductsList';

const mapStateToProps = (state) => ({
    products: state.products,
    count: state.count
});

const ProductsListContainer = connect(
    mapStateToProps
)(ProductsList)

export default ProductsListContainer