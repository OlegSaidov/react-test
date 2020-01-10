import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Immutable from 'immutable'
import Rule from './Rule'
import Group from './Group'
/* eslint-disable */
const typeMap = {
  rule: props => (
    <Rule
      {...props.properties.toObject()}
      id={props.id}
      path={props.path}
      actions={props.actions}
      config={props.config}
    />
  ),
  group: props => (
    <Group
      {...props.properties.toObject()}
      id={props.id}
      path={props.path}
      actions={props.actions}
      config={props.config}
    >
      {props.children
        ? props.children
            .map(item => (
              <Item
                key={item.get('id')}
                id={item.get('id')}
                path={props.path.push(item.get('id'))}
                type={item.get('type')}
                properties={item.get('properties')}
                config={props.config}
                actions={props.actions}
              >
                {item.get('children')}
              </Item>
            ))
            .toList()
        : null}
    </Group>
  )
}

export default class Item extends Component {
  static propTypes = {
    config: PropTypes.object.isRequired,
    id: PropTypes.string.isRequired,
    type: PropTypes.oneOf(Object.keys(typeMap)).isRequired,
    path: PropTypes.instanceOf(Immutable.List).isRequired,
    properties: PropTypes.instanceOf(Immutable.Map).isRequired,
    children: PropTypes.instanceOf(Immutable.OrderedMap)
  };

  render () {
    const { type, ...props } = this.props
    return typeMap[type](props)
  }
}
