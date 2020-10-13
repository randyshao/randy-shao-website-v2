import React from 'react'
import Styles from "./Footer.module.scss"

const Footer = () => {
    return (
        <footer className={Styles.Footer}>
            <div className={Styles.Container}>
                <p>© 2020, Built with React, Gatsby, and lots of ❤️</p>
            </div>
        </footer>
    )
}

export default Footer
