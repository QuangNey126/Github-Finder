import React, { Component } from 'react';
import "./App.css";
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';
import Home from "./Containers/Home";
import About from "./Containers/About";
import Dashboard from "./Containers/UserDetail";
import Navbar from "./Layouts/Navbar";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Navbar/>

        <div className="container">
          <Switch>
            <Route path="/" exact component={Home} />
            {/* <Route exact path="/">
              <Home />
            </Route> */}
            {/* <Route path="/" exact render={() => <Home/>} /> */}
            <Route path="/about" component={About} />
            <Route path="/users/:login" component={Dashboard} />
          </Switch>
        </div>

      </BrowserRouter>
    );
  }
}

export default App;