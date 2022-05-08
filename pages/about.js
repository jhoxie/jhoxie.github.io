const About = () => (
    <div className="about">
        <div className="heading main">
            Hi, I’m Julie Hoxie - a product designer living in Oakland, CA.  </div>        
            <img className="grid-image float-left-desktop hidden-mobile" style={{ maxWidth: 467, marginBottom: 30 }} src="/about-vdpdrn.png"/>
            <img className="grid-image hidden-gt-mobile" width="327" style={{ margin: 'auto', marginBottom: 48, marginTop: 48 }} src="/about-vdpdrn.png"/>
        <p className="content">
            Currently I'm working with <a href="https://techequitycollaborative.org/" target="_blank">Tech Equity</a> to help empower and bring equity to Bay Area communities. 
        </p>
        <p className="content">
            Before getting into product design, I worked in healthcare as a registered nurse. I observed the impact digital design had on healthcare workers and patients. I was inspired and curious to learn the process of creating positive user experiences. 
        </p>
        
        <p className="content">
            Through self study, <a href="https://designlab.com/" target="_blank">designlab</a>, and daily practice I became a product designer.         
        </p>
        <p className="content">
            I’m driven to create harmony between people and products by turning complex problems into intuitive experiences. I strongly believe in listening, understanding, and advocating for people throughout the design process. 
        </p>
        <p className="content">
            <br></br>
            In my free time I like to:
            <ul className="no-bullets">
                <li><img className="like-icon" src="/about-coffee.png" width="36" height="25"/> slowly make coffee</li>
                <li><img className="like-icon" src="/about-leaf-icon.png" width="36" height="36"/> be outside</li>
                <li><img className="like-icon" src="/about-headphone-icon.png" width="36" height="36"/> assemble ambient beats</li>
                <br></br>
            </ul>
        </p>
        <p className="content logo">
            Let’s work together!
        </p>
        <p className="content" style={{textAlign: 'left'}}>
            <a style={{ color: '#2A16A4', display: 'inline' }}>hoxie.julie@gmail.com</a>
        </p>
        <div className="extra-top-padding">
            <div className="img-row">
            <div className="marvin-img">
                    <img className="hidden-mobile" height="525" width="582" src="/marvin-2.png"/>
                    <img className="hidden-gt-mobile grid-image" height="288" width="319" src="/marvin-2.png"/>
                    <span className="caption">With Marvin, my rescue mutt pup.</span>
                </div>
                <div className="birding-img">
                    <img className="hidden-mobile" height="525" width="396" src="/birding.png"/>
                    <img className="hidden-gt-mobile grid-image" height="423" width="319" src="/birding.png"/>
                    <span className="caption">Birding in Golden Gate Park.</span>
                </div>
            
            </div>
        </div>
        <style jsx>{`
            .about {
                padding-left: 200px;
                padding-right: 200px;
                line-height: 32px;
            }
            .img-row {
                display: flex;
                flex-direction: row;
                align-items: flex-end;
            }
            .birding-img {
                margin-left: 30px;
            }
            .marvin-img {
                margin-right: 30px;
            }
            .caption {
                font-weight: 300;
                font-size: 16px;
                line-height: 19px;
            }
            .no-bullets {
                list-style: none;
                padding-left: 0;
                margin-top: 12px;
            }
            .no-bullets li {
                display: flex;
                flex-direction: row;
                align-items: center;
                padding-top: 12px;
                padding-bottom: 12px;
            }
            .like-icon {
                margin-right: 20px;
            }
            .logo {
                font-family: 'Rubik', sans-serif;
                font-weight: 500;
                color: #3E22ED;
            }
            @media only screen and (max-width: 767px) {
                .float-left-desktop {
                    float: initial;
                }
                .about {
                    padding-left: 24px;
                    padding-right: 24px;
                }
                .img-row {
                    display: flex;
                    flex-direction: column;
                    align-items: inherit;
                }
                .birding-img {
                    width: 100%;
                    margin-top: 24px;
                    margin-right: 0px;
                    margin-bottom: 24px;
                    margin-left: 0;
                }
                .marvin-img {
                    width: 100%;
                    margin-left: 0px;
                    margin-top: 24px;
                }
            }
        `}</style>
  </div>
);

export default About;