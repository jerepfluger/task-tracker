import React from "react";
import {Route, Switch} from "react-router-dom";
import LoginComponent from "../components/login/loginComponent";
import Home from "../components/home";
import RegisterComponent from "../components/register/registerComponent";

const routes = [
    {
        path: '/login',
        component: LoginComponent,
    },
    {
        path: '/register',
        component: RegisterComponent,
    },
    {
        path: '/',
        component: Home,
    }
]


class Routes extends React.Component {
    render() {
        const routeComponents = routes.map(({path, component}, key) =>
            <Route path={path} component={component} key={key}/>)

        return (
            <Switch>
                {routeComponents}
            </Switch>
        );
    }
}

export default Routes;
