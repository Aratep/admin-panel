import React, {Component} from 'react';
import {Provider} from 'react-redux';

import './App.css';
import NavBar from './components/header/NavBar';
import {AppRouting} from './app-router/AppRouter';
// import {AdminRouting} from './app-router/AdminRouter';
import store from './store/store';

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <div>
                    {/*<AdminRouting />*/}
                    <NavBar/>
                    <div className="w3-padding-large" id="main">
                        <AppRouting/>
                    </div>
                </div>
            </Provider>
        );
    }
}

export default App;
