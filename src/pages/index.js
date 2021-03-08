import React from "react"
import { Link } from "gatsby"
import Styles from "./index.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import Randy from "../images/randy-home.jpg"

import Layout from "../components/layout"

import SEO from "../components/seo"
import ProjectCard from "../components/ProjectCard/ProjectCard"
import Project1 from "../images/project1.png"
import Project2 from "../images/project2.png"
// import Project3 from "../images/project3.png"
import ProjectBlock from "../components/ProjectBlock/ProjectBlock"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className={Styles.IndexBanner}>
      <img src={Randy} alt="Randy" className={Styles.HomeImage} />
      <div className={Styles.BannerText}>
        <h1>
          Hey! I'm <span style={{ color: "#6FCF97" }}>Randy</span>.
        </h1>
        <h3>
          I'm a product designer and software developer, currently studying
          computer science at{" "}
          <Link to="https://www.queensu.ca/">
            <span className={Styles.Queens}>Queen's University</span>
          </Link>{" "}
          in Kingston, Ontario.
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
      <Link to="/boomerang">
        <ProjectCard
          img={Project1}
          title="Boomerang"
          description="A 3-month project initiative, aimed to tackle the problem of receiving post-interview feedback as a job candidate."
        />
      </Link>
      {/* <Link to="/productbuds">
        <ProjectCard
          img={Project2}
          title="Product Buds"
          description="Building a website from the ground up for a global community of over 3500 members, all aspiring to become product managers."
        />
      </Link> */}
      <Link to="/bounce">
        <ProjectCard
          img={Project2}
          title="Bounce"
          description="Redesigning and developing a website for an events hosting and peer-to-peer payment startup."
        />
      </Link>
    </div>
    <div className={Styles.Projects}>
      <h3>More Work.</h3>
      <div className={Styles.ProjectsContainer}>
        <Link to="https://productbuds.co" target="_blank">
          <ProjectBlock
            title="Product Buds"
            description="Built a website from the ground up using React and Gatsby for a global community of over 3500 members, all aspiring to become product managers."
          />
        </Link>
        <Link to="https://eqworks-product.vercel.app/" target="_blank">
          <ProjectBlock
            title="Event Data Visualizer"
            description="A data-visualization dashboard that displays different metrics of in-person event data that are queried from a PostgreSQL database, built with Next.js, Node.js, Express and D3.js."
          />
        </Link>
        <Link
          to="https://github.com/randyshao/greencoin-chrome-extension/"
          target="_blank"
        >
          <ProjectBlock
            title="GreenCoin"
            description="A Google Chrome Extension that helps online shoppers offset their carbon footprint by letting them donate to an environmental non-profit organization at checkout, built with JavaScript, React, and Firebase."
          />
        </Link>
      </div>
      <div className={Styles.ProjectsContainer} style={{ marginTop: "40px" }}>
        <Link to="https://the-shoppies-nominator.vercel.app/" target="_blank">
          <ProjectBlock
            title="Movie Nominator"
            description="A movie nomination application that queries results from OMDB’s API and allows users to add and remove movies from a personalized list, developed using NextJS, Context, and CSS."
          />
        </Link>
        <Link
          to="https://sandwich-maker-9b098.firebaseapp.com/"
          target="_blank"
        >
          <ProjectBlock
            title="Sandwich Maker"
            description="A mobile responsive single-page web application that simulates a food ordering system, allowing users to build and order sandwiches, built with React, Redux and Google Firebase."
          />
        </Link>
        <Link to="https://randyshao-game-show-app.netlify.app/" target="_blank">
          <ProjectBlock
            title="Wheel of Fortune"
            description="Based off the popular game show, this version of 'Wheel of Fortune' was created with HTML, CSS, and JavaScript."
          />
        </Link>
      </div>
    </div>
  </Layout>
)

export default IndexPage
