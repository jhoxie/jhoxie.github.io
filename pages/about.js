const About = () => (
    <div style={{paddingLeft: 200, paddingRight: 200}}>
        <div className="heading main">
            My name is Julie Hoxie and I’m a product designer living in San Francisco.
        </div>
        <p className="content">
            I have a B.A. in Psychology and a B.S. in Nursing. I strongly believe in listening, understanding, and advocating for people.
        </p>
        <p className="content">
            Design is about the communication between products and people and I am a great listener. 
        </p>
        <p className="content">
            I’m obessed with efficiency and making positive digital experiences that help people and businesses accomplish their goals.
        </p>
        <p className="content">
            Let’s work together!
        </p>
        <p className="content" style={{textAlign: 'left'}}>
            <a style={{ color: '#2A16A4', display: 'inline' }}>hoxie.julie@gmail.com</a>
        </p>
        <div className="extra-top-padding">
            <div className="img-row">
                <div className="birding-img">
                    <img src="/birding.png"/>
                    <span className="caption">Birding in Gold Gate Park.</span>
                </div>
                <div className="marvin-img">
                    <img src="/marvin-2.png"/>
                    <span className="caption">With Marvin, my rescue mutt pup.</span>
                </div>
            </div>
        </div>
        <style jsx>{`
            .img-row {
                display: flex;
                flex-direction: row;
                align-items: flex-end;
            }
            .birding-img {
                width: 43%;
                margin-right: 30px;
            }
            .marvin-img {
                width: 57%;
                margin-left: 30px;
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
                .img-row {
                    display: flex;
                    flex-direction: column;
                    align-items: inherit;
                }
                .birding-img {
                    width: 100%;
                    margin-right: 0px;
                }
                .marvin-img {
                    width: 100%;
                    margin-left: 0px;
                }
            }
        `}</style>
  </div>
);

export default About;