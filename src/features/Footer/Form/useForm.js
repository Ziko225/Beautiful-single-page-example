import { useState } from "react";

const useForm = () => {
    const [isError, setIsError] = useState(false);

    const [email, setEmail] = useState("");

    const [number, setNumber] = useState(35000);

    const submitHandler = () => {

    };

    const inputHandler = (event) => {
        setEmail(event.target.value);
    };

    return { submitHandler, inputHandler, isError, number };
};

export default useForm;