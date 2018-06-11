import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';

import rootReducer from './reducers';

// import registerServiceWorker from './registerServiceWorker';

import './styles/app.css';
import Products from './containers/products';
import Product from './containers/product';
import Cocktails from './components/cocktails';
import Cocktail from './containers/cocktail';


const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
    <div className="header">
        Navigation
    </div>
    , document.getElementById('header')
);

ReactDOM.render(

    <Provider store={createStoreWithMiddleware(rootReducer)}>
        <BrowserRouter>
            <Switch>
                <Route path="/cocktails/:id" component={Cocktail} />
                <Route path="/cocktails" component={Cocktails} />
                <Route path="/:id" component={Product} />
                <Route path="/" component={Products} />
            </Switch>

        </BrowserRouter>
    </Provider>


    , document.getElementById('root')
);

ReactDOM.render(
    <div className="footer">
        Footer
    </div>
    , document.getElementById('footer')
);