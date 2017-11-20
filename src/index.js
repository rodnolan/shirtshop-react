import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
//import { Router } from 'react-router';
import { BrowserRouter, Route } from 'react-router-dom';

import ShirtList from './components/ShirtList/ShirtList';
import Config from './components/Config/Config';
import Cart from './components/Cart/Cart';

ReactDOM.render(
    <BrowserRouter>
        <Route path="/" component={App}>
            <Route path="/" component={ShirtList} />
            <Route path="config" component={Config} />
            <Route path="cart" component={Cart} />
        </Route>
    </BrowserRouter>, document.getElementById('root')
);

registerServiceWorker();


