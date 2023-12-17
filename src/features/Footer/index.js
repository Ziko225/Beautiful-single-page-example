import Link from "../../components/Link";
import Logo from "../../components/Logo";
import Social from "../../components/Social";
import Form from "./Form";

import "./styles.scss";

const Footer = () => {
    return (
        <footer className="footer">
            <Form />
            <div className="footer__container">
                <nav className="container__navigation">
                    <a className="navigation__logo" href="/">
                        <Logo darkBackground />
                    </a>
                    <Link className="navigation__link">
                        FEATURES
                    </Link>
                    <Link className="navigation__link">
                        PRICING
                    </Link>
                    <Link className="navigation__link">
                        CONTACT
                    </Link>
                    <Social />
                </nav>
            </div>
        </footer>
    );
};

export default Footer;