import React from "react"
import { Link } from "gatsby"
import Styles from "./index.module.scss"
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
        <h1>Hey! I'm Randy.</h1>
        <h3>
          I'm a computer science student from{" "}
          <Link to="https://www.queensu.ca/">Queen's University</Link> in
          Kingston, Ontario.
        </h3>
        <p>Check out what I've been working on.</p>
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
