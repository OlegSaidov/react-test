import React from 'react'
import PropTypes from 'prop-types'

export const TextWidget = props => (
  <input
    autoFocus={props.delta === 0}
    type='text'
    value={props.value}
    onChange={event => props.setValue(event.target.value)}
  />
)

TextWidget.propTypes = {
  delta: PropTypes.number,
  value: PropTypes.any,
  setValue: PropTypes.func
}
