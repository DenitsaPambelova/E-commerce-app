import React from 'react';
import {Switch, Route} from 'react-router-dom';
import DetailProduct from './DetailProduct/DetailProduct'
import Products from './products/Products';
import Login from'./auth/Login';
import Register from './auth/Register'
import Cart from './cart/Cart';
import NotFound from "./utils/NotFound";

function Pages(props) {
    return (
        <Switch>
            <Route path="/" exact component={Products} />
            <Route path="/detail/:id" exact component={DetailProduct} />
            <Route path="/login" exact component={Login} />
            <Route path="/register" exact component={Register} />
            <Route path="/cart" exact component={Cart} />
            <Route path="*" exact component={NotFound} />
        </Switch>
    );
}

export default Pages;