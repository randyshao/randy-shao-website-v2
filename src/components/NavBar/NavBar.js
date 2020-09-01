import React from "react"
import { Link } from "gatsby"
import Styles from "./NavBar.module.scss"

const NavBar = () => {
  return (
    <header className={Styles.NavBar}>
      <div className={Styles.Container}>
        <li>
          <Link to="/">R.</Link>
        </li>
        <nav className={Styles.NavItems}>
          <li>
            <Link to="/">About</Link>
          </li>
          <li>
            <Link to="/">Gallery</Link>
          </li>
        </nav>
        <button>Dark</button>
      </div>
    </header>
  )
}

export default NavBar
