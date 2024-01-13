import Home from "./Page/Home";
import Projects from "./Page/Projects";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbars from "./Components/Navbar/Navbars";
import Footer from "./Components/Navbar/Footer";
import Contactme from "./Page/Contactme";
import Experience from "./Page/Experience";

function App() {
    let component;
    switch (window.location.pathname) {
        case "/":
            component = <Home />;
            break;
        case "/projects":
            component = <Projects />;
            break;
        case "/experience":
            component = <Experience />;
        default:
    }
    return (
        <>
            <Navbars />
            {component}
            <Contactme />
            <Footer />
        </>
    );
}

export default App;
