import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Immutable from 'immutable'
import Item from '../components/Item'

export class Builder extends Component {
  static propTypes = {
    tree: PropTypes.instanceOf(Immutable.Map).isRequired,
    config: PropTypes.object.isRequired,
    actions: PropTypes.any
  };

  render () {
    const id = this.props.tree.get('id')

    return (
      <Item
        key={id}
        id={id}
        path={Immutable.List.of(id)}
        type={this.props.tree.get('type')}
        properties={this.props.tree.get('properties')}
        config={this.props.config}
        actions={this.props.actions}
      >
        {this.props.tree.get('children')}
      </Item>
    )
  }
}
