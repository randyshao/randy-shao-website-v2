import React from "react"
import Layout from "../components/layout"
import Styles from "./index.module.scss"
import Randy from "../images/randy.jpg"

import Photo1 from "../images/photo1.jpg"
import Photo2 from "../images/photo2.jpg"
import Photo3 from "../images/photo3.jpg"
import Photo4 from "../images/photo4.jpg"
import Photo5 from "../images/photo5.jpg"
import Photo6 from "../images/photo6.jpg"

const about = () => {
  return (
    <Layout>
      <div className={Styles.Container}>
        <div className={Styles.About}>
          <div className={Styles.AboutSection}>
            <img src={Randy} alt="randy" />
            <div className={Styles.AboutMe}>
              <h2>Who am I?</h2>
              <p>
                Hi! My name is Randy, and it’s a pleasure to meet you. I’m
                currently a 4th-year computer science student at Queen’s
                University in Kingston, Ontario. I love all things tech and
                business, and am most interested in product management, UX/UI
                design, front-end development, and the startup scene. If you
                like what you see,{" "}
                <a className={Styles.Bounce} href="mailto:shao.randy@gmail.com">
                  please feel free to reach out!
                </a>
              </p>
              <p>
                Outside of school, I have a passion for photography and
                videography. I love traveling and documenting my experiences
                along the way through creative storytelling. What photography
                has done for me has let me meet some of the most amazing,
                passionate, and genuine people in my life. If you want to check
                out more of my photos,{" "}
                <a
                  className={Styles.Queens}
                  href="https://www.instagram.com/shaozr/"
                >
                  click here!
                </a>
              </p>
            </div>
          </div>
          <h3 style={{ textAlign: "center" }}>
            A VERY small sample of my photos.
          </h3>
          <div className={Styles.Photos}>
            <img src={Photo1} alt="Photo1" />
            <img src={Photo2} alt="Photo2" />
            <img src={Photo3} alt="Photo3" />
          </div>
          <div className={Styles.Photos}>
            <img src={Photo4} alt="Photo4" />
            <img src={Photo5} alt="Photo5" />
            <img src={Photo6} alt="Photo6" />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default about
