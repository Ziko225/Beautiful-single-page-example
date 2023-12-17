import Button from "../../../components/Button";
import { ReactComponent as DotsIco } from "./dots.svg";
import "./styles.scss";

const Card = ({ browserName, BrowserIco, minVersion, className }) => {
    return (
        <article className={`extensionCard ${className}`}>
            <BrowserIco className="extensionCard__ico" />
            <h3 className="extensionCard__title">Add to {browserName}</h3>
            <span className="extensionCard__version">
                minimum version {minVersion}
            </span>
            <DotsIco className="extensionCard__dotsIco" />
            <Button className="extensionCard__button">
                Add & Install Extension
            </Button>
        </article>
    );
};

export default Card;