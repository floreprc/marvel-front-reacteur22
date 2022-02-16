import "./App.css";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import Characters from "./pages/Characters";
import Comics from "./pages/Comics";
import Favorites from "./pages/Favorites";
import Error from "./components/Error";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import {} from "@fortawesome/free-solid-svg-icons";
library.add();

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/characters" element={<Characters />}></Route>
        <Route path="/comics" element={<Comics />}></Route>
        <Route path="/favorites" element={<Favorites />}></Route>
        <Route path="*" element={<Error />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
