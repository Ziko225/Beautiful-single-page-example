import { ReactComponent as HamburgerIco } from "./hamburger.svg";
import { ReactComponent as CloseIco } from "./xMark.svg";
import Logo from "../../components/Logo";
import Link from "../../components/Link";
import Social from "../../components/Social";
import { useToggle } from "../../hooks/useToggle";
import "./styles.scss";

const Navigation = ({ isBlur }) => {
    const [isHamburgerBarOpen, toggleIsHamburgerBarOpen] = useToggle(false);

    const activeClassName = isHamburgerBarOpen ? "topSection--active" : "";

    return (
        <>
            <div className={`topSection ${activeClassName} ${isBlur ? "blur" : ""}`}>
                <a className="topSection__logoContainer" href="/">
                    <Logo isHamburgerBar={isHamburgerBarOpen} />
                </a>
                <button onClick={toggleIsHamburgerBarOpen} className="topSection__hamburgerButton">
                    {isHamburgerBarOpen ? <CloseIco /> : <HamburgerIco />}
                </button>
                <nav className="topSection__navigation" >
                    <Link theme="dark" className="navigation__link">FEATURES</Link>
                    <Link theme="dark" className="navigation__link">PRICING</Link>
                    <Link theme="dark" className="navigation__link">CONTACT</Link>
                    <Link
                        className="navigation__link navigation__link--primary"
                        theme="dark"
                    >
                        LOGIN
                    </Link>
                    {isHamburgerBarOpen && <Social hamburgerBar className="navigation__social" />}
                </nav>
            </div>
            {isHamburgerBarOpen && <div className="marginTop" />}
        </>
    );
};

export default Navigation;