import Extensions from "./features/Extensions";
import Features from "./features/Features";
import Footer from "./features/Footer";
import Header from "./features/Header";
import Navigation from "./features/Navigation";
import Questions from "./features/Questions";
import "./styles.scss";

function App() {
    return (
        <>
            <Navigation />
            <main className="main">
                <Header />
                <Features />
                <Extensions />
                <Questions />
            </main>
            <Footer />
        </>
    );
}

export default App;
