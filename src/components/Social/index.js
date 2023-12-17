import { ReactComponent as Twitter } from "./twitter.svg";
import { ReactComponent as Facebook } from "./facebook.svg";
import "./styles.scss";

const Social = () => {
    return (
        <div className="social">
            <a className="social__link" href="/">
                <Facebook className="link__ico" />
            </a>
            <a className="social__link" href="/">
                <Twitter className="link__ico" />
            </a>
        </div>
    );
};

export default Social;