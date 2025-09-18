function OutraLista({ itens }) {
  return (
    <>
      <h3>LISTA DE COISAS BOAS:</h3>
      {itens.length > 0 ? (
        itens.map((item, index) => {
          <p key={index}>{item}</p>;
          //pode ser item.name
        })) : (
            <p>Não há itens na lista</p>
        )}
     </>
    );
}

export default OutraLista;
