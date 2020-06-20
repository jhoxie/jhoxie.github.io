import Instagram from '../svgs/instagram.svg';
import Behance from '../svgs/behance.svg';
import { withRouter } from 'next/router'

const Nav = ({ router }) => (
    <div className="header">
        <div className="header-line">
            <div className="nav-section">
                JH
            </div>
            <div className="nav-section">
                <a href="/" className={router.pathname === '/' && 'selected'}>Work</a>
                <a href="/about" className={router.pathname === '/about' && 'selected'}>About</a>
                {/* <a href="" className="nav-item">Resume</a> */}
            </div>
        </div>
        <div className="header-line">
            <div className="nav-subsection">
                <a>hoxie.julie@gmail.com</a>
                <div>product designer</div>
                <div>SF, CA</div>
            </div>
            <div className="outbound-links">
                <Behance />
                <span className="outbound-link-spacer" />
                <Instagram />
            </div>
        </div>
        <style jsx>{`
        .header {
            width: 100%;
            padding: 80px;
        }
        .header-line {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
        }
        .nav-section {
            font-weight: normal;
            font-style: normal;
            font-size: 34px;
            line-height: 36px;
            flex-direction: row;
            display: flex;
        }
        .nav-section > a {
            margin-left: 60px;
        }
        .nav-section > a.selected {
            border-bottom: 3px solid #3E22ED;
        }
        .nav-subsection {
            margin-top: 20px;
            font-size: 18px;
            line-height: 21px;
        }
        .nav-subsection * {
            display: block;
        }
        .nav-subsection a {
            line-height: 36px;
        }
        .outbound-link-spacer {
            width: 16px;
            diplay: inline-block;
            margin: 16px;
        }
    `}</style>
    </div>
);

export default withRouter(Nav);
