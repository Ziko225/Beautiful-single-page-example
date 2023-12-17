import { ReactComponent as HamburgerIco } from "./hamburger.svg";
import Logo from "../../components/Logo";
import "./styles.scss";
import Link from "../../components/Link";

const Navigation = () => {
    return (
        <div className="topSection">
            <a className="topSection__logo" href="/">
                <Logo />
            </a>
            <button className="topSection__hamburgerButton">
                <HamburgerIco />
            </button>
            <nav className="topSection__navigation">
                <Link theme="dark" className="navigation__link">FEATURES</Link>
                <Link theme="dark" className="navigation__link">PRICING</Link>
                <Link theme="dark" className="navigation__link">CONTACT</Link>
                <Link
                    className="navigation__link navigation__link--primary"
                    theme="dark"
                >
                    LOGIN
                </Link>
            </nav>
        </div>
    );
};

export default Navigation;