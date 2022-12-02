import React, { Component } from "react";
 
class App extends Component {
  render() {
    return (
        <nav class="navbar navbar-expand-md fixed-top navbar-dark bg-light">
            <a class="navbar-brand text-info" id="home" href="/">Home</a>
            <div class="collapse navbar-collapse" id="rest">
                <ul class="navbar-nav">
                <li class="nav-item" id="rest-li">
                    <a class="nav-link" id="rest-text" href="/ContactMe">Contact</a>
                </li>
                <li class="nav-item" id="rest-li">
                <a class="nav-link" id="rest-text" href="#">Projects</a>
                </li>
                </ul>
            </div>
        </nav>
    );
  }
}
 
export default App;