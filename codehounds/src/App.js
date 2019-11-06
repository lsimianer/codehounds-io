import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Landing from "./pages/landing/Landing";
import Development from './pages/dev/Dev';
import ADA from './pages/ada/Ada'
import NoMatch from "./pages/NoMatch";
// import Pay from "./pages/pay/Pay";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/Development" component={Development} />
          <Route exact path="/ADA" component={ADA} />         
          {/* <Route path='/gram' component={() => window.location = 'https://www.instagram.com/br_physiques/'}/> */}
          <Route path='/CodeHounds' component={() => window.location = 'https://codehounds.io'}/>
          {/* 404 page */}
          <Route path='*' component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
