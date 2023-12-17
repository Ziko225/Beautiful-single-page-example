import Button from "../../../components/Button";
import { ReactComponent as WarnIco } from "./warn.svg";
import "./styles.scss";
import useForm from "./useForm";

const Form = () => {
    const { submitHandler, inputHandler, isError, numberWithDot } = useForm();

    const errorClassName = isError ? "form__inputSection--error" : "";

    return (
        <section className="formSection">
            <h3 className="formSection__subTitle">
                {`${numberWithDot}+ ALREADY JOINED`}
            </h3>
            <h2 className="formSection__title">
                Stay up-to-date with what we're doing
            </h2>
            <form onSubmit={submitHandler} className="formSection__form">
                <div className={`form__inputSection ${errorClassName}`}>
                    <div className="inputSection__inputWithIco">
                        <input
                            className="inputWithIco__input"
                            onChange={inputHandler}
                            type="email"
                            placeholder="Enter your email address"
                        />
                        {isError && <WarnIco className="inputWithIco__ico" />}
                    </div>
                    {isError && <p className="inputSection__errorText">
                        Whoops, make sure it's an email
                    </p>}
                </div>
                <Button theme="active" className="form__button">
                    Contect Us
                </Button>
            </form>
        </section>
    );
};

export default Form;