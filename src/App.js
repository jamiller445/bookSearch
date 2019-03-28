import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Books from "./pages/Books";
import Nav from "./components/Nav";
import Saved from "./pages/Saved";
import { Switch } from 'react-router-dom';

function App() {
  
  return (
    <Router>
    <div>
      <Nav />
      <Books />
      <Switch>
        {/* <Route exact path="/" component={ Books }/> */}
        <Route exact path="/saved" component={Saved} />
        {/* <Route render={ () => <h1>404 Error</h1> } /> */}
      </Switch>
    </div>
    </Router>    
  );
}

export default App;
