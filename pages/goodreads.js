const GoodReads = () => (
    <div className="casestudy-container">
        {/* Hero */}
        <div className="casestudy-header">
            <div className="section-header">Case Study: Goodreads Redesign</div>
            <div>Optimizing user experience through an analysis of information achitecture</div>
            <div className="flex" style={{ marginTop: 60 }}>
                <img className="portfolio-piece-img" src="/goodreads-mock-profile.png" />
                <span style={{ width: 20, display: 'inline-block' }}/>
                <img className="portfolio-piece-img" src="/goodreads-mock-community.png" />
            </div>
        </div>
         {/* Meta */}
         <div className="casestudy-panel">
            <div className="grid problems full-width-mobile extra-top-padding no-top-padding-mobile">
                <div className="gray sub-panel meta no-wrap">
                    <div>
                        <span className="">Client:</span><span className="thin"> Personal project</span>
                    </div>
                    <div>
                        <span className="">Date:</span><span className="thin"> September 2020</span>
                    </div>
                    <div>
                        <span className="">Tools:</span><span className="thin"> Figma, Octopus.do, Optimal Workshop</span>
                    </div>
                </div>
                <div className="disclaimer">
                    <p><i>Disclaimer:</i> I am not affliated with Goodreads. This is a fun side project where I use limited user research and make assumptions. I like my design but I’m not advocating this is how Goodreads SHOULD be.</p>
                </div>
            </div>
        </div>
        <div className="casestudy-panel">
            <div>
                People love talking about how Goodreads has bad design. At the time of starting this project Goodreads had 350,000 reviews and rated #9 in the "books" category in the app store. So despite its infamy, people definitely use Goodreads.
                <br /><br />
                I put my own opinions about Goodreads aside and investigated this dictomy further by reading app store reviews.
                <br /><br />
                I looked at the 4-5 star reviews to see why people continue using the app and then looked at the 1-2 star reviews to see what is stopping people from using the app successfully.
                <br /><br />
                I took a step back from all the nice-to-have comments like “why can’t I review with half stars” and looked at what were the bigger picture problems that dedicated users cared about.
            </div>
        </div>
        <div className="casestudy-panel">
            <div className="section-subheader extra-top-padding-sm">Problems</div>
            <ul>
                <li>Key features from desktop are missing on the mobile app</li>
                <li>Outdated UI</li>
            </ul>
            <div className="section-subheader extra-top-padding-sm">Goals</div>
            <ul>
                <li>Optimize mobile app features for power users</li>
                <li>Update UI</li>
            </ul>
            <div className="section-subheader extra-top-padding-sm">Why is this important?</div>
            <ul>
                <li>Familiarity, consistency, and user engagment</li>
                <li><a href="">Aesthetic-Usability Effect</a></li>
            </ul>
            <div className="section-subheader extra-top-padding-sm">
                Research &amp; Information Architecture Analysis
            </div>
            <div>
                I did a competitve analysis of similar apps to see what made Goodeads stand out from it’s competition.
                <br /><br />
                I documented the current sitemap for both mobile and desktop versions of Goodreads using <a>Octopus.do</a>. 
                <br /><br />
                Next I conducted user research with <a>Optimal Workshop’s</a> virtual card sorting feature. 
            </div>
        </div>
        <div className="casestudy-panel">
            <div className="gray grid half-and-half full-width-mobile sub-panel">
                <div className="grid-image">
                    <img className="grid-image" style={{ maxWidth: 521 }} src="/goodreads-current-mobile.png" />
                    <div className="hidden-mobile">
                        <div style={{ fontSize: 20 }} className="extra-top-padding-sm">
                            Color Key:
                        </div>
                        <div className="color-swatch-container flex">
                            <span className="color-swatch blue"></span><span className="color-swatch-text">Both</span>
                            <span className="color-swatch green"></span><span className="color-swatch-text">Limited on mobile</span>
                            <span className="color-swatch purple"></span><span className="color-swatch-text">Excluded from mobile</span>
                        </div>
                    </div>
                </div>
                <img className="grid-image" style={{marginTop: 0, maxWidth: 521 }} src="/goodreads-current-desktop.png" />
                <div className="hidden-gt-mobile">
                        <div style={{ fontSize: 20 }} className="extra-top-padding-sm">
                            Color Key:
                        </div>
                        <div className="color-swatch-container flex">
                            <span className="color-swatch blue"></span><span className="color-swatch-text">Both</span>
                        </div>
                        <div className="color-swatch-container flex">
                            <span className="color-swatch green"></span><span className="color-swatch-text">Limited on mobile</span>
                        </div>
                        <div className="color-swatch-container flex">
                            <span className="color-swatch purple"></span><span className="color-swatch-text">Excluded from mobile</span>
                        </div>
                    </div>
            </div>
        </div>
        <div className="casestudy-panel">
            <div className="gray sub-panel" style={{ columnGap: 20 }}>
                <div className="sub-panel-subheader">
                    Mobile Redesign:
                </div>
                <img className="grid-image" style={{ maxWidth: 999 }} src="/goodreads-redesign-mobile.png" />
            </div>
        </div>
        <div className="casestudy-panel">
            <div className="section-subheader extra-top-padding-sm">I analyzed the data and came up with a new sitemap that:</div>
            <ul>
                <li>Is organized to match most user’s mental models</li>
                <li>Consolidates features that were previously multiplied and spread through the app</li>
                <li>Allows for more space to add desktop features for power users.</li>
            </ul>
        </div>
        <div className="casestudy-panel">
            <div className="section-subheader extra-top-padding-sm before">Before:</div>
            <img className="grid-image" style={{ maxWidth: 479 }} src="/goodreads-before-1.png" />
            <div className="extra-top-padding">
                The search function is in a fixed search bar at the top of the app and also has its own tab in the menu. The fixed <b>Search</b> bar at top sometimes function as a general search of the entire app and sometimes is only a search within your shelves - which I found confusing.
            </div>
            <img className="grid-image extra-top-padding" style={{ maxWidth: 760 }} src="/goodreads-before-2.png" />
            <div className="extra-top-padding">
                <b>My Books</b>, <b>More</b>, and <b>Profile</b> have overlapping features
            </div>
        </div>
        <div className="casestudy-panel">
            <div className="section-subheader extra-top-padding-sm after">After:</div>
            <img className="grid-image" style={{ maxWidth: 780 }} src="/goodreads-after-dsktp-1.png" />
            <div className="extra-top-padding">
                I replaced the <b>More</b> tab with <b>Me</b> because “more” is a vague descriptive. The <b>Me</b> tab now houses the same features in a more intuitive design. <b>Me</b> is layed out like the user’s profile and includes book shelves, challenge, and notes - which used to live in both <b>More</b> and <b>My Books</b>.
            </div>
            <img className="grid-image extra-top-padding" style={{ maxWidth: 775 }} src="/goodreads-after-dsktp-2.png" />
        </div>
        <div className="casestudy-panel">
            <div className="section-subheader extra-top-padding-sm before">Before:</div>
            <img className="grid-image" style={{ maxWidth: 780 }} src="/goodreads-before-3.png" />
            <div className="extra-top-padding">
                <b>Discover</b> is not as robust as it is on desktop and is not utlizing mobile space to its potential.
            </div>
        </div>
        <div className="casestudy-panel">
            <div className="section-subheader extra-top-padding-sm after">After:</div>
            <img className="grid-image" style={{ maxWidth: 1039 }} src="/goodreads-after-dsktp-3.png" />
            <div className="extra-top-padding">
                Many features on the mobile app are limited compared to it’s web equivalent. Changing the architecture of the app allowed for more space and intuitive access to more features.
            </div>
            <img className="grid-image extra-top-padding" style={{ maxWidth: 860 }} src="/goodreads-after-dsktp-4.png" />
            <div className="extra-top-padding">
                <b>Search</b> is consolidated to the menu. If I worked at Goodreads I would have more information about how often the search bar at the top of the app is used or how vital it is to users. For the purposes of my project I assumed that the top search bar is not used as often as it is in other apps where this is come feature, such as a shopping app. 
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
                max-width: 317px;
            }
            .problems {
                display: flex;
                flex-direction: row;
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
             .casestudy-header {
                margin-top: 32px;
                padding-bottom: 0;
                text-align: center;
            }
            @media only screen and (min-width: 768px) {
                .disclaimer {
                    margin-left: 42px;
                }
                .sub-panel-subheader {
                    margin-bottom: 16px;
                    font-size: 16px;
                }
                .casestudy-header {
                    padding-top: 78px;
                }
            }
            @media only screen and (max-width: 767px) {
                .portfolio-piece-img {
                    margin-bottom: 50px;
                    width: 110px;
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
                 }
            }
        `}</style>
    </div>
);

export default GoodReads;