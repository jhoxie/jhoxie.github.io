import Footer from "../components/footer";

const Tansaki = () => (
    <div className="casestudy-container">
        {/* Hero */}
        <div className="casestudy-header">
            <div className="grid one-thirds-two-thirds">
                <div className="grid-tile">
                    <div className="section-header">Anime recommendation generator</div>
                    <div className="section-subheader">I was hired to redesign the landing page for Tansaki</div>
                </div>
                <div className="grid-tile">
                    <img className="portfolio-piece-img" src="/anime-header.png" style={{width: 381,
                    height: 283}}/>
                </div>
            </div>
        </div>
        {/* Meta */}
        <div className="casestudy-panel">
            <div className="grid half-and-half">
                <div className="gray sub-panel" style={{ alignSelf: 'start' }}>
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
                <div>
                    <div className="section-subheader">
                        <span className="medium">Client:</span><span className="thin"> Tansaki</span>
                    </div>
                    <div className="thin">
                        Tansaki is website that provides recommendations for anime movies and tv shows. The creator engineered the website as a person project because he wanted a better way to get recommendations based off of shows/movies he already liked.
                    </div>
                </div>
            </div>
        </div>
        <div className="casestudy-panel">
            <div className="grid half-and-half">
                <div className="">
                    <div className="section-subheader">
                        Project Overview
                    </div>
                    <div>
                        I was hired by Tansaki to redesign landing page so people have a better idea of what the webside is about. 
                    </div>
                </div>
                <div className="">
                    <div className="section-subheader">
                        Audience:
                    </div>
                    <div>People ages 18 and up with internet access and who are already interested in anc actively watch anime online.</div>
                </div>
            </div>
        </div>
        {/* Background */}
        <div className="casestudy-panel">
            <div className="grid half-and-half">
                <div>
                    <div className="section-subheader">
                        Painpoints
                    </div>
                    <ul>
                        <li>The purpose and functions of the website were not clearly stated on the landing page </li>
                        <li>The content was disorganized and cluttered</li>
                        <li>Lack of visual hierarchy </li>
                    </ul>
                </div>
                <div className="">
                    <div className="section-subheader">
                        Goals
                    </div>
                    <ul>
                        <li>Implement a clear call to action</li>
                        <li>Improve spacing, colors, and font choses to create more visual harmony</li>
                        <li>Increase engagement</li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="casestudy-panel">
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
                Before
            </div>
            <img className="critiques" src="/tansaki-critiques.png" />
        </div>
        <style jsx>{`
            .casestudy-container {
                flex: 1;
                display: flex;
                background-color: white;
                flex-direction: column;
                align-items: stretch;
                justify-content: stretch;
                font-size: 18px;
            }
            .casestudy-header {
                padding: 0 120px;
            }
            .grid {
                display: grid;
            }
            .one-thirds-two-thirds {
                grid-template-columns: 2fr 1fr;
                column-gap: 20px;
            }
            .half-and-half {
                grid-template-columns: 1fr 1fr;
                column-gap: 20px;
            }
            .grid-tile {
                margin: auto;
            }
            .casestudy-panel {
                padding: 60px 120px;
            }
            .sub-panel {
                padding: 16px 30px;
            }
            .sub-panel > div {
                margin: 4px 0;
            }
            .gray {
                background-color: #E5E5E5;
            }
            .medium {
                font-weight: 500;
            }
            .thin {
                font-weight: 300;
            }
            .casestudy-container li {
                margin: 6px 0;
                margin-left: -20px;
                line-height: 24px;
            }
            .section-subheader {
                margin-bottom: 30px;
            }
            .critiques-panel {
            }
            .critiques {
                margin: auto;
                display: block;
                width: 100%;
                max-width: 1040px;
            }
        `}</style>
    </div>
);

export default Tansaki;
