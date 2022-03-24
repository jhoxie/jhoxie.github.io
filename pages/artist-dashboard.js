const ArtistDashboard = () => (
  <div className="casestudy-container">
      {/* Hero */}
      <div className="casestudy-header">
          <div className="section-header">Showcase: Artist Dashboard</div>
          <div className="flex" style={{ marginTop: 60 }}>
              <img className="portfolio-piece-img" src="/ampled-people.png" />
          </div>
      </div>
       {/* Meta */}
       <div className="casestudy-panel">
          <div className="grid one-third-two-thirds problems full-width-mobile extra-top-padding no-top-padding-mobile">
              <div className="gray sub-panel meta no-wrap">
                  <div>
                      <span className="">Client:</span><span className="thin"> Ampled</span>
                  </div>
                  <div>
                      <span className="">Date:</span><span className="thin"> January 2021</span>
                  </div>
                  <div>
                      <span className="">Tools:</span><span className="thin"> Figma, Slack</span>
                  </div>
              </div>
          </div>
      </div>
     <div className="casestudy-panel">
          <div className="section-subheader extra-top-padding-sm">Problem
          </div>
          <div>
          Artists need to have easy access to account information and resources to improve their artist pages in order to gain more supporters.
          </div>
      </div>
      <div className="casestudy-panel">
          <div className="section-subheader extra-top-padding-sm">Before
          </div>
          <div>
              Relevant resources were spread throughout the platform or limited in scope and there was a lack of emphasis on important features. This created a barrier to artists connecting with supporters.
              <br /><br />
              <img className="grid-image" style={{ maxWidth: 686, marginBottom: 30 }} src="/artist-dashboard-before.png"/>
          </div>
      </div>
      <div className="casestudy-panel">
          <div className="section-subheader extra-top-padding-sm">Final Design</div>
          <p>
            My team mocked up the side bar layout and worked through the other dashboard sections while I owned the “Overview” page.
            < br/><br />
            I was given a list of requirements. I grouped similar content together to create organization and structure.
          </p>
      </div>
      <div className="casestudy-panel">
        <div className="grid half-and-half" style={{ maxWidth: 1041, margin: 'auto', textAlign: 'center' }}>
          <div>
            <img className="grid-image" src="/dashboard-finished-1.png" />
            <p className="thin meta">Mobile Profile/Overview</p>
          </div>
          <div>
            <img className="grid-image" src="/dashboard-finished-2.png" />
            <p className="thin meta">Fixed menu with scroll down</p>
          </div>
        </div>
        <div className="extra-top-padding" style={{ maxWidth: 1041, margin: 'auto', textAlign: 'center' }}>
            <img className="grid-image" src="/artist-dashboard-desktop.png" />
            <p className="thin meta">Desktop dashboard redesign hi-fi mock</p>
          </div>
      </div>
      <style jsx>{`
          a {
              text-decoration: underline;
          }
          .before {
              color: #EE595B;
          }
          .after {
              color: #2AC3A9;
          }
          .quote-text {
              font-weight: normal;
              font-size: 18px;
              line-height: 36px;
              padding: 36px;
              padding-bottom: 72px;
              background-image: url("/quote-container.svg");
              text-align: center;
          }
          .grid-image-scheduling {
              object-fit: cover;
              width: 100%;
          }
          .portfolio-piece-img {
              max-width: 721.67px;
          }
          .problems {
              // display: flex;
              // flex-direction: row;
              align-items: center;
          }
          .problems > .section-subheader {
              flex: 0 0 none;
              padding-right: 40px;
          }
          .disclaimer {
              font-family: Roboto;
              font-weight: 300;
              font-size: 18px;
              line-height: 30px;
              margin-left: 42;
          }
          .color-swatch {
              display: inline-block;
              width: 18px;
              height: 18px;
              background-color: #3582EC;
              margin-right: 8px;
           }
           .color-swatch.blue {
              background-color: #3582EC;
           }
           .color-swatch.green {
              background-color: #2AC3A9;
           }
           .color-swatch.purple {
              background-color: #A964E7;
           }
           .color-swatch-text {
              font-size: 16px;
              line-height: 16px;
              margin-right: 20px;
           }
           .color-swatch-container {
              padding-top: 16px;
              padding-bottom: 16px;
              align-items: center;
              display: flex;
           }
           .grid-image {
              max-width: 100%;
              width: 100%;
           }
           .sub-panel.gray {
              padding: 20px;
           }
           .no-wrap {
              white-space: nowrap;
           }
          @media only screen and (min-width: 768px) {
              .disclaimer {
                  margin-left: 42px;
              }
              .sub-panel-subheader {
                  margin-bottom: 16px;
                  font-size: 16px;
              }
          }
          @media only screen and (max-width: 767px) {
              .meta {
                  width: 100%;
              }
              .portfolio-piece-img {
                  margin-bottom: 50px;
                  width: 300px;
              }
              .problems {
                  flex-direction: column;
              }
              .problems > .section-subheader {
                  padding-right: 0x;
              }
              .quote-text {
                  font-size: 12px;
                  line-height: 26px;
                  padding: 24px 12px;
                  padding-bottom: 50px;
              }
              .quote-text:first-of-type {
                  margin-bottom: 18px;
              }
              .grid-image-scheduling {
                  margin-top: 30px;
               }
              .grid-image-scheduling:first-of-type {
                  margin-top: 0px;
               }
              .sub-panel {
                  white-space: normal;
              }
               .sub-panel:first-of-type {
                  margin-bottom: 18px;                     
               }
               .sub-panel.gray {
                  padding: 8px;
                  padding-left: 16px;
                  padding-right: 16px;
               }
          }
      `}</style>
  </div>
);

export default ArtistDashboard;