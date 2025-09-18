function Saudacao({nome}) {

    function gerarSaudacao(algumNome) {
        return `OLÁ ${algumNome}, tudo bem?`
    }
  return (
    <>
      {nome && <p>{gerarSaudacao(nome)}</p>}
      <p> só executa se houver nome no state </p>
    </>
  );
}
export default Saudacao;
