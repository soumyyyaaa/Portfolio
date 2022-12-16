import Home from "./Page/Home";
import Contactme from "./Page/Contactme";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbars from "./Components/Navbar/Navbars"
import Project from "./Page/Project"


function App() {
  return (
    <div className="App">
    <Navbars />
    <Home/>
    <Project />
    <Contactme/>
    </div>
  );
}

export default App;
