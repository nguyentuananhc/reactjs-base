import React, { Component } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import injectReducer from '../../utils/injectReducer'
import homeReducer from './reducers'

class Home extends Component {
  render() {
    return (
      <div>
        Home Page
      </div>
    )
  }
}

const mapStateToProps = ({ user, home }) => ({ user, home })

export default compose(
  injectReducer({ key: 'home', reducer: homeReducer }),
  connect(mapStateToProps),
)(Home)
