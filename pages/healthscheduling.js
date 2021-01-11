const HealthScheduling = () => (
    <div className="casestudy-container">
        {/* Hero */}
        <div className="casestudy-header">
            <div className="section-header">Healthcare scheduling app</div>
            <div>Improve appointment scheduling at a specialized heath clinic</div>
            <div className="flex" style={{ marginTop: 60 }}>
                <img className="portfolio-piece-img" src="/apptapp-header-2.png" />
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
                <div className="grid full-width">
                    <div className="section-subheader extra-top-padding">
                        Prototype
                    </div>
                    <video controls
                        src="/Schedule_Prototype.mov"
                        poster="/scheduling-cover.png"
                        className="grid-image extra-top-padding-sm"
                        style={{maxWidth: 686, width: '100%'}}
                        autoPlay loop muted playsInline />
                </div>
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
                max-width: 708.22px;
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