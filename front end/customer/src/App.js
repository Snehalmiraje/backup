import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Login from './component/Login';
import SignUp from './component/SignUp';
import Home from './component/Home';
function App() {
  return (<Router>
    <div className="App">
    <Switch>
            <Route exact path='/' component={Login} />
            <Route path="/sign-in" component={Login} />
            <Route path="/sign-up" component={SignUp} />
            <Route path="/home" component={Home} />
        </Switch>
    </div></Router>
  );
}

export default App;