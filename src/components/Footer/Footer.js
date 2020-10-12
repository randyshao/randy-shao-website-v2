import React from 'react'
import Styles from "./Footer.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons"

const Footer = () => {
    return (
        <footer className={Styles.Footer}>
            <div className={Styles.Container}>
                <div >
                    <span style={{paddingRight: "20px"}}>
                        <FontAwesomeIcon icon={faInstagram} size="2x" />
                    </span>
                    <span style={{paddingRight: "20px"}}> 
                        <FontAwesomeIcon icon={faGithub} size="2x" />
                    </span>
                    <span style={{paddingRight: "20px"}}>
                        <FontAwesomeIcon icon={faLinkedin} size="2x" />
                    </span>
                </div>
            </div>
        </footer>
    )
}

export default Footer
