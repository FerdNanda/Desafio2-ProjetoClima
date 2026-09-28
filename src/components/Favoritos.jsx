function Favoritos({ favoritos, onSelecionar, onRemover }) {
  if (favoritos.length === 0) {
    return <p>Nenhuma cidade favorita ainda.</p>;
  }

  return (
    <div className="Favoritos">
      <h3>Favoritos</h3>
      {favoritos.map((nome) => (
        <div key={nome} className="favorito">
          <button onClick={() => onSelecionar(nome)}>{nome}</button>
          <button onClick={() => onRemover(nome)}>Remover</button>
        </div>
      ))}
    </div>
  );
}

export default Favoritos;