import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import img from "./portrait.jpg"
 
class Home extends Component {
  render() {
    return (
  <body>
    <nav class="navbar navbar-expand-md fixed-top navbar-dark bg-light">
        <NavLink class="navbar-brand text-info" id="home" style={{textDecoration: 'none'}} to="/">Home</NavLink>
        <div className="collapse navbar-collapse" id="rest">
            <ul className="navbar-nav">
            <li className="nav-item" id="rest-li">
                <NavLink className="nav-link" id="rest-text" style={{textDecoration: 'none'}} to="/contact">Contact</NavLink>
            </li>
            <li class="nav-item" id="rest-li">
                <NavLink className="nav-link" id="rest-text" style={{textDecoration: 'none'}} to="#">Projects</NavLink>
            </li>
            </ul>
        </div>
    </nav>
    <div>
      <h1 id="main_h1">Witaj na moim portfolio!</h1>
      <img src={img} alt="Portrait"/>
    </div>
  </body>
    );
  }
}
 
export default Home;