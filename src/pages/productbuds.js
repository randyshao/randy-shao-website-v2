import React from 'react'
import Layout from "../components/layout"
import Styles from "./index.module.scss"
import PB from '../images/project2.png'

const boomerang = () => {
    return (
        <Layout>
            <div className={Styles.PBBanner}>
                <div className={Styles.Container}>
                <h2>Product Buds Website</h2>
                <h3>Building a community of aspiring product managers from around the globe.</h3>
                <img src={PB} alt="Product Buds" />
                </div>
            </div>
            <div className={Styles.ProjectOverview}>
                <div className={Styles.Container}>
                    <div className={Styles.Details}>
                        <div>
                            <h3>Skills</h3>
                            <p>Wed Development, Figma, React, Gatsby, Sass</p>
                        </div>
                    </div>
                    <div className={Styles.Overview}>
                        <h3>Overview.</h3>
                        <p>As a web developer, it's important to get involved with projects that have the ability to impact people on a large scale. So when I found out that Product Buds, a global community of aspiring product managers, were looking for someone to develop their website from the ground up, I couldn't let this opportunity pass.
                            In terms of development, I decided to code the site in React with Gatsby as my React framework for optimal SEO and static site generation. Whilst developing a website for thousands of community members, I made it a priority to ensure accessibility for all, which involved doing interviews with some members with visual impairments.
                        </p>
                    
                        <h3>Result.</h3>
                        <p>After a few weeks of rigorous developing, we launched the website to the entire community! Today, Product Buds is 3000+ members strong, with its community spanning across the entire globe. If you wanna check out the website, <a className={Styles.Bounce} href="https://productbuds.co">click here!</a>
                        </p>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default boomerang
