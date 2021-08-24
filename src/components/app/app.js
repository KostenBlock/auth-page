import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "../../pages/home";
import ProfilePage from "../../pages/profile";

const App = () => {
    return (
        <Switch>
            <Route
                path="/"
                component={HomePage}
                exact
            />
            <Route
                path="/profile"
                component={ProfilePage}
            />
        </Switch>
    )
};

export default App;