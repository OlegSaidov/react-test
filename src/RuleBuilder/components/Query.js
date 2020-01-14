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



  componentWillReceiveProps(nextProps) {
    if (this.props.defaultTree === nextProps.defaultTree) {
      return
    }


    this.setState({
      tree: reducer(nextProps.defaultTree || defaultRoot(nextProps.config), undefined)
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

  render() {                                /*passing parameters to  Render function in App.js*/
    return this.props.children(
              this.props.config,          // passing down to Render function argument the defaultConfig object from up its parent the App.js
              this.state.tree,             // passing down the tree varible from state?
              this.actions,               //passing actions variable down
           )
    
  }
}
