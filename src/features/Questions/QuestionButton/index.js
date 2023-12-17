import { useState } from "react";
import { ReactComponent as Arrow } from "./arrow.svg";
import "./styles.scss";

const QuestionButton = ({ quesstion, children }) => {
    const [isOpen, setIsOpen] = useState(false);

    const clickButtonHandler = () => {
        setIsOpen(!isOpen);
    };

    const clickArticleHandler = () => {
        if (isOpen) {
            return;
        }

        setIsOpen(true);
    };

    return (
        <article
            onClick={clickArticleHandler}
            className={`questionButton ${isOpen ? "questionButton--open" : ""}`}
        >
            <h3 className="questionButton__title">
                {quesstion}
            </h3>
            <button
                onClick={clickButtonHandler}
                className="questionButton__button">
                <Arrow className="questionButton__ico" />
            </button>
            {isOpen && <p className="questionButton__content">
                {children}
            </p>}
        </article>
    );
};

export default QuestionButton;