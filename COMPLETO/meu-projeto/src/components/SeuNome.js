function SeuNome({ setNome }) {
  return (
    <div>
      <p>DIGITE SEU NOME:</p>
      <input type="text" placeholder="qual seu nome?" onChange={(e) => setNome(e.target.value)} />
    </div>
  );
}

export default SeuNome;
