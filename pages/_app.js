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
            }

            .section-header {
                font-weight: bold;
                font-size: 42px;
                color: #3E23EB;
                padding-bottom: 12px;
            }

            .section-subheader {
                font-size: 24px;
    =        }

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
            }
        `}</style>
    </div>
  )
}

export default MyApp;
