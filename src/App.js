import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar';
import User from './components/User';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
        <Route path="/">
         </Route>
        </Switch>
     </Router>
     <div><User /></div>
    </>
  );
}

export default App;
