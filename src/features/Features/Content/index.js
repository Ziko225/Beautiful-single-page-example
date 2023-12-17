import Button from "../../../components/Button";
import InformationBlock from "../../../components/InformationBlock";
import RoundRectangle from "../../../components/RoundRectangle";
import { ReactComponent as IllustrationBookmark } from "./illustrationBookmark.svg";
import { ReactComponent as IllustrationSearch } from "./illustrationSearch.svg";
import { ReactComponent as IllustrationShare } from "./illustrationShare.svg";
import "./styles.scss";

const Content = ({ page = 1 }) => {

    const data = {
        1: {
            icon: <IllustrationBookmark className="Illustration__ico" />,
            title: "Bookmark in one click",
            text: `Organize your bookmarks however you like. Our
            simple drag-and-drop interface gives you complete
            control over how you manage your favourite sites.`
        },
        2: {
            icon: <IllustrationSearch className="Illustration__ico" />,
            title: "Intelligent search",
            text: `Our powerful search feature will help you find saved
            sites in no time at all. No need to trawl through all of
            your bookmarks.`
        },
        3: {
            icon: <IllustrationShare className="Illustration__ico" />,
            title: "Share your bookmarks",
            text: `Easily share your bookmarks and collections with
            others. Create a shareable link that you can send at
            the click of a button.`
        },
    };

    return (
        <article className="contentBlock">
            <div className="contentBlock__Illustration">
                {data[page].icon}
                <RoundRectangle className="Illustration__rectangle" />
            </div>
            <div className="contentBlock__content">
                <InformationBlock title={data[page].title} className="content__information" >
                    {data[page].text}
                </InformationBlock>
                <Button className="content__button">More Info</Button>
            </div>
        </article>
    );
};

export default Content;