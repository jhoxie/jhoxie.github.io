import Link from 'next/link'

const caseStudies = [
  {
    studyHref: '/discovery',
    title: 'Discovery experience for an artist cooperative',
    subtitle: 'Creating credibility and community through discovery',
    image: (<>
      <img className="portfolio-piece-img discovery-img" src="/discovery-1.png"/>
        <style jsx>{`
        .discovery-img {
          width: 300px;
          height: 249.53px;
          margin-top: 8px;
          margin-right: 80px;
        }
        @media only screen and (max-width: 767px) {
          .discovery-img {
            margin: 0;
            width: 232px;
            height: 172px;
            margin-bottom: 32px;
          }
        }
      `}</style>
    </>),
  },
  {
    studyHref: '/goodreads',
    title: 'Goodreads Redesign',
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
              margin-top: 8px;
              margin-right: 102px;
            }
            .portfolio-piece-img {
              width: 110px;
              height: 209.14px;
            }
            @media only screen and (max-width: 767px) {
              .portfolio-piece-img-container {
                margin-right: 8px;
                margin-bottom: 32px;
              }
            }
        `}</style>
      </>
    ),
  },
  {
    studyHref: '/healthscheduling',
    title: 'Healthcare scheduling app',
    subtitle: 'Improve appointment scheduling at a specialized health clinic',
    image: (
      <>
        <img className="portfolio-piece-img apptapp-img" src="/apptapp-header.png" />
          <style jsx>{`
              .apptapp-img {
                width: 342px;
                height: 226px;
                margin-top: 46px;
                margin-bottom: 46px;
                margin-right: 80px;
              }
              @media only screen and (max-width: 767px) {
                .apptapp-img {
                  margin: 0;
                  width: 184px;
                  height: 121.59px;
                  margin-top: 12px;
                  margin-bottom: 32px;
                }
              }
          `}</style>
      </>
    ),
  }
];

const Home = () => (
  <div className="portfolio-pieces">
    {caseStudies.map(cs => <PortfolioPiece {...cs}/>)}
    <style jsx>{`
      .portfolio-pieces {
        display: flex;
        flex-direction: column;
        align-items: stretch;
      }
    `}</style>
  </div>
);

const PortfolioPiece = ({ studyHref, title, subtitle, image }) => (
  <Link href={studyHref}>
    <div className="portfolio-piece">
      <div className="info">
        <div className="section-header">{title}</div>
        <div>{subtitle}</div>
      </div>
      {image}
      <style jsx>{`
      .portfolio-piece {
        background-color: white;
        flex: 1;
        display: flex;
        flex-direction: row;
        align-items: center;
        margin: 15px 0;
        cursor: pointer;
      }
      .portfolio-piece:hover {
        background-color: rgba(62, 34, 237, 0.3);
        transition: background-color 0.3s ease;
      }
      .portfolio-piece .info {
        padding: 80px;
        flex: 1 1 0;
      }
      .health-screening-img {
        width: 335px;
        height: 249px;
        marginTop: 68px;
        marginRight: 80px;
      }
      @media only screen and (max-width: 767px) {
        .portfolio-piece {
          flex-direction: column;
        }
        .health-screening-img {
          marginTop: 0;
          marginRight: 0;
        }
        .portfolio-piece .info {
          padding: 24px;
        }
      }
    `}</style>
    </div>
  </Link>
);

export default Home;
