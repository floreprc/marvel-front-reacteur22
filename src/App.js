import "./App.css";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Characters from "./pages/Characters";
import Comics from "./pages/Comics";
import Favorites from "./pages/Favorites";
import Error from "./components/Error";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faAngleDown,
  faAngleLeft,
  faAngleRight,
  faMagnifyingGlass,
  faQuoteLeft,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import CharacterDetails from "./pages/CharacterDetails";
library.add(
  faAngleDown,
  faAngleLeft,
  faAngleRight,
  faMagnifyingGlass,
  faQuoteLeft,
  faHeart
);

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/characters" element={<Characters />}></Route>
        <Route path="/character/:id" element={<CharacterDetails />}></Route>
        <Route path="/comics" element={<Comics />}></Route>
        <Route path="/favorites" element={<Favorites />}></Route>
        <Route path="*" element={<Error />}></Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
