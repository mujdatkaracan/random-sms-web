import React from 'react'
import { Route, Switch } from 'react-router-dom';
import { SendMessage } from '../pages/SendMessage';

const routes = [
    {
        path: '/',
        component: SendMessage
    }
]

export const Routes = () => {
    return (
        <div>
            <Switch>
                {routes.map((route, index) => <Route path={route.path} component={route.component} />)}
            </Switch>
        </div>
    );
};