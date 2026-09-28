function SearchBar({ cidade, setCidade, onBuscar }) {
  return (
    <div>
      <input
        type="text"
        placeholder="Digite uma cidade"
        value={cidade}
        onChange={(e) => setCidade(e.target.value)}
      />
      <button onClick={() => onBuscar()}>Buscar</button>
    </div>
  );
}

export default SearchBar;