import React from 'react'
import PropTypes from 'prop-types'

export const DateWidget = props => (
  <input
    autoFocus={props.delta === 0}
    type='date'
    value={props.value}
    onChange={event => props.setValue(event.target.value)}
  />
)

DateWidget.propTypes = {
  delta: PropTypes.number,
  value: PropTypes.any,
  setValue: PropTypes.func
}
