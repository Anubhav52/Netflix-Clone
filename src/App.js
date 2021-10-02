import React from 'react';
import './App.css';
import HomeScreen from '../src/screens/HomeScreen';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import ProfileScreen from './screens/ProfileScreen';

function App() {
  const user = {
    name: "anubhav",
  };
  
  return (
    <div className="App">
      <Router>
        {/* {!user ? (
          <Switch>
            <Route exact path="/" component={LoginScreen} />
            <Route exact path="/login" component= {SignupScreen} />
          </Switch>
        ) : (
          <Switch>
            <Route exact path="/browse" component= {HomeScreen} />
            <Route path="/profile" component= {ProfileScreen} /> 
            
          </Switch>
        )} */}
          <Switch>
            <Route exact path="/" component={LoginScreen}/>
            <Route exact path="/login" component= {SignupScreen} />
            <Route exact path="/profile" component= {ProfileScreen} />
            <Route exact path="/browse" component= {HomeScreen} />
          </Switch>
      </Router>
    </div>
  );
}

export default App;
