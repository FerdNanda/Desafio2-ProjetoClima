import ForecastItem from "./ForecastItem";

function ListPrevisao({ diario }) {
  return (
    <div className="ListPrevisao">
      <h3>Próximos dias</h3>
      {diario.time.map((dia, i) => (
        <ForecastItem
          key={dia}
          data={dia}
          max={diario.temperature_2m_max[i]}
          min={diario.temperature_2m_min[i]}
          chuva={diario.precipitation_sum[i]}
        />
      ))}
    </div>
  );
}

export default ListPrevisao;