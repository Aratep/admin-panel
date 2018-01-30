import { connect } from 'react-redux';

import Variant from '../components/variant/Variant';

const mapStateToProps = (state) => ({
    variantForm: state.variantForm,
});

const VariantFormContainer = connect(
    mapStateToProps
)(Variant)

export default VariantFormContainer