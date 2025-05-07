function Contador({ texto, onClick }) {
    return (
      <button onClick={onClick} className="botao">
        {texto}
      </button>
    );
  }
  
  export default Contador;
  