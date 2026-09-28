import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

import SearchBar from "./components/SearchBar";
import CardsClima from "./components/cardsClima";
import ListaPrevisao from "./components/ListPrevisao";
import Favoritos from "./components/Favoritos";

function App() {
  const [cidade, setCidade] = useState("");
  const [dados, setDados] = useState(null);
  const [loading, setLoading] = useState(false);
  const [erro, setErro] = useState("");
  const [favoritos, setFavoritos] = useState(() => {
    try {
      const favoritosSalvos = localStorage.getItem("favoritos");
      return favoritosSalvos ? JSON.parse(favoritosSalvos) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("favoritos", JSON.stringify(favoritos));
  }, [favoritos]);

  async function buscar(nomeCidade = cidade) {
    if (nomeCidade.trim() === "") {
      setErro("Digite o nome de uma cidade.");
      return;
    }

    setLoading(true);
    setCidade(nomeCidade);
    setErro("");
    setDados(null);

    try {
      // 1) descobre latitude e longitude da cidade
      const geo = await axios.get(
        "https://geocoding-api.open-meteo.com/v1/search",
        { params: { name: nomeCidade, count: 1, language: "pt" } }
      );

      if (!geo.data.results || geo.data.results.length === 0) {
        setErro("Cidade não encontrada");
        return;
      }

      const cidadeEncontrada = geo.data.results[0];

      // 2) busca o clima atual
      const clima = await axios.get("https://api.open-meteo.com/v1/forecast", {
        params: {
          latitude: cidadeEncontrada.latitude,
          longitude: cidadeEncontrada.longitude,
          current: "temperature_2m,wind_speed_10m",
          daily: "temperature_2m_max,temperature_2m_min,precipitation_sum",
          timezone: "auto",
        },
      });

      if (!clima.data.current || !clima.data.daily) {
        setErro("Não foi possível obter os dados do clima.");
        return;
      }

      setDados({
        nome: cidadeEncontrada.name,
        temperature: clima.data.current.temperature_2m,
        windspeed: clima.data.current.wind_speed_10m,
        diario: clima.data.daily,
      });
    } catch {
      setErro("Erro ao buscar os dados. Tente novamente.");
    } finally {
      setLoading(false);
    }
  }

  function favoritar() {
    if (!dados || favoritos.includes(dados.nome)) {
      return;
    }

    setFavoritos([...favoritos, dados.nome]);
  }

  function removerFavorito(nome) {
    setFavoritos(favoritos.filter((favorito) => favorito !== nome));
  }

  return (
    <div className="app">
      <h1>Previsão do Tempo</h1>

      <SearchBar cidade={cidade} setCidade={setCidade} onBuscar={buscar} />
      <Favoritos
        favoritos={favoritos}
        onSelecionar={buscar}
        onRemover={removerFavorito}
      />

      {loading && <p>Carregando...</p>}
      {erro && <p>{erro}</p>}
      {dados && (
        <>
          <CardsClima dados={dados} />
          <button onClick={favoritar}>Favoritar {dados.nome}</button>
          <ListaPrevisao diario={dados.diario} />
        </>
      )}
    </div>
  );
}

export default App;