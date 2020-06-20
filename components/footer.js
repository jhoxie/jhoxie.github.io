import UpArrow from '../svgs/up-arrow.svg';

const Footer = () => (
    <div className="footer">
        <a onClick={e => window.scrollTo(0, 0)}>
            <UpArrow />
            <span className="footer-text">Go Up</span>
        </a>
        <style jsx global>{`
             .footer {
                display: flex;
                justify-content: center;
                align-items: center;
                margin: 100px;
            }
            a {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                cursor: pointer;
            }
            .footer-text {
                margin-top: 5px;
                font-size: 18px;
                line-height: 36px;
            }
            a:hover .up-arrow {
                fill: #C0B8F5;
            }
            a:hover .footer-text {
                font-weight: 500;
            }
        `}</style>
    </div>
);

export default Footer;
