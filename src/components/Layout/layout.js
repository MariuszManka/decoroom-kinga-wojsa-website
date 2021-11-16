import * as React from "react"
import PropTypes from "prop-types"
import ThemeProvider from '../../Theme/ThemeProvider'

import "./layout.css"

const Layout = ({ children }) => {

  return (
    <ThemeProvider>
      <div className="page-wrapper">
        {children}
      </div>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
