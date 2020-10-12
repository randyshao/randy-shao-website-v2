import React from "react"
import { Link } from "gatsby"
import Styles from "./index.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import Randy from "../images/randy-home.jpg"

import Layout from "../components/layout"

import SEO from "../components/seo"
import ProjectCard from "../components/ProjectCard/ProjectCard"
import Project1 from "../images/project-1.png"
import Project2 from "../images/project-2.png"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className={Styles.IndexBanner}>
      <img src={Randy} alt="Randy" className={Styles.HomeImage} />
      <div className={Styles.BannerText}>
        <h1>Hey! I'm <span style={{color: "#6FCF97"}}>Randy</span>.</h1>
        <h3>
          I'm a computer science student from{" "}
          <Link to="https://www.queensu.ca/"><span className={Styles.Queens}>Queen's University</span></Link> in
          Kingston, Ontario.
        </h3>
        <div className={Styles.Logos}>
          <Link to="https://www.instagram.com/shaozr/">
            <div>
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </div>
          </Link>
          <Link to="https://www.github.com/randyshao/">
            <div>
              <FontAwesomeIcon icon={faGithub} size="2x" />
            </div>
          </Link>
          <Link to="https://www.linkedin.com/in/randyshao/">
            <div>
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </div>
          </Link>
          <a href="mailto:shao.randy@gmail.com">
            <div>
              <FontAwesomeIcon icon={faEnvelope} size="2x" />
            </div>
          </a>
        </div>
      </div>
    </div>
    <div className={Styles.FeaturedSection}>
      <h3>Featured.</h3>
      <ProjectCard img={Project1} title="Boomerang" description="A 3-month project initiative, aimed to tackle the problem of receiving post-interview feedback as a job candidate."/>
      <ProjectCard img={Project2} title="Product Buds" description="Building a website from the ground up for a global community of aspring product mangers."/>
      <ProjectCard img={Project1} title="Bounce" description="Working for a startup aiming to be the one-stop shop for all your events hosting needs."/>
    </div>
  </Layout>
)

export default IndexPage
