function CardsClima({ dados }) {
  return (
    <div className="CardsClima">
      <h2>{dados.nome}</h2>
      <p>Temperatura: {dados.temperature} °C</p>
      <p>Vento: {dados.windspeed} km/h</p>

    </div>
  );
}

export default CardsClima;