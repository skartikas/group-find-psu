import React from "react";
import "./index.css";
import { Switch, Route } from "react-router-dom";
// import Header from './Components/Header';
import Home from "./components/Home";
import Login from "./components/Login";
import SignUp from "./components/SignUp";

function App() {
    return (
        <>
            <Switch>
                <Route path="/" exact>
                    <Home />
                </Route>
                <Route path="/login">
                    <Login />
                </Route>
                <Route path="/register">
                    <SignUp />
                </Route>
            </Switch>
        </>
    );
}

export default App;
