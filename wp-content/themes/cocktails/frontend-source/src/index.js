import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';

import rootReducer from './reducers';

// import registerServiceWorker from './registerServiceWorker';

import './styles/app.css';
import Landing from './containers/landing';

// const store = createStore(rootReducer);
const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(

    <div>
    <Provider store={createStoreWithMiddleware(rootReducer)}>
        <BrowserRouter>

            <Switch>
                <Route path="/" component={Landing} />
            </Switch>

        </BrowserRouter>
    </Provider>
    </div>


    , document.getElementById('root')
);