import Link from 'next/link'

const caseStudies = [
  {
    studyHref: 'healthkeep',
    title: 'Health screening app',
    subtitle: 'How user research helped guide a major pivot',
    image: (<img className="portfolio-piece-img" src="/healthkeep-header.png" style={{width: 335,
      height: 249,
      marginTop: 68,
      marginRight: 80}}></img>),
  },
  {
    studyHref: 'tansaki',
    title: 'Anime search tool redesign',
    subtitle: 'A project to improve appointment scheduling at a healthcare clinic',
    image: (<img className="portfolio-piece-img" src="/anime-header.png" style={{width: 382,
      height: 284,
      marginTop: 16,
      marginBottom: 16,
      marginRight: 70}}></img>),
  },
  {
    studyHref: 'healthscheduling',
    title: 'Healthcare appointment scheduling',
    subtitle: 'A client hired me to create a better landing page CTA',
    image: (<img className="portfolio-piece-img" src="/apptapp-header.png" style={{width: 335,
      width: 342,
      height: 226, marginTop: 46, marginBottom: 46, marginRight: 70}}></img>),
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
    `}</style>
    </div>
  </Link>
);

export default Home;
