import React, { Component } from "react";
 import { NavLink } from "react-router-dom";
class Home extends Component {
  render() {
    return (
    <nav class="navbar navbar-expand-md fixed-top navbar-dark bg-light">
        <NavLink class="navbar-brand text-info" id="home" exact to="/">Home</NavLink>
        <div className="collapse navbar-collapse" id="rest">
            <ul className="navbar-nav">
            <li className="nav-item" id="rest-li">
                <NavLink className="nav-link" id="rest-text" to="/contact">Contact</NavLink>
            </li>
            <li class="nav-item" id="rest-li">
                <NavLink className="nav-link" id="rest-text" to="#">Projects</NavLink>
            </li>
            </ul>
        </div>
    </nav>
    );
  }
}
 
export default Home;