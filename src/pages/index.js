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
import ProjectBlock from "../components/ProjectBlock/ProjectBlock";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className={Styles.IndexBanner}>
      <img src={Randy} alt="Randy" className={Styles.HomeImage} />
      <div className={Styles.BannerText}>
        <h1>Hey! I'm <span style={{color: "#6FCF97"}}>Randy</span>.</h1>
        <h3>
          I'm a computer science student studying at{" "}
          <Link to="https://www.queensu.ca/"><span className={Styles.Queens}>Queen's University</span></Link> in
          Kingston, Ontario. Currently also a <Link to="https://www.bounceapp.ca/"><span className={Styles.Bounce}>SWE @ Bounce.</span></Link>
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
      <Link to="/boomerang"><ProjectCard img={Project1} title="Boomerang" description="A 3-month project initiative, aimed to tackle the problem of receiving post-interview feedback as a job candidate."/></Link>
      <Link to="/productbuds"><ProjectCard img={Project2} title="Product Buds" description="Building a website from the ground up for a global community of over 3000 members, all aspiring to become product managers."/></Link>
    </div>
    <div className={Styles.Projects}>
      <h3>More Work.</h3>
      <div className={Styles.ProjectsContainer}>
        <Link to="https://sandwich-maker-9b098.firebaseapp.com/" target="_blank"><ProjectBlock title="Sandwich Maker" description="A mobile responsive single-page web application that simulates a food ordering system, allowing users to build and order sandwiches, built with React, Redux and Google Firebase."/></Link>
        <Link to="https://randyshao-game-show-app.netlify.app/" target="_blank"><ProjectBlock title="Wheel of Fortune" description="Based off the popular game show, this version of 'Wheel of Fortune' was created with HTML, CSS, and JavaScript." /></Link>
        <Link to="https://github.com/helenwxdong/ampHacks-Team-8/tree/main/kandor" target="_blank"><ProjectBlock title="Kandor" description="A web and messaging application using React and Google Firebase that connects elders with each other based on their personal interests."/></Link>
      </div>
    </div>
  </Layout>
)

export default IndexPage
