import React from "react"
import Layout from "../components/layout"
import Styles from "./index.module.scss"
import Boomerang1 from "../images/boomerang.png"
import Boomerang2 from "../images/boomerang-2.png"
// import Demo from "../images/boomerang-demo.gif"
import Feedback from "../images/feedback.png"
import Workflow from "../images/workflow.png"
import Lofi from "../images/lofi.png"
import Persona1 from "../images/persona1.png"
import Persona2 from "../images/persona2.png"
import Iteration2 from "../images/iteration2.png"
import IterationCandidate1 from "../images/iteration-candidate-1.png"
import IterationCandidate2 from "../images/iteration-candidate-2.png"
import IterationInterviewer1 from "../images/iteration-interviewer-1.png"
import IterationInterviewer2 from "../images/iteration-interviewer-2.png"
import IterationInterviewer3 from "../images/iteration-interviewer-3.png"
import CandidateFlow from "../images/candidate-flow.mp4"

const boomerang = () => {
  // useEffect(() => {
  //   try {
  //     let vid1 = document.getElementById("vid-1")
  //     vid1.play().catch(err => {
  //       console.log("ERROR STARTING VIDEO", err)
  //     })
  //   } catch (err) {
  //     console.log(err)
  //   }
  // })
  return (
    <Layout>
      <div className={Styles.BoomerangBanner}>
        <div className={Styles.Container}>
          <h2>Boomerang</h2>
          <h3>
            Providing growth opportunities through simple, enlightening
            feedback.
          </h3>
          <img src={Boomerang1} alt="Boomerang" />
          <img src={Boomerang2} alt="Boomerang" />
        </div>
      </div>
      <div className={Styles.ProjectOverview}>
        <div className={Styles.Container}>
          <div className={Styles.IntroSection}>
            <ul>
              <li>
                <strong>Skills</strong>
              </li>
              <li>Product Management</li>
              <li>UX/UI Design</li>
              <li>Market Research</li>
              <li>User Personas</li>
            </ul>
            <ul>
              <li>
                <strong>Team Members</strong>
              </li>
              <li>Vicky Liu</li>
              <li>Luke Levasseur</li>
              <li>Lucy Liu</li>
              <li>Jacob Brown</li>
            </ul>
            <ul>
              <li>
                <strong>Duration</strong>
              </li>
              <li>May 2020 - Aug 2020</li>
            </ul>
            <p>
              Boomerang is a web platform that streamlines the interview
              feedback exchange process between job candidates and interviewers.
              Our product aims to tackle a prominent issue in the job industry:
              Receiving feedback for a job interview after being rejected from a
              company. As part of the Product Buds Project Jam, a 3-month
              initiative where participants work on building a product from
              ideation to prototype, I worked alongside 4 other students in
              order to ideate, research, prototype and pitch our product.
            </p>
          </div>
          <div className={Styles.Overview}>
            <h3>Problem.</h3>
            <p>
              Being a team of students who've gone through the job interview
              process, we've all dealt with the struggle of rejection. However,
              what's especially frustrating is when a candidate reaches out to
              their interviewer for feedback, only to get ghosted, or receive
              the ol' "Sorry, there was just a better candidate than you"
              response, without any actionable feedback. We felt that this issue
              was not only a prevalent one, but an important one to solve, due
              to the fact that when we do receive feedback, we can easily
              pinpoint in what areas we are able to improve on for next time.
              This prompted the question:
            </p>
            <p
              style={{
                textAlign: "center",
                fontWeight: "600",
                fontSize: "1.3em",
                padding: "2em 0",
              }}
            >
              So why don’t more companies give interview feedback, and how could
              we get them to do so?
            </p>
            <h3>Research.</h3>
            <p>
              Having the perspective of only one side of the interview process,
              we sought to gain a deeper understanding as to the psychological,
              operational, and legal barriers behind the interview process.
              Moreover, we wanted to see how many other job seekers had the same
              issues, in order to validate our assumptions.
            </p>
            <p>
              After weeks of conducting market research through surveys and
              interviews with both job candidates and interviewers alike.
              However, we aimed to focus more on conducting interviews when
              gathering research on the company side, in order to gain a deeper
              insight from a company perspective.
            </p>
            <h4>Insights - Candidate Side</h4>
            <p>
              When garnering research on job candidates, our main focus was to
              justify our concerns, and to get a sense of how many people truly
              valued feedback but were having trouble obtaining it. Out of 30
              survey responses from job interviewees:
            </p>
            <div className={Styles.SurveyResults}>
              <span></span>
              <span>Of those who want interview feedback,</span>
              <span>Of those who didn't receive feedback,</span>
              <span>Of those who did receive feedback,</span>
              <h3>94%</h3>
              <h3>60%</h3>
              <h3>77%</h3>
              <h3>76%</h3>
              <p>of candidates want interview feedback after an interview</p>
              <p>of candidates don't receive feedback</p>
              <p>of candidates were ghosted</p>
              <p>
                of candidates found their feedback to be useless/inactionable
              </p>
            </div>
            <div className={Styles.SurveyResultsMobile}>
              <p>
                <span style={{ color: "#2f80ed" }}>94% </span>of candidates want
                interview feedback after an interview
              </p>
              <p>
                <span style={{ color: "#999999" }}>
                  Of those who want interview feedback,
                </span>{" "}
                <span style={{ color: "#2f80ed" }}>60%</span> of candidates
                don't receive feedback
              </p>
              <p>
                <span style={{ color: "#999999" }}>
                  Of those who didn't receive feedback,{" "}
                </span>
                <span style={{ color: "#2f80ed" }}>77%</span> of candidates were
                ghosted
              </p>
              <p>
                <span style={{ color: "#999999" }}>
                  Of those who did receive feedback,{" "}
                </span>
                <span style={{ color: "#2f80ed" }}>76%</span> of candidates
                found their feedback to be useless/inactionable
              </p>
            </div>
            <div style={{ margin: "0 auto", textAlign: "center" }}>
              <img src={Feedback} alt="feedback" width="80%" />
            </div>
            <h4>Insights - Company Side</h4>
            <p>
              As for the company side, we shifted our focus to gain a better
              understanding as to why a company would choose not to give
              interview feedback. After conducting several interviews with job
              recruiters, hiring managers, and other employees involved in the
              interview process, we boiled it down for the following reasons.
            </p>
            <div className={Styles.CompanyReasons}>
              <h4>Fear of Legal Implications</h4>
              <p>
                The biggest concern for companies is that the feedback that is
                given to the candidate can often be misinterpreted,
                misconstrued, or used by the candidate to reveal that the reason
                for rejection is discriminatory, and not necessarily because
                there were better candidates. To avoid this, many companies give
                minimal feedback to avoid this risk.
              </p>
              <h4>Lack of Time</h4>
              <p>
                Recruitment teams may have too many candidates to evaluate to
                have the operational resources to give personalized feedback to
                every interviewee.
              </p>
              <h4>The benefits of giving feedback are minimal</h4>
              <p>
                Recruitment teams may have too many candidates to evaluate to
                have the operational resources to give personalized feedback to
                every interviewee.
              </p>
            </div>
            <h3>Solution.</h3>
            <p>
              With all of these reasons we gathered from our interviews, we
              altered the scope of our original thoughts on how we could get
              companies to provide feedback to candidates, and reframed our
              question to then ask them:{" "}
              <strong>
                What value could a candidate provide back to a company, AFTER
                they’ve been rejected?
              </strong>{" "}
              To our surprise, the majority of our interviewers answered the
              question with some variation of this answer:{" "}
            </p>
            <p
              style={{
                textAlign: "center",
                fontWeight: "600",
                fontSize: "1.3em",
                padding: "2em 0",
              }}
            >
              “Provide feedback on the companies’ recruiting process”.
            </p>
            <p>
              This answer would provide clarity to a potential solution that
              would help solve the problem within the problem space. With this
              input, we took our one-sided feedback model, and reframed our
              potential solution to revolve around{" "}
              <strong>
                a feedback exchange between the two parties (job candidate and
                company),
              </strong>{" "}
              bringing more design wrinkles but providing much more value to
              companies.
            </p>
            <h4>Narrowing down our target market</h4>
            <p>
              For our initial MVP, we narrowed down it down to target job
              seekers and companies with the following attributes:
            </p>
            <ul>
              <li>
                Student job candidates looking for internships/new-grad
                opportunities.
              </li>
              <li>
                Roles in software engineering - In general, SWE interviews have
                more quantifiable performance metrics than alternative
                positions, removing some subjectivity from the provided
                feedback.
              </li>
              <li>
                Smaller startups/companies hiring for these roles (less than 100
                employees) - After speaking to hiring managers from larger
                companies, these companies tend to have pre-established, lengthy
                hiring processes and would be too slow to integrate our new
                product into their funnels.
              </li>
            </ul>
            <h4>Personas</h4>
            <div className={Styles.Personas}>
              <img src={Persona1} alt="persona" width="50%" />
              <img src={Persona2} alt="persona" width="50%" />
            </div>
            <h4>
              Workflow - How will our product serve these two user groups?
            </h4>
            <p>
              We decided that the most accessible way to facilitate our solution
              was through a web application. Having decided on a two-side
              exchange feedback model for our product, our next hurdle was to
              answer a variety of questions surrounding the general workflow of
              our program:
            </p>
            <ul>
              <li>
                How would candidates/companies be onboarded to the platform?
              </li>
              <li>
                What mediums should the feedback be given in to either sides?
                (I.e. Numerical rubrics, comment sections, strengths and
                improvements, etc.)
              </li>
              <li>
                Should each feedback form be standarized, or should we allow our
                users to customize the way the feedback is delivered?
              </li>
            </ul>

            <div style={{ margin: "0 auto" }}>
              <img src={Workflow} alt="workflow" width="100%" />
              <ul>
                <li>
                  Once the candidate signs up for the platform for the first
                  time, any subsequent company that sends them a signup link
                  will automatically add the company to their list of
                  interviews, accessible on the platform.
                </li>
                <li>
                  Candidates and company reps (likely the interviewer) cannot
                  see each other's feedback, until they themselves, have sent
                  their feedback to the other party, ensuring that both sides
                  will deliver some form of feedback.
                </li>
              </ul>
              <img src={Lofi} alt="workflow" width="100%" />
            </div>
            <h4>Next Iteration</h4>
            <img src={Iteration2} alt="iteration 2" width="100%" />
            <h4>Layout Touchpoints and Revisions</h4>
            <ul>
              <li>
                Sidepanel to allow for navigation and sorting between Feedback
                Received and Feedback Given
              </li>
              <li>
                Expanding from a simple input field for the feedback form,
                allowing interviewers to create their own custom feedback forms
                to be given to candidate to fill out as a survey.
              </li>
              <li>
                Different status pages based on whether or not the candidate and
                interviewer have given their feedback yet.
              </li>
            </ul>
            <h4>Final Prototype</h4>
            <p>
              Our final prototype consisted of two separate dashboard views: One
              for the job applicant, and one for the interviewer. Despite this
              distinction between our two users groups, both users share much of
              the same styling and functionality, with a few additional features
              for the interviewer account that are outlined in this section.
            </p>
            <img
              src={IterationCandidate1}
              alt="iteration candidate"
              width="100%"
            />
            <ul>
              <li>
                <strong>Reorganization of feedback</strong> - Adding an “Action
                Items” tab gives the candidate greater clarity on which
                company’s they must submit their feedback forms to, while
                consolidating the feedback they’ve already received and given
                into another tab.
              </li>
              <li>
                <strong>Slight Dashboard Redesign</strong> - List of interviews
                are put into a single block component, separated by lines, as
                opposed to having a block for each interview.
              </li>
              <li>
                <strong>Feedback Forms (For Candidate)</strong> - Clear
                breakdown of feedback, between general, behavioral, and
                technical feedback sections.
              </li>
            </ul>
            <img
              src={IterationCandidate2}
              alt="iteration candidate"
              width="100%"
            />
            <ul>
              <li>
                <strong>Feedback Forms (For Interviewer)</strong> - Instead of
                using a 1-5 rating system, which can be a very subjective and
                hard-to-interpret rating system, we opted for a descriptive
                rating system, which would allow for greater clarity on what the
                candidate liked and disliked about the recruitment process, when
                filling out the feedback form to the company.
              </li>
            </ul>
            <img
              src={IterationInterviewer1}
              alt="iteration interviewer"
              width="100%"
            />
            <ul>
              <li>
                <strong>Applicant Tracking System (ATS) Integration</strong> -
                Allows our platform to connect with existing ATS’s (ex.
                Greenhouse, Jobvite) through their APIs, auto-populating our
                main dashboard with a list of job candidates, thus removing the
                tediousness of manually entering in applicant names.
              </li>
            </ul>
            <img
              src={IterationInterviewer2}
              alt="iteration interviewer"
              width="100%"
            />
            <ul>
              <li>
                <strong>Stock Roles</strong> - Our templated feedback forms
                (also known as “Stock Roles”) lets companies to customize their
                candidate feedback forms for each job posting, allowing them to
                specify the skills that they are being evaluated on for the
                specific role, and reuse that base template when interviewers
                fill out their feedback forms for each candidate.
              </li>
            </ul>
            <img
              src={IterationInterviewer3}
              alt="iteration interviewer"
              width="100%"
            />
            <ul>
              <li>
                <strong>Feedback Forms</strong> - On top of the templated
                feedback forms, interviewers can add additional
                criteria/comments that may have differed from each interview. In
                order to combat legal implications from potential misinterpreted
                feedback, our pre-approved feedback options are pulled from a
                database of options to prevent discriminatory language, ensuring
                that our platform mandates that no legal action can be taken.
              </li>
            </ul>
            <div className={Styles.Video}>
              <video muted loop controls>
                <source src={CandidateFlow} type="video/mp4" />
              </video>
            </div>
            <h3>Conclusion.</h3>
            <p>
              Despite diving head first into this project with a group of
              strangers spread all across the continent, this experience in
              tackling an prominent issue within the recruitment space has been
              nothing short of thrilling, and it wouldn't have been possible
              without such passionate and dedicated teammates. Working on
              Boomerang has taught me a lot about
              <strong> eliminating silos between multiple user groups. </strong>
              When we first approached the problem of the barriers of acquiring
              post-interview feedback, we focused solely on the job candidate
              and making a product for them. However, after having key
              conversations with interviewers, we shifted our focus on ways we
              could eliminate silos between both sides, and provide value to
              both job canadidates AND interviewers with our platform.
            </p>
            <p>
              Check out our{" "}
              <a
                className={Styles.Bounce}
                href="https://devpost.com/software/boomerang"
              >
                devpost
              </a>{" "}
              for our pitchdeck and video submission, which helped us make it to
              the Project Jam Demo Day, where we had the opportunity to pitch to
              a group of Sr. Product Managers at Google, Linkedin, Salesforce
              and more!
            </p>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default boomerang
