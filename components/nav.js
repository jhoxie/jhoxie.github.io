import Instagram from '../svgs/instagram.svg';
import Behance from '../svgs/behance.svg';
import Exit from '../svgs/exit.svg';
import Menu from '../svgs/menu.svg';
import { withRouter } from 'next/router'
import Link from 'next/link'
import { useState } from 'react';

const Nav = ({ router }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <div className={menuOpen ? 'header open' : 'header'}>
            <div className="header-line">
                <div className="nav-section" onClick={() => setMenuOpen(false)}>
                    <Link href="/">
                        JH
                    </Link>
                </div>
                <div className="nav-section hidden-mobile">
                    <div className={router.pathname === '/' && 'selected'}>
                        <Link href="/">Work</Link>
                    </div>
                    <div className={router.pathname === '/about' && 'selected'}>
                        <Link href="/about">About</Link>
                    </div>
                    {/* <a href="" className="nav-item">Resume</a> */}
                </div>
                <div className="nav-section hidden-gt-mobile" onClick={() => setMenuOpen(!menuOpen)}>
                    {menuOpen ? <Exit /> : <Menu /> }
                </div>
            </div>
            {menuOpen && (
                <>
                    <div className="nav-section menu menu-expanded hidden-gt-mobile">
                        <div className={router.pathname === '/about' && 'selected'} onClick={() => setMenuOpen(!menuOpen)}>
                            <Link href="/about">About</Link>
                        </div>
                        <div className={router.pathname === '/' && 'selected'} onClick={() => setMenuOpen(!menuOpen)}>
                            <Link href="/">Work</Link>
                        </div>
                        {/* <a href="" className="nav-item">Resume</a> */}
                    </div>
                    <div className="thin-line" />
                    <div className="header-line hidden-gt-mobile">
                        <div className="outbound-links" style={{margin: 'auto'}}>
                            <a href="https://www.behance.net/jewelyhoxie" target="_blank"><Behance /></a>
                            <span className="outbound-link-spacer" />
                            <a href="https://www.instagram.com/reneehoxie/" target="_blank"><Instagram /></a>
                        </div>
                    </div>
                </>
            )}
            {!menuOpen && (
                <div className="header-line">
                    <div className="nav-subsection">
                        <a href="mailto:hoxie.julie@gmail.com">hoxie.julie@gmail.com</a>
                        <div>product designer</div>
                        <div>SF, CA</div>
                    </div>
                    <div className="outbound-links hidden-mobile">
                        <a href="https://www.behance.net/jewelyhoxie" target="_blank"><Behance /></a>
                        <span className="outbound-link-spacer" />
                        <a href="https://www.instagram.com/reneehoxie/" target="_blank"><Instagram /></a>
                    </div>
                </div>
            )}
            <style jsx>{`
            .header {
                width: 100%;
                padding: 80px;
            }
            .header.open {
                position: fixed;
                top: 0;
                height: 100vh;
                background-color: #FFD8C1;
                display: flex;
                flex-direction: column;
            }
            .header-line {
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: space-between;
            }
            .nav-subsection {
                margin-top: 20px;
                font-size: 18px;
                line-height: 24px;
            }
            .nav-subsection * {
                display: block;
            }
            .nav-subsection a {
                line-height: 24px;
            }
            .outbound-link-spacer {
                width: 16px;
                diplay: inline-block;
                margin: 16px;
            }
            .thin-line {
                border: 1px solid #3E22ED;
                margin: 24px -24px 24px -24px ;
            }
            @media only screen and (max-width: 767px) {
                .header {
                    padding: 24px;
                }
            }
        `}</style>
        <style jsx global>{`
            .nav-section.menu {
                margin: auto;
            }
            .nav-section.menu > div {
                text-align: center;
            }
            .nav-section > div > a {
                margin-left: 60px;
            }
            .nav-section.menu > div > a {
                margin-left: auto;
                margin-top: 24px;
                margin-bottom: 24px;
                display: inline-block;
                text-align: center;
            }
            .nav-section.menu-expanded {
                flex-direction: column;
            }
            
            .menu > div:first-child > a {
                margin-top: 100px;
            }
            .nav-section > .selected > a {
                border-bottom: 3px solid #3E22ED;
            }
            .menu-expanded {
                flex: 1 1 auto;
            }
            .hidden-gt-mobile .outbound-links * {
                display: inline-block;
            }
        `}</style>
    </div>
    );
};

export default withRouter(Nav);
