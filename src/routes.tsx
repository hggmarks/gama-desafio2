import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Cart from "./view/Cart";
import Home from "./view/Home";

const Routes: React.FC = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/cart" component={Cart}  />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;