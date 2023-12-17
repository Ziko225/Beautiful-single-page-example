import { ReactComponent as LogoIco } from "./logo.svg";
import "./styles.scss";

const Logo = ({ darkBackground, className }) => {
    const themeClassName = darkBackground
        ? "logo--dark"
        : "logo--white";

    return (
        <LogoIco className={`${className} ${themeClassName}`} />
    );
};

export default Logo;