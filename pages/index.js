import Link from 'next/link'

const caseStudies = [
  {
    studyHref: 'healthkeep',
    title: 'Health screening app',
    subtitle: 'How user research helped guide a major pivot',
    image: (<>
      <img className="portfolio-piece-img health-screening-img" src="/healthkeep-header.png"/>
        <style jsx>{`
        .health-screening-img {
          width: 335px;
          height: 249px;
          margin-top: 68px;
          margin-right: 80px;
        }
        @media only screen and (max-width: 767px) {
          .health-screening-img {
            margin: 0;
          }
        }
      `}</style>
    </>),
  },
  {
    studyHref: 'tansaki',
    title: 'Anime search tool redesign',
    subtitle: 'A project to improve appointment scheduling at a healthcare clinic',
    image: (
      <>
          <img className="portfolio-piece-img anime-img" src="/anime-header.png" />
          <style jsx>{`
            .anime-img {
              width: 382px;
              height: 284px;
              margin-top: 16px;
              margin-right: 70px;
            }
            @media only screen and (max-width: 767px) {
              .anime-img {
                margin: 0;
              }
            }
        `}</style>
      </>
    ),
  },
  {
    studyHref: 'healthscheduling',
    title: 'Healthcare appointment scheduling',
    subtitle: 'A client hired me to create a better landing page CTA',
    image: (
      <>
        <img className="portfolio-piece-img apptapp-img" src="/apptapp-header.png" />
          <style jsx>{`
              .apptapp-img {
                width: 342px;
                height: 226px;
                margin-top: 46px;
                margin-bottom: 46px;
                margin-right: 46px;
              }
              @media only screen and (max-width: 767px) {
                .apptapp-img {
                  margin: 0;
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
      .portfolio-piece:hover .portfolio-piece {
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
