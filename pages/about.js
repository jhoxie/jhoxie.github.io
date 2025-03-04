const About = () => (
    <div className="about">
        <div className="heading main">
            Hi, I’m Julie Hoxie </div>
        <p className="content">
            I'm a Product Designer at Everyday Health Group working on <a href="https://babycenter.com/" target="_blank">BabyCenter</a> and <a href="https://whattoexpect.com/" target="_blank">What to Expect</a> pregnancy & parenting brands. 
        </p>

        <p className="content">
            Before product design, I worked in healthcare as a registered nurse. My healthcare experience taught me to observe carefully, identify complex problems, and implement solutions. I’m driven to create harmony between people and products by turning complex problems into intuitive experiences. I believe in listening, understanding, and advocating for people throughout the design process. 
        </p>
        <p className="content">
            <br></br>
            In my free time I like to:
            <ul className="no-bullets">
                <li><img className="like-icon" src="/about-coffee.png" width="36" height="25"/> slowly make coffee</li>
                <li><img className="like-icon" src="/about-leaf-icon.png" width="36" height="36"/> be outside</li>
                <li><img className="like-icon" src="/substack_logo.png" width="29" height="36"/> <a href="https://substack.com/@lookingatbooks" target="_blank">write a Substack about book cover design</a> </li>
                <br></br>
            </ul>
        </p>
        <p className="content logo">
        </p>
        <p className="content" style={{textAlign: 'left'}}>
            <a style={{ color: '#2A16A4', display: 'inline' }}>hoxie.julie [at] gmail [dot] com</a>
        </p>
        <div className="extra-top-padding">
                <img className="grid-image" style={{ marginBottom: 16 }} src="/About-Jtree.png" />
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
