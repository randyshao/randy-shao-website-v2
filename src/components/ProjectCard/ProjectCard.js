import React from "react"
import Styles from "./ProjectCard.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons"

const ProjectCard = (props) => {
  return (
    <div className={Styles.ProjectCard}>
      <div className={Styles.ImageWrapper}>
        <img src={props.img} alt='Boomerang' />
      </div>
      <div className={Styles.ProjectDescription}>
        <h3>{props.title}</h3>
        <p>
          {props.description}
        </p>
        <p>View Details.<FontAwesomeIcon icon={faExternalLinkAlt} size="1x" /></p>
      </div>
    </div>
  )
}

export default ProjectCard
