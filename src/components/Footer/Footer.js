import React from 'react'
import Styles from "./Footer.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons"

const Footer = () => {
    return (
        <footer className={Styles.Footer}>
            <div className={Styles.Container}>
                <div>
                    <span>
                        <FontAwesomeIcon icon={faInstagram} size="2x" />
                    </span>
                    <span>
                        <FontAwesomeIcon icon={faGithub} size="2x" />
                    </span>
                    <span>
                        <FontAwesomeIcon icon={faLinkedin} size="2x" />
                    </span>
                </div>
                © {new Date().getFullYear()}, Built with <a href="https://www.gatsbyjs.org">Gatsby</a> 
            </div>
        </footer>
    )
}

export default Footer
