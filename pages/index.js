import Link from 'next/link'

const favoriteCaseStudy = {
  studyHref: '/AFC',
  title: <span>BabyCenter: App-first content</span>,
  image: (<>
    <img className="portfolio-piece-img AFC-img" src="/hero.png"/>
      <style jsx>{`
      .AFC-img {
        width: 90%;
        max-width: 800px;
        height: auto;
        object-fit: contain;
        padding: 32px;
        margin: 0 auto;
      }
    `}</style>
  </>),
};

const otherCaseStudies = [
  {
    studyHref: '/eligibility-quiz',
    title: <span>Tech Equity: Rent Control <br/> Quiz &amp; Calculator</span>,
    image: (<>
      <img className="portfolio-piece-img eligibility-img" src="/TEEQ-buttonhero.png"/>
        <style jsx>{`
        .eligibility-img {
          width: 100%;
          height: 270px;
          object-fit: cover;
        }
      `}</style>
    </>)
  },
  {
    studyHref: '/discovery',
    title: <span> Ampled: Artist <br/> Discovery Experience</span>,
    subtitle: 'Creating credibility and community through discovery',
    image: (<>
      <img className="portfolio-piece-img discovery-img" src="/discovery-1.png"/>
        <style jsx>{`
        .discovery-img {
          width: 300px;
          height: 249.53px;
          margin-top: 8px;
          margin-bottom: 32px;
        }
        @media only screen and (max-width: 767px) {
          .discovery-img {
            margin: 0;
            width: 286px;
            height: 238px;
          }
        }
      `}</style>
    </>),
  },
  {
    studyHref: '/goodreads',
    title: (<span>Goodreads: Information <br/> Architecture Analysis</span>),
    subtitle: 'Optimizing user experience through an analysis of information architecture',
    image: (
      <>
          <img className="portfolio-piece-img" src="/GR-buttonhero.png" />
          <style jsx>{`
            .portfolio-piece-img {
              width: 100%;
              object-fit: cover;
              // height: 209.14px;
            }
        `}</style>
      </>
    ),
  },
  {
    studyHref: '/healthscheduling',
    title: (<span>Personal Project: Healthcare <br/>Appointment Scheduling</span>),
    subtitle: 'Improve appointment scheduling at a specialized health clinic',
    image: (
      <>
        <img className="portfolio-piece-img apptapp-img" src="/apptapp-header.png" />
          <style jsx>{`
              .apptapp-img {
                width: 342px;
                height: 226px;
                margin-top: 32px;
                margin-bottom: 46px;
              }
              @media only screen and (max-width: 767px) {
                .apptapp-img {
                  margin: 0;
                  margin-bottom: 16px;
                  width: 289px;
                  height: 190px;
                  margin-top: 12px;
                }
              }
          `}</style>
      </>
    ),
  }
];


const notFullCaseStudy = {
    studyHref: '/artist-dashboard',
    title: (<span>Ampled: <br/>Artist Dashboard</span>),
    subtitle: 'Showcase: Artist dashboard',
    image: (<div className="portfolio-piece-img-container">
      <img className="portfolio-piece-img ampled-people-img" src="/ampled-people.png" />
          <style jsx>{`
              .ampled-people-img {
                width: 379px;
                height: 241px;
                margin-bottom: 16px;
              }
              @media only screen and (max-width: 767px) {
                .ampled-people-img {
                  margin: 0;
                  width: 303px;
                  height: 192px;
                  margin-top: 12px;
                }
              }
          `}</style>
    </div>),
  };

const Home = () => (
  <div>
    <div className="intro">
        <img className="grid-image float-right-desktop hidden-mobile" width="580" style={{ marginTop: -30 }} src="/Home-ProfilePic.png"/>
        <div className="heading main extra-top-padding" style={{maxWidth: 620 }}>
            Hi, I'm Julie [she/her] - a product designer working at Everyday Health Group living in Oakland, CA.
        </div>
        <div className="about-cta extra-top-padding">
          <Link href="/about">
            Read more about me.
          </Link>
        </div>
        <img className="grid-image hidden-gt-mobile" width="327" style={{ margin: 'auto', marginBottom: 96, marginTop: 48 }} src="/Home-ProfilePic.png"/>
    </div>
    <div>
      <div className="heading main extra-top-padding center-text-desktop">
        My favorite case study:
      </div>
      <div className="flex full-width-mobile favorite extra-top-padding-sm extra-extra-bottom-padding">
        <PortfolioPiece {...favoriteCaseStudy}/>
      </div>
      <div className="heading main center-text-desktop">
        Other pretty great case studies:
      </div>
      <div className="portfolio-pieces grid half-and-half full-width-mobile extra-top-padding-sm extra-extra-bottom-padding">
        {otherCaseStudies.map(cs => <PortfolioPiece {...cs}/>)}
        <style jsx>{`
          .portfolio-pieces {
            justify-items: stretch;
            grid-template-columns: 50% 50%;
            grid-template-rows: 50%;
          }
          @media only screen and (max-width: 767px) {
            .portfolio-pieces {
              grid-template-columns: initial;
              grid-template-rows: initial;
            }
          }
      `}</style>
      </div>
      <div className="heading main center-text-desktop">
        Just showing off - not full case studies:
      </div>
      <div className="flex full-width-mobile  extra-top-padding-sm extra-extra-bottom-padding favorite">
        <PortfolioPiece {...notFullCaseStudy}/>
      </div>
    </div>
  </div>
);

const PortfolioPiece = ({ studyHref, title, subtitle, image }) => (
  <Link href={studyHref}>
    <div className="portfolio-piece grid-item" key="title">
      <div className="info">
        <div className="section-header">{title}</div>
      </div>
      {image}
      <style jsx global>{`
      .favorite {
        display: flex;
        justify-content: center;
      }
      .favorite .portfolio-piece {
        flex-basis: 50%;
        flex-grow: 0;
      }
      .portfolio-piece {
        background-color: #FAFAFA;
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        border-radius: 6px;
        margin: 15px 0;
        margin-bottom: 40px;
        margin-right: 10px;
        cursor: pointer;
        box-shadow: #3E23EB 0 0 0 1px, #B4ABE8 10px 10px 0px;
        transition: 0.3s ease;
        overflow: hidden;
      }
      .portfolio-piece:hover {
        box-shadow: #3E23EB 0 0 0 1px, #B4ABE8 0px 0px 0px;
        transition: 0.3s ease;
        margin-right: -5px;
        margin-top: 25px;
        margin-left: 10px;
        margin-bottom: 30px;
      }
      .portfolio-piece .section-header {
        font-size: 34px;
      }
      .portfolio-piece .info {
        margin: 32px 32px 0 32px;
        flex: 1 1 0;
        text-align: center;
      }
      .health-screening-img {
        width: 335px;
        height: 249px;
        marginTop: 68px;
        marginRight: 80px;
      }
      @media only screen and (max-width: 767px) {
        .health-screening-img {
          marginTop: 0;
          marginRight: 0;
        }
        .portfolio-piece .info {
          margin: 16px 16px 0 16px;
        }
        .portfolio-piece {
          box-shadow: #3E23EB 0 0 0 1px;
          margin: 8px;
        }
        .portfolio-piece:hover {
          box-shadow: #3E23EB 0 0 0 1px;
          margin: 8px;
        }
        .portfolio-piece .section-header {
          font-size: 24px;
        }
        .favorite .portfolio-piece {
          flex-basis: 100%;
        }
      }
    `}</style>
    </div>
  </Link>
);

export default Home;
