import { ReactComponent as LogoIco } from "./logo.svg";
import "./styles.scss";

const Logo = ({ darkBackground, className, isHamburgerBar }) => {
    const themeClassName = isHamburgerBar
        ? "hamburgerBar" : ""
        || (darkBackground ? "logo--dark" : "logo--white");

    return (
        <LogoIco className={`logo ${className} ${themeClassName}`} />
    );
};

export default Logo;