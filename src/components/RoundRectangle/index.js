import "./styles.scss";

const RoundRectangle = ({ side, className }) => {
    return (
        <div className={`rectangle rectangle--${side} ${className}`} />
    );
};

export default RoundRectangle;