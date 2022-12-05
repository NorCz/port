import React, { Component } from "react";
import './styles.css'

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
      <html>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/contact" element={<Form/>}/>
        </Routes>
      </html>
    </HashRouter>
    );
  }
}
 
export default App;
