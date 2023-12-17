import { useState } from "react";
import Content from "../Features/Content";
import "./styles.scss";

const PopUp = ({ closeBar }) => {
    const [page, setPage] = useState(1);

    const nextPage = () => {
        if (page === 3) {
            return setPage(1);
        }

        setPage(page + 1);
    };

    return (
        <div className="popup">
            <button className="popup__button" onClick={closeBar}>X</button>
            <Content page={page} />

            <button className="popup__button" onClick={nextPage}>{"Next >>"}</button>
        </div>
    );
};

export default PopUp;