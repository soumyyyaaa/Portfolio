import Home from "./Page/Home";
import Contactme from "./Page/Contactme";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbars from "./Components/Navbar/Navbars"

function App() {
  return (
    <div className="App">
    <Navbars />
    <Home/>
    <Contactme/>
    </div>
  );
}

export default App;
