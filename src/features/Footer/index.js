import { ReactComponent as Twitter } from "./twitter.svg";
import { ReactComponent as Facebook } from "./facebook.svg";
import Link from "../../components/Link";
import Logo from "../../components/Logo";
import Form from "./Form";

import "./styles.scss";

const Footer = () => {
    return (
        <footer className="footer">
            <Form />
            <div className="footer__container">
                <nav className="container__navigation">
                    <Logo className="navigation__logo" darkBackground />
                    <Link className="navigation__link">
                        FEATURES
                    </Link>
                    <Link className="navigation__link">
                        PRICING
                    </Link>
                    <Link className="navigation__link">
                        CONTACT
                    </Link>
                    <div className="navigation__social">
                        <a className="social__link" href="/">
                            <Facebook />
                        </a>
                        <a className="social__link" href="/">
                            <Twitter />
                        </a>
                    </div>
                </nav>
            </div>
        </footer>
    );
};

export default Footer;