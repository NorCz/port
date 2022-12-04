import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Form extends Component {
  render() {
    return (
        <body>
        <nav class="navbar navbar-expand-md fixed-top navbar-dark bg-light">
        <NavLink class="navbar-brand text-info" id="home" style={{textDecoration: 'none'}} to="/">Home</NavLink>
        <div className="collapse navbar-collapse" id="rest">
            <ul className="navbar-nav">
            <li className="nav-item" id="rest-li">
                <NavLink className="nav-lin text" id="rest-text" style={{textDecoration: 'none'}} to="/contact">Contact</NavLink>
            </li>
            <li class="nav-item" id="rest-li">
                <NavLink className="nav-link text" id="rest-text" style={{textDecoration: 'none'}} to="#">Projects</NavLink>
            </li>
            </ul>
        </div>
    </nav>
        <div>
            <h1>Something</h1>
            <form>

            </form>
        </div>
        </body>
    );
  }
}
 
export default Form;
