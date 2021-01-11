import React from "react"
import Styles from "../../pages/index.module.scss"
import IterationInterviewer1 from "../../images/iteration-interviewer-1.png"
import IterationInterviewer2 from "../../images/iteration-interviewer-2.png"
import IterationInterviewer3 from "../../images/iteration-interviewer-3.png"
import InterviewerFlow from "../../images/interviewer-flow.mp4"

const InterviewerTab = () => {
  return (
    <div className={Styles.InterviewerTab} style={{ paddingTop: "1em" }}>
      <ul className={Styles.InterviewerConclusion}>
        <li>
          <strong>Addition of Interviewer Account</strong> - List of candidates
          displayed on the main dashboard of the interviewer's account, where
          interviewers are able to submit and access feedback for each candidate
          in an identical fashion to the candidate-side account.
        </li>
        <li>
          <strong>Applicant Tracking System (ATS) Integration</strong> - Allows
          our platform to connect with existing ATS’s (ex. Greenhouse, Jobvite)
          through their APIs, auto-populating our main dashboard with a list of
          job candidates, thus removing the tediousness of manually entering in
          applicant names.
        </li>
      </ul>
      <img
        src={IterationInterviewer1}
        alt="iteration interviewer"
        width="100%"
      />
      <ul className={Styles.InterviewerConclusion}>
        <li>
          <strong>Stock Roles</strong> - Our templated feedback forms (also
          known as “Stock Roles”) lets companies to customize their candidate
          feedback forms for each job posting, allowing them to specify the
          skills that they are being evaluated on for the specific role, and
          reuse that base template when interviewers fill out their feedback
          forms for each candidate.
        </li>
      </ul>
      <img
        src={IterationInterviewer2}
        alt="iteration interviewer"
        width="100%"
      />
      <ul className={Styles.InterviewerConclusion}>
        <li>
          <strong>Feedback Forms</strong> - On top of the templated feedback
          forms, interviewers can add additional criteria/comments that may have
          differed from each interview. In order to combat legal implications
          from potential misinterpreted feedback, our pre-approved feedback
          options are pulled from a database of options to prevent
          discriminatory language, ensuring that our platform mandates that no
          legal action can be taken.
        </li>
      </ul>
      <img
        src={IterationInterviewer3}
        alt="iteration interviewer"
        width="100%"
      />
      <div className={Styles.Video}>
        <video muted loop controls>
          <source src={InterviewerFlow} type="video/mp4" />
        </video>
      </div>
    </div>
  )
}

export default InterviewerTab
