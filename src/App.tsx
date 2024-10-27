import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Buttons from "./Pages/Button/Buttons";
import Medias from "./Pages/Media/Medias";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/buttons" element={<Buttons />} />
        <Route path="/medias" element={<Medias />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
