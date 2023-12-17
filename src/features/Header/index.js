import Button from "../../components/Button";
import InformationBlock from "../../components/InformationBlock";
import RoundRectangle from "../../components/RoundRectangle";
import { ReactComponent as IllustrationIco } from "./illustration.svg";
import "./styles.scss";

const Header = () => {
    return (
        <section className="header">
            <div className="header__content">
                <InformationBlock
                    title="A Simple Bookmark Manager"
                    isHeader
                    className="content__text"
                >
                    A clean and simple interface to organize your favourite
                    websites. Open a new browser tab and see your sites load
                    instantly. Try it for free.
                </InformationBlock>
                <div className="content__buttons">
                    <Button>Get it on Chrome</Button>
                    <Button theme="secondary">Get it on Firefox</Button>
                </div>
            </div>
            <div className="header__illustration">
                <IllustrationIco className="illustration__ico" />
                <RoundRectangle className="header__rectangle" side="right" />
            </div>
        </section>
    );
};

export default Header;