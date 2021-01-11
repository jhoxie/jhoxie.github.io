const About = () => (
    <div className="about">
        <div className="heading main">
            My name is Julie Hoxie and I’m a product designer living in San Francisco.
        </div>
        <p className="content">
            I have a B.A. in Psychology and a B.S. in Nursing. I strongly believe in listening, understanding, and advocating for people.
        </p>
        <p className="content">
        Human anxiety motivates me to design easy to use and efficient experiences. 
        </p>
        <p className="content">
        In my free time I like to slowly make coffee, paint abstractions, and terraform my Animal Crossing island.
        </p>
        <p className="content">
            Let’s work together!
        </p>
        <p className="content" style={{textAlign: 'left'}}>
            <a style={{ color: '#2A16A4', display: 'inline' }}>hoxie.julie@gmail.com</a>
        </p>
        <div className="extra-top-padding">
            <div className="img-row">
            <div className="marvin-img">
                    <img src="/marvin-2.png"/>
                    <span className="caption">With Marvin, my rescue mutt pup.</span>
                </div>
                <div className="birding-img">
                    <img src="/birding.png"/>
                    <span className="caption">Birding in Golden Gate Park.</span>
                </div>
            
            </div>
        </div>
        <style jsx>{`
            .about {
                padding-left: 200px;
                padding-right: 200px;
            }
            .img-row {
                display: flex;
                flex-direction: row;
                align-items: flex-end;
            }
            .birding-img {
                width: 43%;
                margin-left: 30px;
            }
            .marvin-img {
                width: 57%;
                margin-right: 30px;
            }
            .img-row img {
                width: 100%;
            }
            .caption {
                font-weight: 300;
                font-size: 16px;
                line-height: 19px;
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