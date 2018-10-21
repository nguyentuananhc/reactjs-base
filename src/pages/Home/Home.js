import React, { Component } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import Container from '../../components/Container'
import injectReducer from '../../utils/injectReducer'
import homeReducer from './reducers'

class Home extends Component {
  render() {
    return (
      <Container>
        Home Page
      </Container>
    )
  }
}

const mapStateToProps = ({ user, home }) => ({ user, home })

export default compose(
  injectReducer({ key: 'home', reducer: homeReducer }),
  connect(mapStateToProps),
)(Home)
