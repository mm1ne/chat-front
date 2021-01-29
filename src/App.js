import React, { useState }  from 'react';
import './App.css';
import Auth from './Screens/Auth'
import SignUp from './Screens/SignUp'
import Navigation from "./Components/navbar";
import Dialogs from "./Screens/Dialogs";
import { connect } from 'react-redux'
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";


function App(props) {

  const iAuth = props.Auth

  return (
    <BrowserRouter>
    <div className="Container">
      <Navigation UserName={iAuth.userName} />

      {!iAuth.isAuth ? 
      <Switch>
        <Route exact path="/" component={Auth} />
        <Route path="/signup" component={SignUp} />
      </Switch> : 
       <Route exact path="" component={Dialogs} />
      }
     
    </div>
    </BrowserRouter>
  );
}

export default connect(state => ({
  Auth: state.Auths,
}))(App);

