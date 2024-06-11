const Healthkeep = () => (
    <div className="casestudy-container">
        {/* Hero */}
        <div className="casestudy-header">
            <div className="grid two-thirds-one-third full-width-mobile extra-top-padding">
                <div className="grid-tile" style={{margin: 'auto 0'}}>
                    <div className="section-header">Health screening app</div>
                    <div className="">How user research helped guide a major pivot</div>
                </div>
                <div className="grid-tile">
                    <img className="portfolio-piece-img" src="/healthkeep-header.png" />
                </div>
            </div>
        </div>
         {/* Meta */}
         <div className="casestudy-panel">
            <div className="grid half-and-half full-width-mobile">
                <div className="gray sub-panel meta" style={{ alignSelf: 'start' }}>
                    <div>
                        <span className="medium">Date:</span><span className="thin"> 1 month</span>
                    </div>
                    <div>
                        <span className="medium">Client:</span><span className="thin"> Personal project</span>
                    </div>
                    <div>
                        <span className="medium">Tools:</span><span className="thin"> Figma, Google survey, Whimsical</span>
                    </div>
                </div>
            </div>
        </div>
        <div className="casestudy-panel">
            <div>
            You are sitting in your new doctor’s office.  
            <br /><br />
            You are asked about your recent health screenings. You did not bring your health records. You do not have access to your previous healthcare portal.
            <br /><br />
            Luckily you have Health Keep and you can quickly and securely open the app to find your most recent test results and recommendations.
            </div>
        </div>
        <div className="casestudy-panel">
            <div className="section-subheader">
                Your health in your own hands
            </div>
            <div>
            As a registered nurse at an OBGYN clinic I helped people have a better understanding of their health. I wanted to find a way for patients to have more autonomy to learn and have confidence in their health.
            <br /><br />
            Two problems I wanted to solve for:
            </div>
        </div>
        <div className="casestudy-panel">
            <div className="gray sub-panel">
                <ul>
                    <li>Medical jargon and anxiety creates barriers to understanding</li>
                    <li style={{paddingBottom: 0}}>People often do not know what procedures they have had and/or do not remember when they had them.</li>
                </ul>
            </div>
        </div>
        <div className="casestudy-panel">
            I set out to create a educational tool to help people understand what they were being screened for and what their results meant.
            <br /><br />
            But then user research changed everything. 
            <br /><br />
            After some competitve analysis and before sketching, I conducted user interviews. I learned that one of the big issues people were facing was constantly changing jobs, locations, insurance, and ultimately, healthcare providers.
            <br /><br />
            This led my to my third problem:
        </div>
        <div className="casestudy-panel">
            <div className="gray sub-panel">
                <ul>
                    <li style={{paddingBottom: 0}}>Our health care records are fragmented and/or incomplete.</li>
                </ul>
            </div>
        </div>
        <div className="casestudy-panel">
            Goals:
            <div className="extra-top-padding-sm">
                <div className="gray sub-panel">
                    <ul>
                        <li>Easily navigate and maintain personal health information</li>
                        <li>Clearly understand what is being screened for, what the results mean, and next steps</li>
                        <li style={{paddingBottom: 0}}>Decrease anxiety with an inituitive and calming interface</li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="casestudy-panel">
            <div className="section-subheader">
                People want access and autonomy over their health information
            </div>
            <div>
                User testing showed that one easily accessible place to store all health data would bring greater clarity and autonomy over your health status and how to manage your care going forward. The app is a space that offers understanding and self-advocacy.
            </div>
            <div className="extra-top-padding img-grid-container">
                <div className="gray img-grid-subcontainer">
                    <div>
                        <img src="/healthkeep-sketches1.png"/>
                        <img src="/healthkeep-sketches2.png"/>
                    </div>
                    <div>
                        <img src="/healthkeep-sketches3.png"/>
                        <img src="/healthkeep-flow.png"/>
                    </div>
                    <div style={{textAlgin: 'center', margin: 'auto'}}>
                        <i style={{fontSize: 16, lineHeight: '19px'}}>Sketches; user flow</i>
                    </div>
                </div>
            </div>
        </div>
        <div className="casestudy-panel">
            <div className="section-subheader">
                Minimalist UI to create a sense of calm
            </div>
            <div className="sense-of-calm">
                <div>
                    <img src="/healthkeep-font.png"/>
                    <img src="/healthkeep-icons.png"/>
                </div>
                <div>
                    <img src="/healthkeep-buttons.png"/>
                    <img src="/healthkeep-color.png"/>
                </div>
            </div>
        </div>
        <div className="casestudy-panel">
            <div className="section-subheader">
                Back to the drawing board
            </div>
            <div>
                Intially I kept people’s results secure and private by making a card that pulls down to reveal the result. However, during my next round of user testing I found that the card pulling down was actually confusing instead of delightful.
            </div>
            <div className="extra-top-padding">
                <div className="gray drawing-board">
                    <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                        <div className="drawing-board-img-container">
                            <img src="/healthkeep-early1.png"/>
                            <div style={{textAlign: 'center', marginTop: 10}}>
                                <i style={{fontSize: 16, lineHeight: '19px'}}>Main screen</i>
                            </div>
                        </div>
                        <div className="drawing-board-img-container">
                            <img src="/healthkeep-early2.png"/>
                            <div style={{textAlign: 'center', marginTop: 10}}>
                                <i style={{fontSize: 16, lineHeight: '19px'}}>Card reveal</i>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="extra-top-padding">
                    I went back to sketching and used an easily recognizable pattern that solved the issue of privacy while also being a more common and intuitive design.
                </div>
                
            </div>
        </div>
        <div className="casestudy-panel">
            <div className="section-subheader">
                Result storage with privacy in mind
            </div>
            <div>
                The app would be password protected and have a timed lockout if the user wasn't actively using the app. Once signed in, the results are covered and only exposed when the user pressed the arrow to reveal them. 
            </div>
            <div className="extra-top-padding">
                <div className="final-img-container">
                    <img className="final-img final-img-1" src="/healthkeep-final1.png"/>
                </div>
            </div>
        </div>
        <div className="casestudy-panel">
            <div className="section-subheader">
                Option to turn on or off due date alerts so that the user has more control over their privacy
            </div>
            <div>
                <div className="final-img-container">
                    <img className="final-img final-img-2" src="/healthkeep-final2.png"/>
                </div>
            </div>
        </div>
        <div className="casestudy-panel">
            <div className="section-subheader">
            Interpretations based on the user’s personal result history
            </div>
            <div>
                <div className="final-img-container">
                    <img className="final-img final-img-3" src="/healthkeep-final3.png"/>
                </div>
            </div>
        </div>
        <div className="casestudy-panel" style={{ paddingBottom: 120 }}>
            <div className="section-subheader">
                Future
            </div>
            <div>
                If I had more time and resources for this project it would be great to collaborate with other designers and software engineers for more feedback and to also cast a wider net of people for the user research.
                <br /><br />
                I made the app based on my experiencing in OBGYN and I would be curious to learn more about other healthcare specialities to see how the other screenings might fit into this app and how I might need to change the app to make it more adaptable to other specialities.
            </div>
        </div>
        <style jsx>{`
            .portfolio-piece-img {
                width: 335px;
                height: 249px;
                margin-top: 0;
                margin-right: 80px;
            }
            .sense-of-calm {
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: center;
            }
            .sense-of-calm img {
                margin: 10px;
                width: 357px;
            }
            .drawing-board {
                margin: auto;
                width: 692px;
                padding: 10px;
                borderRadius: 6px;
                display: flex;
                flex-direction: column;
                align-items: flex-start;
            }
            .drawing-board img {
                width: 294px;
            }
            .drawing-board-img-container {
                margin: 20px;
            }
            .final-img-1 {
                width: 561px;
            }
            .final-img-2 {
                width: 948px;
            }
            .final-img-3 {
                width: 661px;
            }
            .img-grid-container img {
                margin: 10px;
            }
            .img-grid-subcontainer {
                margin: auto;
                width: 400px;
                padding: 10px;
                border-radius: 6px;
                display: flex;
                flex-direction: column;
                align-items: flex-start;
            }
            .img-grid-subcontainer > div {
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: center;
            }
            .img-grid-subcontainer img {
                width: 166px;
            }
            @media only screen and (max-width: 767px) {
                .img-grid-subcontainer {
                    width: 327px;
                }
                .img-grid-subcontainer img {
                    width: 148px;
                }
                .portfolio-piece-img {
                    margin-top: 33px;
                    margin-right: 0;
                }
                .sense-of-calm {
                    flex-direction: column;
                }
                .sense-of-calm > div {
                    flex-direction: column;
                    display: flex;
                }
                .sense-of-calm img {
                    width: 327px;
                }
                .img-grid-container img {
                    margin: 4px;
                }
                .drawing-board {
                    width: 327px;
                }
                .drawing-board img {
                    width: 130px;
                }
                .drawing-board-img-container {
                    margin: 10px;
                }
                .final-img {
                    
                }
                .final-img-1 {
                    width: 328px;
                }
                .final-img-2 {
                    width: 327px;
                }
                .final-img-3 {
                    width: 327px;
                }
            }
        `}</style>
    </div>
);

export default Healthkeep;