import "./styles.scss";

const Button = ({ theme, children, className }) => {
    return (
        <button className={`button button--${theme} ${className}`}>
            {children}
        </button>
    );
};

export default Button;