import Extensions from "./features/Extensions";
import Features from "./features/Features";
import Footer from "./features/Footer";
import Header from "./features/Header";
import Navigation from "./features/Navigation";
import Questions from "./features/Questions";
import { useToggle } from "./hooks/useToggle";
import { useEffect } from "react";
import PopUp from "./features/PopUp";
import "./styles.scss";

function App() {
    const [isPopUpOpen, toggleIsPopUpOpen, setIsPopUpOpen] = useToggle(false);

    useEffect(() => {
        const timout = setTimeout(() => {
            setIsPopUpOpen(true);
        }, 30 * 1000);

        return () => clearTimeout(timout);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            <div onMouseEnter={setIsPopUpOpen} className="hoverTop" />
            {isPopUpOpen && <PopUp closeBar={toggleIsPopUpOpen} />}
            <Navigation isBlur={isPopUpOpen} />
            <main className={`main ${isPopUpOpen ? "blur" : ""}`}>
                <Header />
                <Features />
                <Extensions />
                <Questions />
            </main>
            <Footer isBlur={isPopUpOpen} />
        </>
    );
}

export default App;
