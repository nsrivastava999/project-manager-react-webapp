import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from './components/layout/navbar';
// import {Switch,Route} from 'react-router-dom';
import Dashboard from './components/dashboard/dashboard'
import ProjectDetails from './components/projects/projectdetails';
import Signin from './components/auth/signin';
import Signup from './components/auth/signup';
import CreateProject from './components/projects/createproject';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route path="/project/:id" component={ProjectDetails}/>
        <Route path="/signin" component={Signin} />
        <Route path="/signup" component={Signup} />
        <Route path="/create" component={CreateProject} />
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
