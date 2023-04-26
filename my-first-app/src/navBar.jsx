import React, { Component } from "react";
import { Link } from "react-router-dom";

class NavBar extends Component {
    render() {
        return (
            <React.Fragment>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <a className="navbar-brand" href="/">Navbar</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                            <li className="nav-item active">
                                <Link className="nav-link" to='/'>Home</Link>
                            </li>
                            <li className="nav-item active">
                                <Link className="nav-link" to="dashboard">DashBoard</Link>
                            </li>
                            <li className="nav-item active">
                                <Link className="nav-link" to='cart'>Cart</Link>
                            </li>
                            <li className="nav-item active">
                                <Link className="nav-link" to="Customer">Customer</Link>
                            </li>
                        </ul>
                        
                    </div>
                </nav>
            </React.Fragment>
        )
    }

}
export default NavBar