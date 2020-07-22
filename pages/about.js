const About = () => (
    <div style={{paddingLeft: 200, paddingRight: 200}}>
        <div className="extra-top-padding" style={{display: 'flex', flexDirection: 'row'}}>
            <div className="heading main" style={{flex: '0 0 none', marginRight: '-90px', zIndex: 1}}>
                <span style={{backgroundColor: '#FFD8C1'}}>
                    My name is Julie Hoxie&nbsp;&nbsp;<br />
                    and I’m a product&nbsp;&nbsp;<br />
                    designer living in San&nbsp;&nbsp;<br />
                    Francisco.&nbsp;&nbsp;</span>
            </div>
            <div>
                <img src="/julie.png" width="405" height="405"/>
                <div>
                    <i>Showing off my Matisse inspired brooch at the SFMOMA.</i>
                </div>
            </div>
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
            <img src="/marvin.png" width="414" height="527"/>
            <div>
                <i>My rescue mutt pup, Marvin, and I in Mammoth Lakes, CA.</i>
            </div>
        </div>
  </div>
);

export default About;