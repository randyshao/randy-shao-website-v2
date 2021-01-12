/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
import NavBar from "./NavBar/NavBar"
import Footer from "./Footer/Footer"
import "./layout.scss"

const Layout = ({ children }) => {
  const [theme, setTheme] = useState("light")

  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      localStorage.getItem("theme")
    )

    setTheme(localStorage.getItem("theme"))
  }, [])

  const switchTheme = () => {
    if (theme === "light") {
      saveTheme("dark")
    } else {
      saveTheme("light")
    }
  }

  const saveTheme = theme => {
    setTheme(theme)
    localStorage.setItem("theme", theme)
    document.documentElement.setAttribute("data-theme", theme)
  }

  return (
    <>
      <NavBar switchTheme={switchTheme} />
      <main>{children}</main>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
