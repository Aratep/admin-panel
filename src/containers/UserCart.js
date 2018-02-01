import { connect } from 'react-redux';

import UserCart from '../components/user-cart/UserCart';

const mapStateToProps = (state) => ({
    userProducts: state.userProducts
});

const UserCartContainer = connect(
    mapStateToProps
)(UserCart);

export default UserCartContainer