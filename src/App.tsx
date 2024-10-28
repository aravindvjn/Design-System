import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Buttons from "./Pages/Button/Buttons";
import Medias from "./Pages/Media/Medias";
import TypographyPage from "./Pages/Typography/TypographyPage";
import Cards from "./Pages/Cards/Cards";
import Containers from "./Pages/Container/Containers";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/buttons" element={<Buttons />} />
        <Route path="/medias" element={<Medias />} />
        <Route path="/typography" element={<TypographyPage />} />
        <Route path="/cards" element={<Cards />} />
        <Route path="/containers" element={<Containers />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
