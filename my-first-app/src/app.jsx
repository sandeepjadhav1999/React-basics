import React, { Component } from "react";
import {BrowserRouter ,Routes, Route, Router} from 'react-router-dom'
import NavBar from "./navBar";
import ShoppingCart from "./ShoppingCart";
import Dashboard from "./dashBoard";
import CustomerList from "./customerList";
import Login from "./login";
import NoMatch from "./noMatch";
import { createBrowserHistory } from "@remix-run/router";

const history = createBrowserHistory()

class App extends Component{
    render(){
        return(
            <Router history={history}>
                <NavBar/>
                <Routes>
                    <Route path="/" element={<Login/>}/>
                    <Route path="dashboard" element={<Dashboard/>}/>
                    <Route path="customer" element={<CustomerList/>}/>
                    <Route path="cart" element={<ShoppingCart/>}/>
                    <Route path="*" element={<NoMatch/>}/>
                </Routes>
            </Router>
        )
    }
}

export default App