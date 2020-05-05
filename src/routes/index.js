import { Switch } from 'react-router-dom';
import React from 'react';
import Route from './Route';

import SignIn from '~/pages/SignIn';
import SignUp from '~/pages/SignUp';

import Dashboard from '~/pages/Dashboard';
import Profile from '~/pages/Profile';
import Characters from '~/pages/Characters';
import NotFound from '~/pages/NotFound';

export default function Routes() {
    return (
        <Switch>
            <Route path="/" exact component={SignIn} />
            <Route path="/register" component={SignUp} />
            <Route path="/dashboard" component={Dashboard} isPrivate />
            <Route path="/profile" component={Profile} isPrivate />
            <Route path="/characters" component={Characters} isPrivate />
            <Route path="/" component={NotFound} />
        </Switch>
    );
}
