import React, { Component } from "react";
import arrowup from "./Stunning-Project/arrow-up.png";
import arrowdown from "./Stunning-Project/arrow-down.png";
import cover from "./Stunning-Project/landing-section-image.png";
import Table from "./table";
import "./MainItem.css";

class MainItem extends Component {
  render() {
    return (
      <main className="landing-section">
        <div className="description-part">
          <div>
            <h1>
              Stunning Workplace<span>.</span>
            </h1>
            <p>
              With Stunning, remote teams can organize projects,manage shifting
              priorities, and get work done.
            </p>
            <div className="button-arrow-wrapper">
              <button>New Account</button>
              <img src={arrowup} alt="arrow-up" className="arrow-up" />
              <img src={arrowdown} alt="arrow-down" className="arrow-down" />
            </div>
          </div>
          <img src={cover} className="landing-image-inside-div" />
          <Table />
        </div>
        <img src={cover} className="landing-image" />
      </main>
    );
  }
}

export default MainItem;
