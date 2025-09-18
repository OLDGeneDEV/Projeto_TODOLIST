import { useState } from "react";

function Form() {
  function cadastrarUsuario(e) {
    e.preventDefault();
    console.log(`Usuário: ${name} foi cadastrado com a senha ${password}`);
  }

  const [name, setName] = useState();
  const [password, setPassword] = useState();

  return (
    <div>
      <h1>CADASTRO</h1>
      <form onSubmit={cadastrarUsuario}>
        <div>
          <label htmlFor="name">NOME:</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Digite nome"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">SENHA:</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Digite a senha"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <input type="submit" placeholder="Enviar" />
        </div>
      </form>
    </div>
  );
}

export default Form;
