import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter,
  Routes
} from "react-router-dom";
import Form from "./Form";
import Home from "./Home";
 
class App extends Component {
  render() {
    return (
    <HashRouter>
      <div className="components">
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/contact" element={<Form/>}/>
        </Routes>
      </div>
    </HashRouter>
    );
  }
}
 
export default App;
