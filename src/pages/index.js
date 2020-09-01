import React from "react"
import { Link } from "gatsby"
import Styles from "./index.module.scss"
import Randy from "../images/randy-home.jpg"

import Layout from "../components/layout"

import SEO from "../components/seo"

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
      </div>
    </div>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}></div>
  </Layout>
)

export default IndexPage
