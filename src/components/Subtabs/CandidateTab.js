import React from "react"
import Styles from "../../pages/index.module.scss"
import IterationCandidate1 from "../../images/iteration-candidate-1.png"
import IterationCandidate2 from "../../images/iteration-candidate-2.png"
import CandidateFlow from "../../images/candidate-flow.mp4"

const CandidateTab = () => {
  return (
    <div className={Styles.InterviewerTab} style={{ paddingTop: "1em" }}>
      <ul className={Styles.InterviewerConclusion}>
        <li>
          <strong>Slight Dashboard Redesign</strong> - List of interviews are
          put into a single block component, separated by lines, as opposed to
          having a block for each interview.
        </li>

        <li>
          <strong>Removal of Notification Tab</strong> - After user testing
          within our team, we deemed that the notifications tab was unnecessary
          as feedback statuses would be clearly visible in all other tabs.
        </li>
        <li>
          <strong>Feedback Forms (For Candidate)</strong> - Clear breakdown of
          feedback, between general, behavioral, and technical feedback
          sections.
        </li>
      </ul>
      <img src={IterationCandidate1} alt="iteration candidate" width="100%" />
      <ul className={Styles.InterviewerConclusion}>
        <li>
          <strong>Feedback Forms (For Interviewer)</strong> - Instead of using a
          1-5 rating system, which can be a very subjective and
          hard-to-interpret rating system, we opted for a descriptive rating
          system, which would allow for greater clarity on what the candidate
          liked and disliked about the recruitment process, when filling out the
          feedback form to the company.
        </li>
        <li>
          <strong>Reorganization of feedback</strong> - Adding an “Action Items”
          tab gives the candidate greater clarity on which company’s they must
          submit their feedback forms to, while consolidating the feedback
          they’ve already received and given into another tab.
        </li>
      </ul>
      <img src={IterationCandidate2} alt="iteration candidate" width="100%" />
      <ul className={Styles.InterviewerConclusion}></ul>
      <div className={Styles.Video}>
        <video muted loop controls>
          <source src={CandidateFlow} type="video/mp4" />
        </video>
      </div>
    </div>
  )
}

export default CandidateTab
