import { useState } from "react";
function Titulo({ nome, paragrafo, cor }) {
  const [texto, setTexto] = useState("ESTADO ");
  const [inputText, setInputText] = useState("");

  function clicou() {
    setTexto(inputText);
  }

  //let nome = "Gian";
  //const soma = 10 + 10;
  //const urlImg = "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png";

  // <img width={100} src={urlImg}/>
  // <h1>TITULO DO {soma} e {nome}</h1>
  // <p> Nada </p>
  // <button onClick={() => { setTexto("MUDANÇA ")}}>Mudar</button>
  // <h1>TITULO DO {nome}</h1>
  // <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta deleniti assumenda quisquam, optio voluptate quas molestiae sunt ea accusantium asperiores? Tempore magni autem rem ex reprehenderit a, optio officia facere.</p>
  //     <div>
  //    <h1 style={{ color: cor }}> MENSAGEM {texto}{nome ? nome : "Fulano"}</h1>
  //    {paragrafo ?
  //      <p>Lorem ipsum dolor sit</p>
  //      :
  //      <>
  //        <input value={inputText} onChange={(e)=>{setInputText(e.target.value)}} type="text" />
  //        <button onClick={clicou}>Mudar</button>
  //      </>
  //    }
  //  </div >

  return (
    <div>
      <h1 style={{ color: cor }}> {texto} </h1>
      <input
        value={inputText}
        onChange={(e) => {
          setInputText(e.target.value);
        }}
        type="text"
      />
      <button onClick={clicou}>Mudar</button>
    </div>
  );
}

export default Titulo;
