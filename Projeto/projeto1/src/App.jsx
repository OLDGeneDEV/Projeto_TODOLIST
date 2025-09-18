import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Titulo from "./Titulo"
import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import Contato from "./pages/Contato";

//      <Titulo cor="red" nome="Gian" paragrafo={false} />
//      <Titulo cor="blue" />
//      <Titulo cor="purple"/>
//     <Titulo cor="orange" />

function App () {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/contato" element={<Contato />} />
        </Routes>
      </BrowserRouter>
    </div>
  ) 
}

export default App