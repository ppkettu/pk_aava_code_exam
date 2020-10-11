import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../components/Home";
import Details from "../components/Deltails";

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/details/:id">
                    <Details />
                </Route>
            </Switch>
        </Router>
    )
};

export default Routes;
