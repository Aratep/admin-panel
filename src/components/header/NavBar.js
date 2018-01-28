import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import {AuthButton} from '../../services/auth-service'

class NavBar extends Component {
    render() {
        const adminToken = localStorage.getItem('adminToken');

        return (
            <div>
                <nav className="w3-sidebar w3-bar-block w3-small w3-hide-small w3-center">
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNlHzQo3Ad8ajS7OR4E6W32AKivTA3y_EvNitcAcXGQ668mgQB"
                        alt='shoping-nkar'
                        style={{width: 100 + '%'}}/>
                    <Link to="/" className="w3-bar-item w3-button w3-padding-large">
                        <i className="fa fa-home w3-xxlarge"/>
                        <p>DASHBOARD</p>
                    </Link>
                    <Link to="/products" className="w3-bar-item w3-button w3-padding-large">
                        <i className="fa fa-product-hunt w3-xxlarge"/>
                        <p>PRODUCTS</p>
                    </Link>
                    <Link to="/users" className="w3-bar-item w3-button w3-padding-large">
                        <i className="fa fa-user-circle w3-xxlarge"/>
                        <p>USERS</p>
                    </Link>
                    {
                        adminToken && <div className="w3-bar-item w3-button w3-padding-large">
                            <i className="fa fa-sign-out w3-xxlarge"/>
                            <p><AuthButton/></p>
                        </div>
                    }

                </nav>
                <div className="w3-top w3-hide-large w3-hide-medium" id="myNavbar">
                    <div className="w3-bar w3-black w3-opacity w3-hover-opacity-off w3-center w3-small">
                        <Link to='/' className="w3-bar-item w3-button"
                              style={{width: 25 + '% !important'}}>DASHBOARD</Link>
                        <Link to='/products' className="w3-bar-item w3-button"
                              style={{width: 25 + '% !important'}}>PRODUCTS</Link>
                        <Link to='/users' className="w3-bar-item w3-button"
                              style={{width: 25 + '% !important'}}>USERS</Link>
                        {
                            adminToken && <div className="w3-bar-item w3-button w3-padding-large">
                                {/*<i className="fa fa-sign-out w3-xxlarge"/>*/}
                                <p><AuthButton/></p>
                            </div>
                        }
                    </div>
                </div>
            </div>

        );
    }
}

export default NavBar;
