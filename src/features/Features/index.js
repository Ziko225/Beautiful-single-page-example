import InformationBlock from "../../components/InformationBlock";
import Content from "./Content";
import { useState } from "react";
import "./styles.scss";

const Features = () => {
    const [page, setPage] = useState(1);

    const activeClass = (currentPage) => {
        return page === currentPage ? "active" : "";
    };

    const clickHandler = (event) => {
        setPage(+event.currentTarget.value);
    };

    return (
        <section className="features">
            <InformationBlock title="Features" center className="features__header" >
                Our aim is to make it quick and easy for you to access your
                favourite websites. Your bookmarks sync between your devices
                so you can access them on the go.
            </InformationBlock>
            <div className="features__navigation">
                <button
                    value={1}
                    onClick={clickHandler}
                    className={`navigation__button ${activeClass(1)}`}
                >
                    Simple Bookmarking
                </button>
                <button
                    value={2}
                    onClick={clickHandler}
                    className={`navigation__button ${activeClass(2)}`}
                >
                    Speedy Searching
                </button>
                <button
                    value={3}
                    onClick={clickHandler}
                    className={`navigation__button ${activeClass(3)}`}
                >
                    Easy Sharing
                </button>
            </div>
            <Content page={page} />
        </section>
    );
};

export default Features;