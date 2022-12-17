import Home from "./Page/Home";
import Contactme from "./Page/Contactme";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbars from "./Components/Navbar/Navbars";
import Project from "./Page/Project";
import Footer from "./Components/Navbar/Footer";

function App() {
  return (
    <div className="App">
      <Navbars />
      <Home />
      <Project />
      <Contactme />
      <Footer />
    </div>
  );
}

export default App;
