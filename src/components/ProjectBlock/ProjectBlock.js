import React from 'react'
import Styles from './ProjectBlock.module.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons"

const ProjectBlock = (props) => {
    return (
        <div className={Styles.ProjectBlock}>
            <h3>{props.title}</h3>
            <p>{props.description}</p>
            <FontAwesomeIcon icon={faExternalLinkAlt} size="1x" />
        </div>
    )
}

export default ProjectBlock
