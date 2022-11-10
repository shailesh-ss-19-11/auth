import Login from "./Login";
import Home from "./Home";
import {useState} from "react"
function App() {
  // const [login, setLogin] = useState(false);
  return (
    <div className="App">
      {
      localStorage.token ? <Home/> :<Login/>
      }
    </div>
  );
}

export default App;
