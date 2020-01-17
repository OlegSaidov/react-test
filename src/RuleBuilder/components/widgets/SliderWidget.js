import React from 'react'
import PropTypes from 'prop-types'

export const SliderWidget = props =>{


  return (
  <div>
  <input
    autoFocus={props.delta === 0}
    size='3'
    type='text'
    value={props.value}
    onChange={event => props.setValue(event.target.value)}
  />
  <input type="range"
   name='rangeInput'
   className = 'slider'
   min='0' max='100' 
   onChange={"updateTextInput(this.value);"}>
   </input>
  </div>
)
  }

SliderWidget.propTypes = {
  delta: PropTypes.number,
  value: PropTypes.any,
  setValue: PropTypes.func
}




{/* <input type="range" name="rangeInput" min="0" max="100" onchange="updateTextInput(this.value);">
<input type="text" id="textInput" value=""></input> */}