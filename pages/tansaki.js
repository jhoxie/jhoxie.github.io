const Tansaki = () => (
    <div className="casestudy-container">
        {/* Hero */}
        <div className="casestudy-header" style={{marginTop: 24}}>
            <div className="grid two-thirds-one-third full-width-mobile">
                <div className="grid-tile">
                    <div className="section-header">Anime recommendation generator</div>
                    <div>I was hired to redesign the landing page for Tansaki</div>
                </div>
                <div className="grid-tile">
                    <img className="portfolio-piece-img" src="/anime-header.png"/>
                </div>
            </div>
        </div>
        {/* Meta */}
        <div className="casestudy-panel">
            <div className="gray sub-panel meta">
                <div>
                    <span className="medium">Date:</span><span className="thin"> Februrary 2020</span>
                </div>
                <div>
                    <span className="medium">Tools:</span><span className="thin"> Figma, Whimsical</span>
                </div>
                <div>
                    <span className="medium">Role:</span><span className="thin"> Ideate, style guide, lo-fi and hi-fi mock ups and prototype </span>
                </div>
            </div>
        </div>
        <div className="casestudy-panel">
            <div className="section-subheader">
                <span className="medium">Client</span>
            </div>
            <div>
                Tansaki is website that provides recommendations for anime movies and tv shows. The creator engineered the website as a person project because he wanted a better way to get recommendations based off of shows/movies he already liked.
            </div>
        </div>
        <div className="casestudy-panel">
            <div className="section-subheader">
                Audience
            </div>
            <div>People ages 18 and up with internet access and who are already interested in anc actively watch anime online.</div>
        </div>
        <div className="casestudy-panel">
            <div className="">
                <div className="section-subheader">
                    Project Overview
                </div>
                <div>
                    I was hired by Tansaki to redesign landing page so people have a better idea of what the webside is about.
                </div>
            </div>
        </div>
        <div className="casestudy-panel extra-top-padding gray">
            <div className="section-subheader">
                Before
            </div>
            <img className="grid-image hidden-mobile" src="/tansaki-critiques.png" />
            <img className="grid-image hidden-gt-mobile" src="/tansaki-notes-mobile.png" />
        </div>
        {/* Background */}
        <div className="casestudy-panel extra-top-padding">
            <div className="section-subheader">
                Painpoints
            </div>
            <ul>
                <li>The purpose and functions of the website were not clearly stated on the landing page </li>
                <li>The content was disorganized and cluttered</li>
                <li>Lack of visual hierarchy </li>
            </ul>
            <div className="section-subheader">
                Goals
            </div>
            <ul>
                <li>Implement a clear call to action</li>
                <li>Improve spacing, colors, and font choses to create more visual harmony</li>
                <li>Increase engagement</li>
            </ul>
            <div className="gray sub-panel">
                <div>
                    <div className="section-subheader">
                        Constraints
                    </div>
                </div>
                <div>
                    The website relies on an external API so there are limits to how much and how often information could be generated. 
                </div>
                <br />
                <div>
                    Interactions and information that Tansaki wanted to keep the same.
                </div>
                <br />
                <div>
                    Time and distance barrier as we do not live close to each other and I was a full time employee at another company while working on this project.
                </div>
            </div>
        </div>
        <div className="casestudy-panel">
            <div className="section-subheader">
                Ideation &amp; Wireframing
            </div>
            <div className="grid quarters full-width-mobile">
                <img className="layouts hidden-mobile" src="/tansaki-layout-1.png" />
                <img className="layouts hidden-mobile" src="/tansaki-layout-2.png" />
                <img className="layouts hidden-mobile" src="/tansaki-layout-3.png" />
                <img className="layouts hidden-mobile" src="/tansaki-layout-4.png" />
                <img className="hidden-gt-mobile" style={{maxWidth: '100%'}} src="/tansaki-layout-mobile.png" />
            </div>
            <img className="extra-top-padding" style={{maxWidth: '100%'}} src="/tansaki-styleguide.png" />
        </div>
        <div className="casestudy-panel extra-top-padding gray">
            <div className="section-subheader extra-top-padding">
                Final Designs
            </div>
            <div>
                A clear Call To Action allows first time users to understand the purpose of the website.
                <br /><br />
                Top Searches component was moved to the top and gave the shows a priority to create more understanding and made it easier for the user to click through the filter options.
                <br /><br />
                Color, type weight/size, and spacing were thoughtfully used for a clear visual heirarchy. 
            </div>
            <div className="sides-80">
                <div className="grid half-and-half full-width-mobile extra-top-padding">
                    <div>
                        <div className="caption">Landing page</div>
                        <img className="grid-image" src="/tansaki-finished-1.png" />
                    </div>
                    <div>
                        <div className="caption">Scroll down</div>
                        <img className="grid-image" src="/tansaki-finished-2.png" />
                        <div className="caption extra-top-padding no-top-padding-mobile">Hover state</div>
                        <img className="grid-image" src="/tansaki-finished-3.png" />
                    </div>
                </div>  
                <div className="grid thirds full-width-mobile extra-top-padding no-top-padding-mobile" style={{ paddingBottom: 60 }}>
                    <div>
                        <div className="caption">Mobile landing</div>
                        <img className="grid-image" src="/tansaki-mobile-1.png" />
                    </div>
                    <div>
                        <div className="caption">Scroll down</div>
                        <img className="grid-image" src="/tansaki-mobile-2.png" />
                    </div>
                    <div>
                        <div className="caption">Select</div>
                        <img className="grid-image" src="/tansaki-mobile-3.png" />
                    </div>
                </div>
            </div>
        </div>
        <style jsx>{`
             .portfolio-piece-img {
                width: 381px;
                height: 283px;
             }
             @media only screen and (max-width: 767px)  {
                .portfolio-piece-img {
                    width: 213px;
                    height: 158px;
                 }
                 .caption {
                    margin-top: 30px;
                    text-align: center;
                 }
            }
        `}</style>
    </div>
);

export default Tansaki;
