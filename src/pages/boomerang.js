import React from 'react'
import Layout from "../components/layout"
import Styles from "./index.module.scss"
import Boomerang1 from '../images/boomerang.png'
import Boomerang2 from '../images/boomerang-2.png'
import Demo from '../images/boomerang-demo.gif'

const boomerang = () => {
    return (
        <Layout>
            <div className={Styles.BoomerangBanner}>
                <div className={Styles.Container}>
                <h2>Boomerang</h2>
                <h3>Providing growth opportunities through simple, enlightening feedback.</h3>
                <img src={Boomerang1} alt="Boomerang" />
                <img src={Boomerang2} alt="Boomerang" />
                </div>
            </div>
            <div className={Styles.ProjectOverview}>
                <div className={Styles.Container}>
                    <div className={Styles.Details}>
                        <div>
                            <h3>Skills</h3>
                            <p>Product Management, UX/UI Design, Market Research, User Interviews, User Personas</p>
                        </div>
                        <div>
                            <h3>Team Members</h3>
                            <p>Vicky Liu, Luke Levasseur, Lucy Liu, Jacob Brown</p>
                        </div>
                    </div>
                    <div className={Styles.Overview}>
                        <h3>Overview.</h3>
                        <p>Back in May 2020, whilst browsing through LinkedIn, I happened to stumble upon a pilot initiative as part of Product Buds, a community Slack channel that aims to to grow, educate, and deliver the necessary resources for anyone to be able to break into the field of product management.
                            Their initiative was called "Project Jam", and the premise? To go through the product development lifecycle and research, ideate, and prototype a newly-conceptualized product.
                            Through the Product Buds community, I was able to meet Vicky Liu, and Luke Levasseur, and we decided to tackle a pressing issue in the job industry: Receiving interview feedback from a company as a job candidate.
                        </p>
                        <h3>Problem.</h3>
                        <p>As students who've gone through the job interview process, we've all dealth the struggle of rejection. However, what's especially frustrating is when a candidate reaches out to their interviewer for feedback, only to get ghosted, or receive the ol' "Sorry, there was just a better candidate than you" response, without any actionable feedback.</p>
                        <p>After weeks of conducting research through surveys and interviews with both job candidates and interviewers alike, we found that out of the 94% of candidates who want feedback, 60% don’t receive feedback. Of those that don’t receive feedback, 77% of them were “ghosted” by their interviewer. Even for those who were lucky enough to receive feedback, 76% of candidates found the feedback to be useless.</p>
                        <p>So why don’t companies give feedback? There are three main obstacles that they face: Lack of time due to hundreds of interviews, fear of legal implications from misinterpreted feedback, and complex hiring processes that prevent connecting the person who wrote the feedback from sharing it with candidates.</p>
                        
                        <h3>Solution.</h3>
                        <p>Using the valuable data our team collected, we created Boomerang, a platform that streamlines the interview feedback process, where interviewers can give feedback on a job applicant's interview performance in exchange for the candidate's feedback on the company's hiring process. One surprising trend from our initial research, is that the major of ompanies want to give feedback because giving feedback is investing in future talent. We found that candidates who receive feedback will share their positive experience, improve their skills and are 4X more likely to consider future opportunities with the company. 
                        </p>
                        <p>Using boomerang, we can bring value to both parties through trading feedback. Candidates must complete a feedback form for the company in order to receive their interview feedback. Boomerang will facilitate this exchange with specific and constructive forms that address the obstacles that companies face.</p>
                    
                        <h3>Result.</h3>
                        <p>After 3 months of researching, ideating, and prototyping, our team made it to the final pitch day, where the 30 teams that started at the beginning of the cycle, were narrowed down to just 7. On Demo Day, we pitched to a panel of 6 Sr. Product Managers in-front of a live audience over zoom.
                            After going through the initial nerves, and riding through the wave of emotions, questions asked by the judges, and choppy wifi connection, we managed to end up in 1st place! The entire process was an incredibly rewarding experience and I could not have done it without the collaboration, knowledge, and hard-work that each of my teammates brought to the table for those three months.
                        </p>
                        <p>So this begs the question, what's next for Boomerang? Stay tuned to find out... In the mean time, check out our <a className={Styles.Bounce} href="https://devpost.com/software/boomerang">devpost</a> for our demo and pitchdeck!</p>
                        <div style={{textAlign: "center"}}>
                            <img src={Demo} alt="demo" />
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default boomerang
