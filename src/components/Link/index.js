import "./styles.scss";

const Link = ({ theme, children, className, href = "/" }) => {
    return (
        <a href={href} className={`link link--${theme} ${className}`}>
            {children}
        </a>
    );
};

export default Link;