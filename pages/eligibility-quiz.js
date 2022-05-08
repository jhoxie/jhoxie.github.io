const EligibilityQuiz = () => (
    <div className="casestudy-container">
        {/* Hero */}
        <div className="casestudy-header-new">
            <div className="flex">
                <img className="portfolio-piece-img" src="/TEEQHero.png" />
            </div>
            <div style={{ marginTop: 100 }}className="section-header">Rent Control Quiz &amp; Calculator</div>
        </div>
        {/* Meta */}
        <div className="casestudy-panel">
            <div className="section-subheader extra-top-padding">Project Overview</div>
            <div>
            Renters in California can verify their eligibility for rent control and a calculate whether or not their rent increases are legal using Tech Equity’s quiz and calculator.            
            <br></br><div className="extra-top-padding-sm"></div>
            The quiz needed to be redesigned to <b>scale for state and local city laws</b> and to <b>decrease quiz abandonment</b>. The calculator needed to <b>allow for multiple rent increases over time</b>.
            </div>
        </div>
        <div className="casestudy-panel">
            <div className="section-subheader">My Role</div>
            <div>
            As the only designer on the team, I was tasked to redesign the quiz and the calculator. I was responsible for creating the user flow, wireframing, prototyping,  user testing, synthesizing research, and iterating on final designs.
            </div>
        </div>
        <div className="casestudy-panel">
            <div className="section-subheader">Duration</div>
            <div>
            3 months (part time)           
            </div>
        </div>
        <div className="casestudy-panel extra-extra-bottom-padding">
            <div className="section-subheader">Tools</div>
            <div>
            Figma, Google Sheets         
            </div>
        </div>
        <div className="casestudy-panel alt-panel-bg extra-top-padding">
            <div className="section-subheader extra-top-padding">Problems</div>
            <div>
                <ul className="no-bottom-padding">
                    <li>User testing showed the quiz felt too long and people expressed frustration with not knowing how close they were to completion. </li>
                    <li>People struggled to know the answers to some of the quiz questions.</li>
                    <li>The current flow did not include local laws that may impact eligibility.</li>
                    <li>Users wanted to check if multiple rent increases over time (past and present) were legal.</li>
                </ul>
            </div>
        </div>
        <div className="casestudy-panel alt-panel-bg extra-extra-bottom-padding">
            <div className="section-subheader extra-top-padding">Solutions</div>
            <div>
                <ul className="no-bottom-padding">
                    <li>Quiz flow uses conditional logic to allow for efficiency and variable questions. </li>
                    <li>Visually indicate how far along people are in the quiz and provide resources to answer questions to decrease abandonment. </li>
                    <li>Expand quiz to include complex local laws while maintaining visual simplicity.</li>
                    <li>Include multiple rent increase inputs.</li>
                </ul>
            </div>
        </div>
        <div className="casestudy-panel extra-top-padding">
            <div className="section-subheader extra-top-padding">Sneak peek of the before &amp; after</div>
            <div>
                <img className="grid-image" style={{ maxWidth: 1041, marginBottom: 16 }} src="/TE-SneakBAA.png" />
            </div>
            <div>
            </div>
        </div>
        <div className="casestudy-panel extra-extra-bottom-padding">
            <div className="section-subheader extra-top-padding">Design audit</div>
            <div className="">
                I audited the current state of the product to find opportunities to optimize the design.
            </div>
            <div className="grid half-and-half full-width-mobile extra-top-padding-sm">
                <img className="grid-image" src="/TE-BeforeQ.png" />
                <img className="grid-image" src="/TE-BeforeRC.png" />
            </div>
            <div>
            </div>
        </div>
        <div className="casestudy-panel alt-panel-bg extra-top-padding">
            <div className="section-subheader extra-top-padding">Research
            </div>
            <div>
            A research team compiled a spreadsheet of all the factors that determine rent control eligibility.                <br></br>
            </div>
            <div className="extra-top-padding-sm">
                <img className="grid-image" style={{ maxWidth: 1041, marginBottom: 16 }} src="/TERS.png" />
            </div>
        </div>
        <div className="casestudy-panel alt-panel-bg extra-extra-bottom-padding">
            <div className="section-subheader extra-top-padding-sm">Userflow</div>
            <div>
                I synthesized the information from the spreadsheet to make an efficient user flow that includes both state and city eligibility. 
                <br></br>
                <div className="extra-top-padding-sm"></div>
                The flow uses conditional logic and variable questions where the next question is based on the previous question’s answer. 
                This allows for efficiency and for people to only be asked questions relevant to that their experience.
                <br></br>
                <div className="extra-top-padding-sm"></div>
                I determined the max workflow to figure out what design patterns and forms need to be designed. 
                <div className="extra-top-padding-sm"></div>
                    <img className="grid-image" style={{ maxWidth: 1041, marginBottom: 30 }} src="/TEUF.png" />
            </div>
        </div>
        <div className="casestudy-panel extra-top-padding extra-extra-bottom-padding">
            <div className="section-subheader extra-top-padding">Lofi explorations</div>
            <div className="thin-border-indigo">
                <b>Eligibility Quiz</b>
                <div className="extra-top-padding-sm"></div>
                    <img className="grid-image" style={{ maxWidth: 1041, marginBottom: 16 }} src="/TE-EQlofi1.png" />
                    <b>Option 1.</b> The vertical progress bar shows the user how far along they are in the quiz. The numbers and check marks would be clickable so you can go back to change your answer.
                <br></br>                
                <div className="extra-top-padding-sm"></div>
                After answering each question the user will either move on to the next question or be directed to their result. For example, if they answer yes to the first question they would be directed to the ‘ineligible’ result without completing the rest of the steps. The problem with this is that the sudden jump in this context may be too abrupt and cause confusion.
                <div className="extra-top-padding"></div>
                    <img className="grid-image" style={{ maxWidth: 1041, marginBottom: 16 }} src="/TE-EQlofi2.png" />
                    <b>Option 2.</b> Alternatively, I designed an abstract horizontal progress bar showing how far the user has progressed but without concrete numbers. The abstract progress bar causes less confusion for someone who may jump to the results early on in the quiz compared to option 1. 
                </div>
            <br></br>
            <div className="extra-top-padding"></div>
            <div className="thin-border-indigo">
                <b>Calculator</b>  
                <div className="extra-top-padding-sm"></div>
                <img className="grid-image" style={{ maxWidth: 1039, marginBottom: 16 }} src="/TE-RClofi1.png" />
                <b>Option 1.</b> This shows the calculator as a form input. After entering the rent increase and date, the two inputs are grouped together in a box that is editable. This gives the user feedback that they successfully completed the input and creates visual organization. However, I still felt this design was a bit overwhelming especially on the initial screen.
                <div className="extra-top-padding"></div>
                <img className="grid-image" style={{ maxWidth: 1039, marginBottom: 16 }} src="/TE-RClofi2.png" />
                <b>Option 2.</b> This design is simpler visually and more conversational where it asks one question at a time to guide the user through a flow. After each input is successfully completed it gets groups into an editable box that is placed on a timeline. This gives the user feedback of completion and organizes the elements chronologically.
            </div>
        </div>
        <div className="casestudy-panel alt-panel-bg extra-top-padding">
            <div className="section-subheader extra-top-padding">Team testing</div>
            <div>
            I tested the two design options for the quiz with our cross functional team and we decided to proceed with the option 2. I polished up the design using the Tech Equity style guidelines with some minor changes for WCAG compliance. This design followed enough well known design patterns that I didn’t think it need as much testing compared to the calculator. As a team we decided to move forward with option 2 for the calculator. I polished up the design and decided to use the rest of my time to user test the calculator.
            </div>
        </div>
        <div className="casestudy-panel alt-panel-bg">
            <div className="section-subheader extra-top-padding">User testing with hifi protype</div>
            <div>
            I tested the high fidelity clickable prototype with a group of California renters of various age groups to see if the workflow made sense. I compiled the feedback and created an action plan to make changes to the design based on the findings.                <br></br>
                <div className="extra-top-padding-sm"/>
                <img className="grid-image" style={{ maxWidth: 1041, marginBottom: 16 }} src="/TE-usertestingnotion.png" />
            </div>
        </div>
        <div className="casestudy-panel alt-panel-bg extra-extra-bottom-padding">
            <div className="section-subheader extra-top-padding">Major Finding</div>
            <div>
            Across the board users reacted negatively to the jump between these two screens:                
                <div className="extra-top-padding-sm"/>
                <img className="grid-image" style={{ maxWidth: 1041, marginBottom: 16 }} src="/TE-UTtransition.png" />
                Due to the red color and caution symbol everyone initially thought that they made a mistake after entering their rent. 
                <div className="extra-top-padding"></div>
                I updated the result to a neutral color and switched out the caution sympbol. I changed the “add more dates” button to a design more consistent with how the rest of the questions were asked in order to better inform the user how to interact with that feature.
                <div className="extra-top-padding-sm"/>
                <img className="grid-image" style={{ maxWidth: 1041, marginBottom: 16 }} src="/TE-UTbaa.png" />
            </div>
        </div>
        <div className="casestudy-panel extra-top-padding">
            <div className="section-subheader extra-top-padding center-text">Final Design: Eligibility Quiz</div>
            <div className="extra-top-padding-sm"/>
                <img className="grid-image" style={{ maxWidth: 1041, marginBottom: 16 }} src="/TE-EQideationoverview.png" />
            Final flow:
            <div className="extra-top-padding-sm"/>
                <img className="grid-image" style={{ maxWidth: 1041, marginBottom: 16 }} src="/TE-EQfinalflowdesktop.png" />
            Responsive design:
            <div className="extra-top-padding-sm"/>
                <img className="grid-image" style={{ maxWidth: 1041, marginBottom: 16 }} src="/TE-EQresponsive.png" />
        </div>   
        <div className="casestudy-panel">
            <div className="section-subheader extra-top-padding center-text">Final Design: Calculator</div>
            <div className="extra-top-padding-sm"/>
            <img className="grid-image" style={{ maxWidth: 1041, marginBottom: 16 }} src="/TE-CalcIterations.png" />
        </div>
        <div style={{ marginLeft: 66 }}>
            Final mockups:
        </div>
        <img className="grid-image" src="/TE-RCfinal.png" />
        <div className="casestudy-panel final-design-panel-bg extra-extra-bottom-padding">
            <div className="section-subheader extra-top-padding">Next Steps</div>
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
                max-width: 100%;
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
                    width: 1279px;
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