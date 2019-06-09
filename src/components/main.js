import React from 'react';
import Landingpage from './landingpage';
import { Switch, Route } from 'react-router-dom';

const Main = () => (
    <Switch>
        <Route exact path="/" component={Landingpage}/>
    </Switch>
)

export default Main;