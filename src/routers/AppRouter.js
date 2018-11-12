import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Navbar from '../components/Navbar'
import HomePage from '../pages/homePage/index';
import SecondPage from '../pages/secondPage/index';
import Error404 from '../pages/error404/index';

const AppRouter = () => {
    return (
        <BrowserRouter>
        <div>
            <Navbar />
            <Switch>
                <Route path="/" component={HomePage} exact={true} />
                <Route path="/second" component={SecondPage} />
                <Route component={Error404} exact={true} />
            </Switch>
        </div>
    </BrowserRouter>
    );
}
 
export default AppRouter;
