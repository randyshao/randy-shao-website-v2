import React from "react"
import Layout from "../components/layout"
import Styles from "./index.module.scss"
import Bounce1 from "../images/bounce1.png"
import Bounce2 from "../images/bounce2.png"
import Home from "../images/home.png"
import Features from "../images/features.png"
import Features2 from "../images/features-2.png"
import Pricing from "../images/pricing.png"
import Styling from "../images/styling.png"
import NewBar from "../images/navbar-new.png"
import OldBar from "../images/navbar-old.png"
// import Subtabs from "../images/subtabs.png"
import NewHomepage from "../images/homepage-new.png"
import NewPricing from "../images/pricing-new.png"
import NewFeatures from "../images/features-new.png"
import Iteration1 from "../images/bounce-iteration1.png"
import IterationColumn from "../images/bounce-iteration1-layout.png"

const bounce = () => {
  return (
    <Layout>
      <div className={Styles.BoomerangBanner}>
        <div className={Styles.Container}>
          <h2>Bounce</h2>
          <img
            src={Bounce2}
            alt="Bounce"
            style={{ boxShadow: "0px 4px 50px rgba(0, 0, 0, 0.25)" }}
          />
          <img src={Bounce1} alt="Bounce" />
        </div>
      </div>
      <div className={Styles.ProjectOverview}>
        <div className={Styles.Container}>
          <div className={Styles.IntroSection}>
            <ul>
              <li>
                <strong>Role</strong>
              </li>
              <li>Front-end Developer</li>
              <li>UX/UI Designer</li>
            </ul>
            <ul></ul>
            <ul>
              <li>
                <strong>Duration</strong>
              </li>
              <li>Aug 2020 (Design) - Sept 2020 (Development)</li>
            </ul>
            <p>
              Bounce is a startup that aims to redefine the events hosting
              landscape for in-person and virtual events, providing a platform
              that facilitates event ticketing and oeer-to-peer (P2P) payments
              through their web platform as well as mobile app. Having had the
              same design since they were founded a couple of years again, I was
              tasked with rehauling the design of their main website, in order
              to better reflect their updated brand identity and showcase their
              newly released features on the platform. Afterwards, I turned
              these designs into code and redeveloped their site with React and
              Sass. See what I built by clicking{" "}
              <a
                className={Styles.Bounce}
                href="https://bounceapp.ca"
                target="_blank"
                rel="noreferrer"
              >
                here!
              </a>
            </p>
          </div>
          <div className={Styles.Overview}>
            <h3>Current Website Analysis.</h3>
            <p>
              Before redesigning the website, I did user testing with a few
              current users of the platform, as well as some friends who had
              never heard of Bounce before, to gauge their impressions of the
              landing pages as well as understand any interaction issues they
              might have with the site.
            </p>
            <div style={{ display: "flex" }}>
              <div style={{ margin: "50px auto", textAlign: "center" }}>
                <h4>Home Page</h4>
                <img src={Home} alt="Home" width="100%" />
              </div>
              <div style={{ margin: "50px 0", textAlign: "center" }}>
                <h4>Features Pages</h4>
                <img src={Features} alt="Features" width="100%" />
              </div>
            </div>

            <div style={{ margin: "50px 0" }}>
              <img src={Features2} alt="Features" width="100%" />
            </div>
            <div style={{ margin: "50px 0", textAlign: "center" }}>
              <h4>Pricing and Contact Pages</h4>
              <img src={Pricing} alt="Features" width="100%" />
            </div>
            <ul>
              <li>
                <strong>Lack of Information Hierarchy</strong> - When landing on
                the homepage, there's a large emphasis on how easy it is to
                collect payments for events, but not enough information is being
                highlighted on many of the newer features that Bounce has to
                offer as an event management platform.
              </li>
              <li>
                <strong>Inconsistent Layout System</strong> - When looking
                across all the landing pages, it's hard to define a consistent
                format. Each page contains different header and paragraph font
                sizes, as well as text spacing values. Some pages are extremely
                text heavily while have barely any information at all.
              </li>

              <li>
                <strong>Not enough calls to action</strong> - There's only one
                button on the main page that directs the user to sign up for the
                platform. The rest of the webpages are simply informational,
                making it an overall less-engaging, less-interactive experience.
              </li>
            </ul>
            <h3>Goals of Redesign.</h3>
            <div className={Styles.DesignGoals}>
              <div>
                <h4 style={{ color: "#2f80ed" }}>
                  Highlight the most up-to-date features
                </h4>
                <p>
                  This last year saw the addition of many new features to
                  Bounce. All these features helped shape Bounce from simply an
                  events payment processing company, to a truly one-stop shop
                  for all events hosting needs. The website needed to reflect
                  this evolution of brand.
                </p>
              </div>
              <div>
                <h4 style={{ color: "#2f80ed" }}>Consistent Layout</h4>
                <p>
                  Having a container with the same max-width property across all
                  pages and having consistent margin values at the edges of the
                  page to perfectly line up the content vertically.
                </p>
              </div>
              <div>
                <h4 style={{ color: "#2f80ed" }}>
                  Improve accessibility across all pages{" "}
                </h4>
                <p>
                  Both current and prospective users should be able to easily
                  understand and navigate the website frictionless as possible.
                </p>
              </div>
            </div>
            <h3 style={{ marginTop: "5em" }}>Iterations + Visual Design.</h3>
            <h4>Typography and Colour Palette</h4>
            <p>
              The old website had many inconsistencies when it came to the
              typeface and font colours. Specifically, the homepage contained
              headers and paragraph text that was larger and had different
              colours than the other pages, which themselves had different
              styling amongst each other. This time around I wanted to keep the
              typography and colour palette consistent, in order to make a
              coherent style and feeling when navigating the website.
            </p>
            <img src={Styling} alt="visual" width="100%" />
            <h4>Establishing Layout</h4>
            <div className={Styles.BounceLayout}>
              <p>
                When starting off the redesign process, I wanted to establish a
                familiarity across all pages with the layout. I had two
                different wireframed versions of each page in my initial
                iteration. After demoing the pages, I kept the version that had
                a two columned layout, where one column would contain a title,
                description and at times a button, and the other would have a
                corresponding image or video.
              </p>
              <img src={IterationColumn} alt="Bounce" />
            </div>

            <img src={Iteration1} alt="Bounce" width="100%" />
            <h3>Solution - Key Designs</h3>
            <h4>Navigation Bar</h4>
            <p>
              The new navbar has fewer links, eliminating the duplicate "Home"
              as the Bounce logo would serve as the link to the homepage. I also
              removed contact page, and moved it to the link section in the
              footer. With overall fewer links, The navbar feels even less
              cluttered, while the links take you to only the essential pages.
            </p>
            <h4>Old Navbar</h4>
            <img src={OldBar} alt="visual" width="100%" />
            <h4>New Navbar</h4>
            <img src={NewBar} alt="visual" width="100%" />

            {/* <h4>Feature Subtab</h4>
            <img src={Subtabs} alt="visual" width="60%" />
            <p>On the features page</p> */}
            <h4>Homepage</h4>
            <div className={Styles.BouncePage}>
              <p>
                The homepage main banner gives the user a short tagline that
                well encapsulates what the company does, as well as graphic of
                the main feed of the application to visually showcase the
                features of the product. As you scroll down, each section gives
                a unique value proposition of the company, along with an
                autolooping video to demonstrate a corresponding feature to the
                value prop, as well as a button link to the section in the
                feature page that gives more detail on that description. Near
                the bottom of the page are the companies that have backed or
                used the product, as well as the company's impact statistics,
                which further build brand reputability.
              </p>
              <div className={Styles.BounceImage}>
                <img src={NewHomepage} alt="visual" />
              </div>
            </div>
            <h4>Features Page</h4>
            <div className={Styles.BouncePage}>
              <p>
                The features page goes into more detail about the different
                features that were briefly summarized on the homepage. This page
                is contains 3 sub-sections categorized by the three most
                defining use cases of the platform.
                <ul>
                  <li>
                    Events - Hosting and attending events, virtually and
                    in-person.
                  </li>
                  <li>
                    Payments - Transferring money between peers with their P2P
                    payment system.
                  </li>
                  <li>
                    Social - Creating relationships through their end-to-end
                    event experience.
                  </li>
                </ul>
              </p>
              <div className={Styles.BounceImage}>
                <img src={NewFeatures} alt="visual" />
              </div>
            </div>

            <h4>Pricings Page</h4>
            <div className={Styles.BouncePage}>
              <p>
                With a completely new pricing model, the pricings page
                completely changed as well, to better segment the costs of the
                different user groups of the platform. The top half of the page
                emphasizes that Bounces services were made for all types of
                users, allowing anyone to easily start hosting or attending
                events through their platform.
                <br />
                <br />
                The middle section goes into detail about the pricing tiers
                specifically for event hosts, from independent organizers to
                large organizers. Emphasis is placed on the middle tier by
                colouring it blue, as that is the target price that has
                typically been most suitable for our target host users. For the
                paid tiers, there were "Contact Us" buttons that led to the
                contact page where event organizers can inquire about the
                services in more detail.
              </p>
              <div className={Styles.BounceImage}>
                <img src={NewPricing} alt="visual" />
              </div>
            </div>

            <h3>Building the website</h3>
            <p>
              The old website was already developed with React. So when it came
              time for development, the main focus was overhauling the layout
              and redefining the parent styles and variables with Sass to match
              the updated design. To keep with the theme of accessibility, I
              went with a mobile first approach and ensured that the site
              experience was consistent across all browsers and mobile devices.
              Many of the components, such as the toolbar in the features
              section were taken from Semanic UI, a UI library, however this
              time around I wanted to develop many of these components from
              scratch for complete control over the behaviour and style. As for
              the assets such as illustrations and video animations, I got help
              from my Bounce teammates Richard and Ricky who've had experience
              creating these assets in the past.
            </p>
            <h3>Takeaways</h3>
            <p>
              Having the chance to not only design a project that would be seen
              by thousands of users, but also take my designs to the development
              stage and further my skills with React, was truly a rewarding
              experience.
            </p>
            <p>
              I learned that user testing with your customers is crucial to not
              only ensuring the proper user experience for a product or website,
              but also consider functionalities about the design that you
              wouldn't normally consider from the developer/designer side if it
              was just worked on without external feedback. Check out the site{" "}
              <a
                className={Styles.Bounce}
                href="https://bounceapp.ca"
                target="_blank"
                rel="noreferrer"
              >
                here!
              </a>
            </p>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default bounce
