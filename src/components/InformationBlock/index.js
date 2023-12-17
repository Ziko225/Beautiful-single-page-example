import "./styles.scss";

const InformationBlock = ({ title, children, className, center, isHeader }) => {
    const customsClassName = `
        ${center ? "informationBlock--center" : ""} 
        ${isHeader ? "informationBlock--primary" : ""} 
        ${className}
    `.trim();

    return (
        <div className={`informationBlock ${customsClassName}`}>
            {title && <h2 className="informationBlock__title">
                {title}
            </h2>}
            <p className="informationBlock__text">
                {children}
            </p>
        </div>
    );
};

export default InformationBlock;