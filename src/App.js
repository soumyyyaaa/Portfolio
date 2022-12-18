import Home from "./Page/Home";
import Projects from "./Page/Projects";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbars from "./Components/Navbar/Navbars";
import Footer from "./Components/Navbar/Footer";
import Contactme from "./Page/Contactme"

function App() {
  let component;
  switch (window.location.pathname) {
    case "/":
      component = <Home />
      break;
    case "/projects":
      component = <Projects />
      break;
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
