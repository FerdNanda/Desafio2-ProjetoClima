function ForecastItem({ data, max, min, chuva }) {
  // "2026-09-28" vira "28/09/2026"
  const [year, month, day] = data.split("-");

  return (
    <div className="forecast-item">
      <p>{day}/{month}/{year}</p>
      <p>Máxima: {max} °C</p>
      <p>Mínima: {min} °C</p>
      <p>Chuva: {chuva} mm</p>
    </div>
  );
}

export default ForecastItem;