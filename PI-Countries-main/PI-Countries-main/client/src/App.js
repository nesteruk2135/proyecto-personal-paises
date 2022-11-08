import './App.css';
import {Route,Routes} from "react-router-dom"
import Home from './components/Home/Home';
import CreateActivity from "./components/CreateActivity/CreateActivity"
import Details from "./components/Cards/details/details"
import LandingPage from './components/LandingPage';
function App() {
  return (
    <div className="App">
      <Routes>
      <Route exact path = "/" element={<LandingPage/>}/>
        <Route exact path = "/countries" element={<Home/>}/>
        <Route exact path = "/countries/:id" element={<Details/>}/>
        <Route extact path= "/create" element={<CreateActivity/>}/>
      </Routes>

    </div>
  );
}

export default App;
