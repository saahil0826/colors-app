import React, { Component } from "react";
import ColorBox from "./ColorBox.js";
import '../Palette.css'


class Palette extends Component {
  render() {
    const colorBoxes = this.props.colors.map(c => (
      <ColorBox background={c.color} name={c.name} />
    ));
    return (
      <div className="Palette">
      <div className='Palette-colors'>{colorBoxes}</div>
      </div>
    );
  }
}

export default Palette;
