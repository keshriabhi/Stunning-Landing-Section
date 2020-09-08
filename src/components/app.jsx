import React, { Component } from "react";
import ReactDom from "react-dom";
import Navbar from "./navbar";
import MainItem from "./MainItem";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <MainItem />
      </React.Fragment>
    );
  }
}

export default App;
