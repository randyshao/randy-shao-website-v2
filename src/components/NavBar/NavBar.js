import React from "react"
import { Link } from "gatsby"
import Styles from "./NavBar.module.scss"

const NavBar = ({ switchTheme }) => {
  return (
    <header className={Styles.NavBar}>
      <div className={Styles.Container}>
        <li>
          <Link to="/">
            <span className={Styles.Logo}>RS</span>
          </Link>
        </li>
        <nav className={Styles.NavItems}>
          <li style={{ paddingRight: "0" }}>
            <Link to="/about">About</Link>
          </li>
          <li style={{ paddingRight: "0" }}>
            <Link to="https://randyshao.com/" target="_blank">
              Photo
            </Link>
          </li>
          <li style={{ paddingRight: "0" }}>
            <button className={Styles.ThemeSwitcher} onClick={switchTheme}>
              <span role="img" aria-label="">
                🌙
              </span>
            </button>
          </li>
        </nav>
        {/* <button>Dark</button> */}
      </div>
    </header>
  )
}

export default NavBar
