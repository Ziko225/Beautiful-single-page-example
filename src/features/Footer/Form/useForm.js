
import { useEffect, useState } from "react";

const useForm = () => {
    const [isError, setIsError] = useState(false);

    const [email, setEmail] = useState("");

    const [number, setNumber] = useState(35000);

    useEffect(() => {
        if (number <= 0) {
            return setNumber(0);
        }

        const timeout = setTimeout(() => {
            setNumber(number - 875);
        }, 500);

        return () => clearTimeout(timeout);
    }, [number]);

    const submitHandler = (event) => {
        event.preventDefault();

        setIsError(false);

        const pattern = new RegExp(/^[\w-\\.]+@([\w-]+\.)+[\w-]{2,5}$/g);

        if (pattern.test(email)) {
            return alert("ok");
        }

        setIsError(true);
    };

    const inputHandler = (event) => {
        setEmail(event.target.value);
    };

    const numberWithDot = number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

    return { submitHandler, inputHandler, isError, numberWithDot };
};

export default useForm;