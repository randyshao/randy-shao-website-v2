import React from "react"
import Styles from "./ProjectCard.module.scss"

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
        <span></span>
      </div>
    </div>
  )
}

export default ProjectCard
