import Link from 'next/link'

const caseStudies = [
  {
    studyHref: '/discovery',
    title: 'Case Study: Artist Discovery Experience',
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
            width: 232px;
            height: 172px;
          }
        }
      `}</style>
    </>),
  },
  {
    studyHref: '/artist-dashboard',
    title: (<span>Showcase: <br/>Artist Dashboard</span>),
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
  },
  {
    studyHref: '/goodreads',
    title: (<span>Information Architecture <br/>Analysis of Goodreads</span>),
    subtitle: 'Optimizing user experience through an analysis of information architecture',
    image: (
      <>
          <div className="portfolio-piece-img-container">
              <img className="portfolio-piece-img" src="/goodreads-mock-community.png" />
              <span style={{ width: 17, display: 'inline-block' }}/>
              <img className="portfolio-piece-img" src="/goodreads-mock-profile.png" />
          </div>
          <style jsx>{`
            .portfolio-piece-img-container {
              margin-right: 8px;
              margin-bottom: 32px;
            }
            .portfolio-piece-img {
              width: 110px;
              height: 209.14px;
            }
            @media only screen and (max-width: 767px) {
              .portfolio-piece-img-container {
                margin-right: 8px;
              }
            }
        `}</style>
      </>
    ),
  },
  {
    studyHref: '/healthscheduling',
    title: (<span>Case Study: Healthcare <br/>Appointment Scheduling</span>),
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
                  width: 184px;
                  height: 121.59px;
                  margin-top: 12px;
                }
              }
          `}</style>
      </>
    ),
  }
];

const Home = () => (
  <div className="portfolio-pieces grid half-and-half full-width-mobile">
    {caseStudies.map(cs => <PortfolioPiece {...cs}/>)}
    <style jsx>{`
      .portfolio-pieces {
        justify-items: stretch;
        grid-tmplate-columns: 50% 50%;
        grid-template-rows: 50% 50%;
      }
      @media only screen and (max-width: 767px) {
        .portfolio-pieces {
          grid-tmplate-columns: initial;
          grid-template-rows: initial;
        }
      }
    `}</style>
  </div>
);

const PortfolioPiece = ({ studyHref, title, subtitle, image }) => (
  <Link href={studyHref}>
    <div className="portfolio-piece grid-item">
      <div className="info">
        <div className="section-header">{title}</div>
      </div>
      {image}
      <style jsx>{`
      .portfolio-piece {
        background-color: white;
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
      }
    `}</style>
    </div>
  </Link>
);

export default Home;
