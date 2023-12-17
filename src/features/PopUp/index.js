import Content from "../Features/Content";
import "./styles.scss";

const PopUp = ({ closeBar }) => {

    return (
        <div className="popup">
            <button onClick={closeBar}>X</button>
            <Content />
        </div>
    );
};

export default PopUp;