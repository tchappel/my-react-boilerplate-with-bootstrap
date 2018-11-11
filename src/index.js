import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route,  } from 'react-router-dom';
import './styles/styles.scss';

class App extends Component {
    state = {  }
    render() { 
        return (
            <div>
                <h1>Hello World!</h1>
            </div>            
        );
    }
}

const Error404 = () => {
    return (
        <div>Error 404 <br/> Page not found</div>
    );
}
 
const routes = (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={App} exact={true} />
        <Route component={Error404} exact={true} />
      </Switch>
    </BrowserRouter>
);


ReactDOM.render(routes, document.getElementById('app'));