const EligibilityQuiz = () => (
    <div className="casestudy-container">
        {/* Hero */}
        <div className="casestudy-header">
            <div className="section-header">Case Study: Tech Equity Eligibility Quiz</div>
            <div className="flex" style={{ marginTop: 60 }}>
                <img className="portfolio-piece-img" src="/TEMOCK.png" />
            </div>
        </div>
        {/* Meta */}
        <div className="casestudy-panel">
            <div className="grid one-third-two-thirds problems full-width-mobile extra-top-padding no-top-padding-mobile">
                <div className="gray sub-panel meta no-wrap">
                    <div>
                        <span className="">Client:</span><span className="thin"> Tech Equity</span>
                    </div>
                    <div>
                        <span className="">Date:</span><span className="thin"> December 2021</span>
                    </div>
                    <div>
                        <span className="">Tools:</span><span className="thin"> Figma, Google docs</span>
                    </div>
                </div>
            </div>
        </div>
        <div className="casestudy-panel">
            <div className="section-subheader extra-top-padding-sm">Project Overview</div>
            <div>
                Tech Equity has a suite of products including a quiz that renters in California can fill out to verify their eligibility for rent control under state law. This quiz is particularly useful for people who’ve recently had a rent increase that they think may be illegal. My main task was to redesign the quiz to scale for local city laws and decrease quiz abandonment.
            </div>
        </div>
        <div className="casestudy-panel">
            <div className="section-subheader extra-top-padding-sm">Problem</div>
            <div>
                <ul className="no-bottom-padding">
                    <li>User testing showed that people felt that the quiz was too long or expressed frustration with not knowing how far along they were in the quiz. </li>
                    <li>People struggled to know the answers to some of the quiz questions. </li>
                    <li>The current flow did not include local laws that may impact eligibility.</li>
                </ul>
            </div>
        </div>
        <div className="casestudy-panel">
            <div className="section-subheader extra-top-padding-sm">Solution</div>
            <div>
                <ul className="no-bottom-padding">
                    <li>Rework the quiz flow using conditional logic for efficiency and variable questions. </li>
                    <li>Visibily show users how long the quiz is and provide resources to answer questions they may not know the answers to decrease frustration and increase quiz completion rates. </li>
                    <li>Expand quiz to include complex local laws while maintaining visual simplicity.</li>
                </ul>
            </div>
        </div>
        <div className="casestudy-panel">
            <div className="section-subheader extra-top-padding-sm">Before</div>
            <div>
                <img className="grid-image" style={{ maxWidth: 1041, marginBottom: 16 }} src="/TE-BeforeQ.png" />
            </div>
            <div>
            </div>
        </div>
        <div className="casestudy-panel">
            <div className="section-subheader extra-top-padding-sm">Research
            </div>
            <div>
                We had a research team compile a spreadsheet of everything that determines eligibility.
                <br></br>
            </div>
            <div className="extra-top-padding">
                <img className="grid-image" style={{ maxWidth: 1041, marginBottom: 16 }} src="/TERS.png" />
            </div>
        </div>
        <div className="casestudy-panel">
            <div className="section-subheader extra-top-padding-sm">User flow
            </div>
                I extrapolated the information from the spreadsheet to make a user flow that considers both state and city eligibility as the user moves through the quiz.
            <div className="extra-top-padding">
                    <img className="grid-image" style={{ maxWidth: 1041, marginBottom: 30 }} src="/TEUF.png" />
                </div>
                I reworked the quiz flow using conditional logic to allow for efficiency and variable questions where the subsequent question would be based on the previous answer. This solution means that people would only answer questions relevant to their situation. 
                <br></br>
                <br></br>
                This process helped me think through the max workflow so I could determine which components needed to be designed.
        </div>
        <div className="casestudy-panel">
            <div className="section-subheader extra-top-padding-sm">Version 1</div>
            <div>
                    <img className="grid-image" style={{ maxWidth: 1041, marginBottom: 16 }} src="/TEV1 (1).png" />
                <br></br>
                The vertical progress bar shows the user how far along they are in the quiz. The numbers and check marks are clickable so you can go back to change your answer.
                < br /><br />
                After answering each question the user will either move on to the next question or be directed to their result. For example, if they answer yes to the first question they would be directed to the ‘ineligible’ result without completing the rest of the steps. In a design critique we decided that the sudden jump in this context may be too abrupt and cause confusion.
            </div>
        </div>
        <div className="casestudy-panel">
            <div className="section-subheader extra-top-padding-sm">Version 2</div>
            <div>
                Alternatively, I designed an abstract horizontal progress bar showing how far the user has progressed but without concrete numbers. The abstract progress bar causes less confusion for someone who may jump to the results early on in the quiz compared to Version 1.
                < br /><br />
                Version 2 follows the Tech Equity style guidelines with some minor changes that I made in order to be <a href="https://www.w3.org/WAI/standards-guidelines/wcag/" target="_blank">WCAG</a> compliant.
                <br></br>
                <div className="extra-top-padding"></div>
                <img className="grid-image" style={{ maxWidth: 1041, marginBottom: 16 }} src="/TEWF (1).png" />
            </div>
        </div>
        <div className="casestudy-panel">
            <div className="section-subheader extra-top-padding-sm">Team testing</div>
            <div>
                I tested the two design versions with our cross functional team. We decided that Version 2 was the winner. Version 2 followed well known design patterns so I didn’t think it need as much testing compared to another project our team was also working on at the time. I decided to use the rest of my time to test the more complex design project and keep this one leaner.
                <br></br>
                <div className="extra-top-padding"/>
                <img className="grid-image" style={{ maxWidth: 1041, marginBottom: 16 }} src="/TE-MDMOCK.png" />
            </div>
        </div>
        <div className="casestudy-panel">
            <div className="section-subheader extra-top-padding-sm">Next Steps</div>
            <div>
                Engineering is currently building the quiz. I will help with the QA process along with other team members to ensure the design is implemented accurately. Then the plan is to release the quiz locally to only the Bay Area so that we can work out any issues that may arise before releasing to all of California.
            </div>
        </div>
        <style jsx>{`
            a {
                text-decoration: underline;
            }
            .before {
                color: #EE595B;
            }
            .after {
                color: #2AC3A9;
            }
            .quote-text {
                font-weight: normal;
                font-size: 18px;
                line-height: 36px;
                padding: 36px;
                padding-bottom: 72px;
                background-image: url("/quote-container.svg");
                text-align: center;
            }
            .grid-image-scheduling {
                object-fit: cover;
                width: 100%;
            }
            .portfolio-piece-img {
                max-width: 721.67px;
            }
            .problems {
                // display: flex;
                // flex-direction: row;
                align-items: center;
            }
            .problems > .section-subheader {
                flex: 0 0 none;
                padding-right: 40px;
            }
            .disclaimer {
                font-family: Roboto;
                font-weight: 300;
                font-size: 18px;
                line-height: 30px;
                margin-left: 42;
            }
            .color-swatch {
                display: inline-block;
                width: 18px;
                height: 18px;
                background-color: #3582EC;
                margin-right: 8px;
             }
             .color-swatch.blue {
                background-color: #3582EC;
             }
             .color-swatch.green {
                background-color: #2AC3A9;
             }
             .color-swatch.purple {
                background-color: #A964E7;
             }
             .color-swatch-text {
                font-size: 16px;
                line-height: 16px;
                margin-right: 20px;
             }
             .color-swatch-container {
                padding-top: 16px;
                padding-bottom: 16px;
                align-items: center;
                display: flex;
             }
             .grid-image {
                max-width: 100%;
                width: 100%;
             }
             .sub-panel.gray {
                padding: 20px;
             }
             .no-wrap {
                white-space: nowrap;
             }
            @media only screen and (min-width: 768px) {
                .disclaimer {
                    margin-left: 42px;
                }
                .sub-panel-subheader {
                    margin-bottom: 16px;
                    font-size: 16px;
                }
            }
            @media only screen and (max-width: 767px) {
                .meta {
                    width: 100%;
                }
                .portfolio-piece-img {
                    margin-bottom: 50px;
                    width: 300px;
                }
                .problems {
                    flex-direction: column;
                }
                .problems > .section-subheader {
                    padding-right: 0x;
                }
                .quote-text {
                    font-size: 12px;
                    line-height: 26px;
                    padding: 24px 12px;
                    padding-bottom: 50px;
                }
                .quote-text:first-of-type {
                    margin-bottom: 18px;
                }
                .grid-image-scheduling {
                    margin-top: 30px;
                 }
                .grid-image-scheduling:first-of-type {
                    margin-top: 0px;
                 }
                .sub-panel {
                    white-space: normal;
                }
                 .sub-panel:first-of-type {
                    margin-bottom: 18px;                     
                 }
                 .sub-panel.gray {
                    padding: 8px;
                    padding-left: 16px;
                    padding-right: 16px;
                 }
            }
        `}</style>
    </div>
);

export default EligibilityQuiz;