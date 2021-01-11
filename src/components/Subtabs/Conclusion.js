import React, { useState } from "react"
import Styles from "./Conclusion.module.scss"
import CandidateTab from "./CandidateTab"
import InterviewerTab from "./InterviewerTab"
import classname from "classnames"

const Conclusion = () => {
  const tabs = [
    {
      title: "Candidate View",
      tabName: <CandidateTab />,
    },
    {
      title: "Interviewer View",
      tabName: <InterviewerTab />,
    },
  ]

  const Tabgroup = () => {
    const [active, setActive] = useState(tabs[0].tabName)
    return (
      <div>
        <nav className={Styles.TabGroup}>
          {tabs.map(tab => (
            <button
              className={classname(Styles.Tab, {
                [Styles.active]: active === tab.tabName,
              })}
              key={tab.title}
              onClick={() => setActive(tab.tabName)}
            >
              {tab.title}
            </button>
          ))}
        </nav>
        {active}
      </div>
    )
  }

  return (
    <div>
      <Tabgroup />
    </div>
  )
}

export default Conclusion
