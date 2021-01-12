const Discovery = () => (
    <div className="casestudy-container">
        {/* Hero */}
        <div className="casestudy-header">
            <div className="section-header">Discovery experience for a Patreon-like platform </div>
            <div>Creating credibility and community through browsing</div>
            <div className="flex" style={{ marginTop: 60 }}>
                <img className="portfolio-piece-img" src="/discovery-1.png" />
            </div>
        </div>
         {/* Meta */}
         <div className="casestudy-panel">
            <div className="grid one-third-two-thirds problems full-width-mobile extra-top-padding no-top-padding-mobile">
                <div className="gray sub-panel meta no-wrap">
                    <div>
                        <span className="">Client:</span><span className="thin"> Ampled</span>
                    </div>
                    <div>
                        <span className="">Date:</span><span className="thin"> December 2020</span>
                    </div>
                    <div>
                        <span className="">Tools:</span><span className="thin"> Figma, Slack</span>
                    </div>
                </div>
                <div className="disclaimer">
                    <p><i>Disclaimer:</i> The artists featured here are purely for mock up purposes. These artists are currently on the platform.</p>
                </div>
            </div>
        </div>
        <div className="casestudy-panel">
            <div>
                Ampled is a cooperative that is similar to Patreon but exclusively for muscians where the musicians are the owners. People go to the website to give monetary support to muscians and receive exclusive content.
            </div>
        </div>
        <div className="casestudy-panel">
            <div className="section-subheader extra-top-padding-sm">Problem</div>
            <p>
                A common ask from users was to make an artist browse/discovery feature. Both artists and new users wanted an easy way to see who else was on the platform.
            </p>
        </div>
        <div className="casestudy-panel">
            <div className="section-subheader extra-top-padding-sm">Why is this important?</div>
            <p>
                Artist discovery is not a primary goal of the platform but as we continued to hear from users we learned that an artist browse page would aid in credibility (especially as we are a new platform asking for people to enter in their credit card information), a sense of community, and people learning more about the platform.
            </p>
        </div>
        <div className="casestudy-panel">
            <div className="section-subheader extra-top-padding-sm">Goals</div>
            <ul>
                <li>Build trust among musicians and supporters</li>
                <li>Increase the number of users</li>
                <li>Teach new users about the platform</li>
            </ul>
        </div>
        <div className="casestudy-panel">
            <div className="section-subheader extra-top-padding-sm">Highlight ownership</div>
            <div>
                Becoming an owner is milestone experience so I thought it would be nice to highlight new artist owners at the top.
            </div>
            <div className="grid full-width">
                <img className="grid-image extra-top-padding-sm" style={{ maxWidth: 686 }} src="/discovery-2.png" />
            </div>
        </div>
        <div className="casestudy-panel">
            <div className="section-subheader extra-top-padding-sm">Credibility</div>
            <div>
            The “featured” section is the default browse state. Featured artists are based on a combination of factors: a recently updated supporter page, number of supporters, and how long the artist has been on the platform. This combination allows for the featured artists to always be changing, be active/current artists, and artists who have established pages.
            </div>
            <div className="grid full-width">
                <img className="grid-image extra-top-padding-sm" style={{ maxWidth: 686 }} src="/discovery-3.png" />
            </div>
        </div>
        <div className="casestudy-panel">
            <div className="section-subheader extra-top-padding-sm">Organization leads to understanding</div>
            <div>
            Because this browse/discovery feature is not a prominent part of platform we did not need to create a robust filtering system. I kept the filter categories simple and slimmed down (i.e.: only included major cities instead of all cities). I thought of the filters mainly as a way to ground the users and tell them what they are looking at instead of an ambiguous/random assortment of musicians without context.
            </div>
            <div className="grid full-width">
                <video controls
                    src="/Ampled_Browse_Prototype.mov"
                    poster="/ampled-cover.png"
                    className="grid-image extra-top-padding"
                    style={{maxWidth: 686}}
                    autoPlay loop muted playsInline />
            </div>
        </div>
        <div className="casestudy-panel">
            <div className="section-subheader extra-top-padding-sm">Mobile mock up</div>
            <div className="grid full-width">
                <img className="grid-image extra-top-padding-sm" style={{ maxWidth: 686 }} src="/discovery-4.png" />
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

export default Discovery;