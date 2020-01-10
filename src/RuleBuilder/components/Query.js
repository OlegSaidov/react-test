import { Component } from 'react'
import PropTypes from 'prop-types'
import { map } from 'ramda'
import defaultRoot from '../utils/defaultRoot'
import reducer from '../reducer'
import * as actionCreators from '../actions'

export class Query extends Component {
  static propTypes = {
    config: PropTypes.any,
    defaultTree: PropTypes.any,
    children: PropTypes.func
  }
  state = (props => {
    return {
      tree: reducer(props.defaultTree || defaultRoot(props.config), undefined)
    }
  })(this.props);

  componentWillReceiveProps (nextProps) {
    if (this.props.defaultTree === nextProps.defaultTree) {
      return
    }
    this.setState({
      tree:  reducer(nextProps.defaultTree || defaultRoot(nextProps.config), undefined)
    })
  }

  actions = (props => {
    const actions = Object.keys(actionCreators).reduce((acc, k) => {
      acc[k] = actionCreators[k]
      return acc
    }, {});
    return map(action => {
      return (...args) =>
        this.update(action(...args)(this.state, this.props.config))
    }, actions)
  })(this.props)

  update = action => {
    this.setState(state => ({
      tree: reducer(state.tree, action)
    }))
  };

  render () {
    return this.props.children(
      this.props.config,
      this.state.tree,
      this.actions,
    )
  }
}
