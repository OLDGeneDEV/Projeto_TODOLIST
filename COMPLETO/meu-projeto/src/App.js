/* import logo from "./logo.svg"; */
import "./App.css";
import HelloWorld from "./components/HelloWorld.js";
import SayMyName from "./components/SayMyName";
import Pessoa from "./components/Pessoa";
import Frase from "./components/Frase";
import List from "./components/List";
import Evento from "./components/Evento";
import Form from "./components/Form";
import Condicional from "./components/Condicional";
import { useState } from "react";
import SeuNome from "./components/SeuNome";
import Saudacao from "./components/Saudacao";
import OutraLista from "./components/OutraLista.js";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Empresa from "./pages/Empresa";
import Contato from "./pages/Contato";
import Navbar from "./layout/Navbar.js";
import Footer from "./layout/Footer.js";

function App() {
  const [nome, setNome] = useState();
  const meusItens = ["React", "Vue", "Angular"];
  const name = "Maria";
  const newName = name.toUpperCase();
  const url = "https://via.placeholder.com/150";

  function sum(a, b) {
    return a + b;
  }

  return (
    <div className="App">
      <h1>TESTE</h1>
      <h2>TESTE</h2>
      <h3>TESTE</h3>
      <h4>TESTE</h4>
      <h5>TESTE</h5>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/empresa" element={<Empresa />} />
          <Route path="/contato" element={<Contato />} />
        </Routes>
      </Router>

      <h6>TESTE</h6>
      <h1>STATE LIFT, SUBIR O USE STATE</h1>
      <SeuNome setNome={setNome} />
      <Saudacao nome={nome} />
      <p>APP do chavenamechave</p>
      <p>APP do {newName}</p>
      <p>SOMA: {sum(1, 2)}</p>
      <img src={url} alt="IMAGEM" />
      <Evento numero="1" />
      <Evento numero="2" />
      <Form />
      <HelloWorld />
      <OutraLista itens={meusItens} />
      <List />
      <Frase />
      <Condicional />
      <Frase />
      <Pessoa
        nome="Rodrigo"
        idade="28"
        profissao="programador"
        foto="https://via.placeholder.com/150"
      />
      <Footer/>
    </div>
  );
}

export default App;

/* Inicializa projeto, parte visual */