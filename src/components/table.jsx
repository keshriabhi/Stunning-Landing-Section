import React, { Component } from "react";
import tickgray from "./Stunning-Project/tick-gray.png";
import tickblue from "./Stunning-Project/tick-blue.png";
import userblue from "./Stunning-Project/user-blue.png";
import userorange from "./Stunning-Project/user-orange.png";
import userpink from "./Stunning-Project/user-pink.png";
import userred from "./Stunning-Project/user-red.png";
import "./table.css";

class table extends Component {
  render() {
    return (
      <div className="table-wrapper">
        <table>
          <tr>
            <td>
              <img src={tickgray} />
            </td>
            <td>
              <p>Dmm design</p>
            </td>
            <td>
              <img src={userpink} />
            </td>
            <td>
              <p>20 Dec</p>
            </td>
            <td>
              <button className="status-button1"></button>
            </td>
          </tr>
          <tr className="active-row">
            <td>
              <img src={tickblue} />
            </td>
            <td>
              <p>Blurr animation</p>
            </td>
            <td>
              <img src={userorange} />
            </td>
            <td>
              <p>22 Dec</p>
            </td>
            <td>
              <button className="status-button2"></button>
            </td>
          </tr>
          <tr>
            <td>
              <img src={tickgray} />
            </td>
            <td>
              <p>Illustration</p>
            </td>
            <td>
              <img src={userblue} />
            </td>
            <td>
              <p>26 Dec</p>
            </td>
            <td>
              <button className="status-button3"></button>
            </td>
          </tr>
          <tr>
            <td>
              <img src={tickgray} />
            </td>
            <td>
              <p>Refunds</p>
            </td>
            <td>
              <img src={userred} />
            </td>
            <td>
              <p>28 Dec</p>
            </td>
            <td>
              <button className="status-button4"></button>
            </td>
          </tr>
        </table>
      </div>
    );
  }
}

export default table;
