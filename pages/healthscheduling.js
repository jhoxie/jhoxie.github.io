const HealthScheduling = () => (
    <div className="casestudy-container">
        {/* Hero */}
        <div className="casestudy-header">
            <div className="grid two-thirds-one-third full-width-mobile extra-top-padding">
                <div className="grid-tile" style={{ marginLeft: 0 }}>
                    <div className="section-header">Healthcare scheduling app</div>
                    <div>Improve appointment scheduling at a specialized heath clinic</div>
                </div>
                <div className="grid-tile">
                    <img className="portfolio-piece-img" src="/apptapp-header.png"/>
                </div>
            </div>
        </div>
         {/* Meta */}
         <div className="casestudy-panel">
            <div className="grid one-third-two-thirds full-width-mobile extra-top-padding no-top-padding-mobile">
                <div className="gray sub-panel meta">
                    <div>
                        <span className="">Client:</span><span className="thin"> Personal project</span>
                    </div>
                    <div>
                        <span className="">Date:</span><span className="thin"> September 2019</span>
                    </div>
                    <div>
                        <span className="">Tools:</span><span className="thin"> Figma, Invision</span>
                    </div>
                </div>
                <div className="quote-blue sub-panel">
                    “How might we make scheduling appointments more accessible and efficient for patients?”
                </div>
            </div>
            <div className="extra-top-padding problems">
                <div className="section-subheader">
                    Problems
                </div>
                <div style={{flex: '1 0 none'}}>
                    An OBGYN clinic I worked at did not have online scheduling. Patients would either have to call to schedule or send a message to the provider through an online portal. This was time consuming and inconvenient for patients.
                    <br /><br />
                    There are many factors that go into scheduling such as provider availability, sufficient back office staffing, room availability, and considerations appointment type (i.e. time, supplies)
                </div>
            </div>
        </div>
        <div className="casestudy-panel">
            <div className="section-subheader">
                POV Statements
            </div>
            <div className="grid half-and-half full-width-mobile grid-gap">
                <div className="quote-text">
                    “Alexa is a mother and night shift nurse who needs to book appointments on the go and during off hours so that she can sleep and run other errands during the day.”
                </div>
                <div className="quote-text">
                    “Mina is commuting a long distance to make her appointment and needs to explore several appointment options to determine when would be the best time with the least amount of traffic.”
                </div>
            </div>
        </div>
        <div className="casestudy-panel">
            <div className="section-subheader">
                Ideation for making an online scheduling portal
            </div>
            <img className="grid-image-scheduling hidden-mobile" src="/scheduling-ideation.png"/>
            <img className="grid-image-scheduling hidden-gt-mobile" src="/apptapp-ideation-mobile.png"/>
        </div>
        <div className="casestudy-panel">
            <div className="section-subheader">
                Simplify the experience with progressive disclosure
            </div>
            <div>
                In order to not overwhelm the user and to keep their expectations grounded they had to answer each question successively. 
                <br /><br />
                For example if a patient chose a provider first and it turned out that provider didn’t perform that procedure then they may be disappointed or frustrated to have to start the process over again.
            </div>
            <div className="sides-80">
                <div className="grid thirds full-width-mobile extra-top-padding">
                    <img className="grid-image-scheduling" src="/healthsched-progressive-appt.png" />
                    <img className="grid-image-scheduling" src="/healthsched-progressive-selected.png" />
                    <img className="grid-image-scheduling" src="/healthsched-progressive-portal.png" />
                </div>
            </div>
            <div className="extra-top-padding">
                When choosing the date, time, and provider I kept it all on the same screen so that the user could easily toggle between different providers or different days to find a time that would work best for them.
            </div>
            <div className="sides-80">
                <div className="grid thirds full-width-mobile extra-top-padding">
                    <img className="grid-image-scheduling" src="/healthshed-dateselected.png" />
                    <img className="grid-image-scheduling" src="/healthsched-timeselected.png" />
                    <img className="grid-image-scheduling" src="/healthsched-confirm.png" />
                </div>
            </div>
        </div>
        <div className="casestudy-panel">
            <div className="section-subheader">
                Landing page
            </div>
            <div className="grid two-thirds-one-third full-width-mobile grid-gap extra-top-padding no-top-padding-mobile">
                <img className="grid-image-scheduling" style={{ paddingLeft: 56, paddingRight: 56 }} src="/scheduling-sfobgyn-landing.png" />
                <img className="grid-image-scheduling" src="/scheduling-sfobgyn-mobilelanding.png"/>
            </div>
        </div>
        <style jsx>{`
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
                width: 381px;
                height: 283px;
            }
            .problems {
                display: flex;
                flex-direction: row;
            }
            .problems > .section-subheader {
                flex: 0 0 none;
                padding-right: 40px;
            }
            @media only screen and (max-width: 767px) {
                .portfolio-piece-img {
                    margin-top: 18px;
                    width: 184px;
                    height: 121.59px;
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
                 .sub-panel:first-of-type {
                     margin-bottom: 18px;
                 }
            }
        `}</style>
    </div>
);

export default HealthScheduling;