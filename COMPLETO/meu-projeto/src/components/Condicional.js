import { useState } from 'react'

function Condicional() {
  const [email, setEmail] = useState()
  const [userEmail, setUserEmail] = useState()

  function enviarEmail(e) {
    e.preventDefault()
    setUserEmail(email)
    console.log(userEmail)
  }

    function limparEmail() {
    setUserEmail('')
  }
  return (
    <div>
      <h1>CADASTRE O EMAIL</h1>
      <form>
        <input
          type="email"
          placeholder="digite email..."
          onChange={(e) => setEmail(e.target.value)}
        />

        <button type="submit" onClick={enviarEmail}>
          ENVIAR EMAIL
        </button>
        
        {userEmail && (
            /* CONDIÇÃO IF {}*/
            <div>
                <p>EMAIL DO USER É {userEmail}</p>
                <button onClick={limparEmail}>Limpar e-mail</button>
            </div>
        )}
      </form>
    </div>
  );
}

export default Condicional;
