const GoodReads = () => (
    <div className="casestudy-container">
        {/* Hero */}
        <div className="casestudy-header">
            <div className="section-header">Case Study: Information Architecture <br/> Analysis of Goodreads</div>
            <div className="flex" style={{ marginTop: 60 }}>
                <img className="portfolio-piece-img" src="/GR-hero.png" />
            </div>
        </div>
         {/* Meta */}
         <div className="casestudy-panel">
            <div className="grid problems one-third-two-thirds full-width-mobile extra-top-padding no-top-padding-mobile">
                <div className="gray sub-panel meta">
                    <div>
                        <span className="">Client:</span><span className="thin"> Personal project</span>
                    </div>
                    <div>
                        <span className="">Date:</span><span className="thin"> 1 month</span>
                    </div>
                    <div>
                        <span className="">Tools:</span><span className="thin"> Figma, Octopus.do, Optimal Workshop</span>
                    </div>
                </div>
                <div className="disclaimer">
                    <p><i>Disclaimer:</i> I am not affiliated with Goodreads. This is a fun side project where I use limited user research and make assumptions. I like my design but I’m NOT advocating this is how Goodreads SHOULD be.</p>
                </div>
            </div>
        </div>
        <div className="casestudy-panel">
            <div>
                People love talking about how Goodreads has bad design. At the time of starting this project, Goodreads had 350,000 reviews and rated #9 in the "books" category in the app store. So despite its infamy, people definitely use and like Goodreads.
                <br /><br />
                I put my own opinions about Goodreads aside and investigated this dichotomy further by reading app store reviews.
                <br /><br />
                I looked at the 4-5 star reviews to see why people continue using the app and then looked at the 1-2 star reviews to see what is stopping people from using the app successfully.
                <br /><br />
                I took a step back from all the nice-to-have comments like “why can’t I review with half stars” and tried to suss out what the bigger picture problems were that dedicated users cared about.
            </div>
        </div>
        <div className="casestudy-panel">
            <div className="section-subheader extra-top-padding-sm">Problems</div>
            <ul>
                <li>Decreased mobile app engagement due to limited features compared to desktop</li>
                <li>Outdated UI contributes to negative reviews</li>
            </ul>
            <div className="section-subheader extra-top-padding-sm">Goals</div>
            <ul>
                <li>Optimize mobile app features for power users</li>
                <li>Updated UI</li>
            </ul>
            <div className="section-subheader extra-top-padding-sm">Why is this important?</div>
            <ul>
                <li>Familiarity, consistency, and user engagement</li>
                <li><a href="https://www.nngroup.com/articles/aesthetic-usability-effect" target="_blank">Aesthetic-Usability Effect</a></li>
            </ul>
            <div className="section-subheader extra-top-padding-sm">Success Metrics</div>
            <ul>
                <li>Increased app downloads</li>
                <li>More positive app store reviews/ratings</li>
                <li>Increased engagement on the app</li>
            </ul>
            <div className="section-subheader extra-top-padding-sm">
                Research &amp; Information Architecture Analysis
            </div>
            <div>
                I conducted user research with <a href="https://www.optimalworkshop.com" target="_blank">Optimal Workshop’s</a> virtual card sorting in order to understand user’s mental models and expectations for wayfinding.
                <br /><br />
                <img className="grid-image" style={{ maxWidth: 1041 }} src="/goodread-cardsort.png"/>
                <br /><br />
                I documented the current sitemap for both mobile and desktop versions of Goodreads using <a href="htts://octopus.do" target="_blank">Octopus.do</a>. 
            </div>
        </div>
        <div className="casestudy-panel">
            <div className="gray grid half-and-half full-width-mobile sub-panel">
                <div className="grid-image" style={{ margin: '0 0' }}>
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
                The search function is in a fixed search bar at the top of the app and also has its own tab in the menu. The fixed <b>Search</b> bar at the top sometimes functions as a general search of the entire app and sometimes is only a search within your personal bookshelf - which I found confusing.
            </div>
            <img className="grid-image extra-top-padding" style={{ maxWidth: 760 }} src="/goodreads-before-2.png" />
            <div className="extra-top-padding">
                <b>My Books</b>, <b>More</b>, and <b>Profile</b> have overlapping features
            </div>
        </div>
        <div className="casestudy-panel">
            <div className="section-subheader extra-top-padding-sm after">After:</div>
            <img className="grid-image" style={{ maxWidth: 1041 }} src="/goodreads-after-dsktp-1.png" />
            <div className="extra-top-padding">
                I replaced the <b>More</b> tab with <b>Me</b> because “more” is a vague description. The <b>Me</b> tab now houses the same features in a more intuitive design. <b>Me</b> is laid out like the user’s profile and includes bookshelves, challenges, and notes - which used to live in both <b>More</b> and <b>My Books</b>.
            </div>
            <img className="grid-image extra-top-padding" style={{ maxWidth: 1041 }} src="/goodreads-after-dsktp-2.png" />
        </div>
        <div className="casestudy-panel">
            <div className="section-subheader extra-top-padding-sm before">Before:</div>
            <img className="grid-image" style={{ maxWidth: 780 }} src="/goodreads-before-3.png" />
            <div className="extra-top-padding">
                <b>Discover</b> is not as robust as it is on desktop and is not utilizing mobile space to its full potential.
            </div>
        </div>
        <div className="casestudy-panel">
            <div className="section-subheader extra-top-padding-sm after">After:</div>
            <img className="grid-image" style={{ maxWidth: 1041 }} src="/goodreads-after-dsktp-3.png" />
            <div className="extra-top-padding">
                Many features on the mobile app are limited compared to its web equivalent. Changing the architecture of the app allowed for more space and intuitive access to more features.
            </div>
            <img className="grid-image extra-top-padding" style={{ maxWidth: 1041 }} src="/goodreads-after-dsktp-4.png" />
            <div className="extra-top-padding">
                <b>Search</b> is consolidated to the menu. If I worked at Goodreads I would have more information about how often the search bar at the top of the app is used or how vital it is to users. For the purposes of my project, I assumed that the top search bar is not used as often as it is in other apps where this is a core feature like a shopping app. 
            </div>
        </div>
        <style jsx>{`
            .section-header {
                line-height: 60px;
            }
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
                flex-shrink: 0;
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
                 }
            }
        `}</style>
    </div>
);

export default GoodReads;