import Button from "./evento/Button"

function Evento({ numero }) {
  function meuEvento() {
    console.log(`EVENTO ATIVADO`);
    console.log(`ATIVADO ${numero}`);
  }

  function segundoEvento() {
    console.log("SEGUNDO EVENTO ATIVADO")
  }

  return (
    <div>
      <p>Clique para disparar Evento</p>
      <Button event={meuEvento} text="PRIMEIRO EVENTO" />
      <Button event={segundoEvento} text="SEGUNDO EVENTO" />
    </div>
  );
}

export default Evento;
