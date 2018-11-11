import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
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
 
const routes = (
    <BrowserRouter>
      <div>
        <Route path="/" component={App} exact={true} />
      </div>
    </BrowserRouter>
);
   

ReactDOM.render(routes, document.getElementById('app'));