import Extensions from "./features/Extensions";
import Features from "./features/Features";
import Footer from "./features/Footer";
import Form from "./features/Form";
import Header from "./features/Header";
import Navigation from "./features/Navigation";
import Questions from "./features/Questions";

function App() {
    return (
        <>
            <Navigation />
            <main className="main">
                <Header />
                <Features />
                <Extensions />
                <Questions />
                <Form />
            </main>
            <Footer />
        </>
    );
}

export default App;
