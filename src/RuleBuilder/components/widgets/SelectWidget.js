import React from 'react'
import { mapObjIndexed, values, compose } from 'ramda'
import PropTypes from 'prop-types'

const mapValues = compose(values, mapObjIndexed)

export const SelectWidget = props => {
  const options = mapValues(
    (label, value) => (
      <option key={value} value={value}>
        {label}
      </option>
    ),
    props.options.options,
  )

  return (
    <select
      autoFocus={props.delta === 0}
      value={props.value}
      onChange={event => props.setValue(event.target.value)}
    >
      <option value='' />
      {options}
    </select>
  )
}
SelectWidget.propTypes = {
  delta: PropTypes.number,
  value: PropTypes.any,
  options: PropTypes.any,
  setValue: PropTypes.func
}
