import { ReactComponent as Twitter } from "./twitter.svg";
import { ReactComponent as Facebook } from "./facebook.svg";
import "./styles.scss";

const Social = ({ className, hamburgerBar }) => {
    const withoutMediaQueriesClassName = hamburgerBar ? "" : "link__ico";

    return (
        <div className={`social ${className}`}>
            <a className="social__link" href="/">
                <Facebook className={withoutMediaQueriesClassName} />
            </a>
            <a className="social__link" href="/">
                <Twitter className={withoutMediaQueriesClassName} />
            </a>
        </div>
    );
};

export default Social;