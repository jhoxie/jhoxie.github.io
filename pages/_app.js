import Head from 'next/head'
import Nav from '../components/nav';
import Footer from '../components/footer';

function MyApp({ Component, pageProps }) {
  return (
    <div className="container">
        <Head>
            <title>Julie Hoxie</title>
            <link rel="icon" href="/favicon.ico" />
            <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,500;0,700;1,400&family=Rubik:ital,wght@0,300;0,400;0,500;0,700;1,400&display=swap" rel="stylesheet"></link>
        </Head>

        <Nav />

        <main>
            <Component {...pageProps} />
        </main>

        <Footer />

        <style jsx global>{`
            html,
            body {
                padding: 0;
                margin: 0;
                font-family: 'Rubik', sans-serif;
                color: #3E22ED;
                background-color: #FFD8C1;
            }

            a {
                color: #3E22ED;
                text-decoration: none;
            }

            * {
                box-sizing: border-box;
            }

            .container {
                min-height: 100vh;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: stretch;
            }

            main {
                font-family: roboto;
                font-style: normal;
                margin: 0 80px;
                flex: 1 1 auto;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                color: #2A16A4;
            }
            @media only screen and (max-width: 767px) {
                main {
                  margin: 0;
                }
              }
            }
            @media (min-width: 1440px) {
                main {
                    max-width: 1280px;
                    margin: auto;
                }
            }

            .content {
                font-weight: normal;
                font-style: normal;
                font-size: 34px;
            }

            .heading {
                font-weight: 500;
                font-style: normal;
            }

            .heading.main {
                font-size: 64px;
                line-height: 100px;
                font-family: 'Rubik', sans-serif;
                color: #3E22ED;
                font-weight: 500;
            }

            .section-header {
                font-weight: bold;
                font-size: 42px;
                line-height: 50px;
                color: #3E23EB;
                padding-bottom: 12px;
            }

            .section-subheader {
                font-size: 24px;
                line-height: 36px;
            }

            footer {
                width: 100%;
                height: 100px;
                border-top: 1px solid #eaeaea;
                display: flex;
                justify-content: center;
                align-items: center;
            }
            

            @media (max-width: 600px) {
                .grid {
                    width: 100%;
                    flex-direction: column;
                }

                .section-header {
                    font-size: 30px;
                    line-height: 35px;
                }
            }

        `}</style>
        <style jsx global>{`
            video {
            pointer-events: none;
          }
            .portfolio-pieces {
                font-size: 24px;
                line-height: 36px;
                font-weight: normal;
            }
            .casestudy-container {
                flex: 1;
                display: flex;
                background-color: white;
                flex-direction: column;
                align-items: stretch;
                justify-content: stretch;
                font-size: 24px;
                line-height: 36px;
                font-weight: 400;
                font-style: normal;
                max-width: 100%;
            }
            .casestudy-header {
                padding: 0 120px 60px 120px;
            }
            .casestudy-header .section-subheader {
                color: #2A16A4;
            }
            .grid {
                display: grid;
            }
            
            .two-thirds-one-third {
                grid-template-columns: 2fr 1fr;
            }
            .three-quarters-one-quarter {
                grid-template-columns: 3fr 1fr;
            }
            .one-quarter-three-quarters {
                grid-template-columns: 1fr 3fr;
            }
            .one-third-two-thirds {
                grid-template-columns: 1fr 2fr;
                column-gap: 20px;
            }
            .one-sixth-two-sixths {
                grid-template-columns: 1fr 5fr;
                column-gap: 20px;
            }
            .grid-gap {
                column-gap: 20px;
            }
            .thirds {
                grid-template-columns: 1fr 1fr 1fr;
                column-gap: 20px;
            }
            .half-and-half {
                grid-template-columns: 1fr 1fr;
                column-gap: 36px;
            }
            .quarters {
                grid-template-columns: 1fr 1fr 1fr 1fr;
                column-gap: 20px;
            }
            .grid-tile {
                margin: auto;
            }
            .casestudy-panel {
                padding: 0px 120px 60px 120px;
            }
            .extra-top-padding {
                padding-top: 60px;
            }
            .extra-top-padding-sm {
                padding-top: 20px;
            }
            .sub-panel {
                padding: 16px 30px;
                border-radius: 6px;
            }
            .sub-panel > div {
                margin: 4px 0;
            }
            .meta {
                font-size: 18px;
                line-height: 21px;
            }
            .gray {
                background-color: #EEEFF1;
            }
            .medium {
                font-weight: 500;
            }
            .thin {
                font-weight: 300;
            }
            .casestudy-container li {
                margin: 6px 0;
                margin-left: -20px;
                line-height: 24px;
            }
            .section-subheader {
                font-size: 32px;
                line-height: 36px;
                margin-bottom: 30px;
                color: #3E22ED;
                font-weight: bold;
                text-align: left;
            }
            .caption {
                padding-bottom: 16px;
            }
            .grid-image {
                margin: auto;
                display: block;
                max-width: 100%;
            }
            .layouts {
                margin: 0 auto;
                display: block;
                width: 100%;
                max-width: 300px;
            }
            .casestudy-container li {
                padding-bottom: 24px;
            }
            .quote-blue {
                padding: 16px 30px;
                font-size: 24px;
                line-height: 36px;
                background-color: #CFD9F8;
                text-align: center;
                font-style: normal;
                font-weight: 500;
            }
            .final-img-container {
                background: #CFD9F8;
                border-radius: 6px;
                padding: 40px;
                display: inline-block;
            }
            .sides-80 {
                margin-left: 56px;
                margin-right: 56px;
             }
             .nav-section {
                font-weight: normal;
                font-style: normal;
                font-size: 34px;
                line-height: 36px;
                flex-direction: row;
                display: flex;
            }
            .hidden-gt-mobile {
                display: none;    
            }
            .hidden-mobile {
                display: inherit;
            }
            @media only screen and (max-width: 767px) {
                .casestudy-header {
                    padding: 0 24px 24px 24px;
                }
                .casestudy-panel {
                    padding: 0 24px 24px 24px;
                }
                .extra-top-padding {
                    padding-top: 24px;
                }
                .portfolio-pieces {
                    font-size: 20px;
                    line-height: 23px;
                }
                .full-width-mobile {
                    grid-template-columns: 1fr;
                }
                .casestudy-container {
                    font-style: normal;
                    font-weight: normal;
                    font-size: 18px;
                    line-height: 30px;
                }
                .meta {
                    font-size: 16px;
                    line-height: 19px;
                }
                .final-img-container {
                    padding: 8px;
                }
                .no-top-padding-mobile {
                    padding-top: 0;
                }
                .quote-blue {
                    font-size: 18px;
                    line-height: 30px;
                }
                .hidden-mobile {
                    display: none;
                }
                .hidden-gt-mobile {
                    display: inherit;
                }
                .half-and-half-mobile {
                    grid-template-columns: 1fr 1fr;
                    column-gap: 36px;
                }
                .heading.main {
                    font-size: 32px;
                    line-height: 50px;
                }
                .content {
                    font-size: 24px;
                    line-height: 28px;
                }
              }
            }
        `}</style>
    </div>
  )
}

export default MyApp;
