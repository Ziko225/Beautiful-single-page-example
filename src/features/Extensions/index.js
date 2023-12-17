import InformationBlock from "../../components/InformationBlock";
import Card from "./Card";
import { ReactComponent as OperaIco } from "./icons/opera.svg";
import { ReactComponent as ChromeIco } from "./icons/chrome.svg";
import { ReactComponent as FirefoxIco } from "./icons/firefox.svg";

import "./styles.scss";

const Extensions = () => {
    return (
        <section className="extensions">
            <InformationBlock title="Download the extension" center className="extensions__header">
                We've got more browsers in the pipeline. Please do let us know if
                you've got a favourite you'd like us to prioritize.
            </InformationBlock>
            <div className="extensions__list">
                <Card
                    className="list--top"
                    BrowserIco={ChromeIco}
                    browserName="Chrome"
                    minVersion="62"
                />
                <Card
                    className="list--middle"
                    BrowserIco={FirefoxIco}
                    browserName="Firefox"
                    minVersion="55"
                />
                <Card
                    className="list--bottom"
                    BrowserIco={OperaIco}
                    browserName="Opera"
                    minVersion="46"
                />
            </div>
        </section>
    );
};

export default Extensions;