import React, { Component } from 'react';
import { skinny, slender, sporty, stocky, patchy, plain, spotted, striped } from "../assets";

const propertyMap = {
  backgroundColor: {
    black: '#263238',
    white: '#cfd8dc',
    green: '#a5d6a7',
    blue: '#0277bd'
  },
  build: { slender, stocky, sporty, skinny },
  pattern: { plain, striped, spotted, patchy },
  size: { small: 100, medium: 140, large: 180, enormous: 220 }
};



class DragonAvatar extends Component {

  get DragonImage() {

    const dragonPropertyMap = {};

    this.props.dragon.traits.forEach(trait => {
      const {traitType, traitValue } = trait;
    })
    const sizing = { width: 200, height: 200 };
    return (
      <div className='dragon-avatar-image-wrapper'>
        <div className='dragon-avatar-image-background' style={{ backgroundColor: propertyMap.backgroundColor.blue, ...sizing }}></div>
        <img className='dragon-avatar-image-pattern' src={propertyMap.pattern.spotted} style={{ ...sizing }}></img>
        <img className='dragon-avatar-image' src={propertyMap.build.sporty} style={{ ...sizing }}></img>
      </div>
    )
  }

  render() {

    const { generationId, dragonId, traits } = this.props.dragon;

    return (
      <div>
        <span>G{generationId}. </span>
        <span>D{dragonId}. </span>

        {traits.map(trait => trait.traitValue).join(', ')}
        {this.DragonImage}
      </div>
    )
  }
}


export default DragonAvatar;

