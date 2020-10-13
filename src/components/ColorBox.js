import React, { Component } from "react";
// import { CopyToClipboard } from "react-copy-to-clipboard";
//
import "../ColorBox.css";

class ColorBox extends Component {
  render() {

    return (
      <div style={{ background:this.props.background }} className="ColorBox">
      <span>{this.props.name}</span>
      <span>MORE</span>
      </div>
    );
  }
}
export default ColorBox;
