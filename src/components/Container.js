import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Footer from './Footer'
import Header from './Header'

class Container extends PureComponent {
  render() {
    const { children } = this.props
    return (
      <>
        <Header />
        {children}
        <Footer />
      </>
    )
  }
}

Container.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Container
