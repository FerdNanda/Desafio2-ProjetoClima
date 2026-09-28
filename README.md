# 🌦️ Painel de Previsão do Tempo

## 📌 Problemática

Muita gente precisa saber o tempo antes de sair de casa, mas os dados
meteorológicos ficam espalhados em APIs e nem sempre são fáceis de ler.
Como transformar esses dados em uma consulta simples e rápida?

## 🎯 Objetivo

Criar uma aplicação em React que busca a previsão do tempo de uma cidade
e mostra o clima atual e a previsão dos próximos dias de forma clara.

## 🛠️ Tecnologias utilizadas

- React
- Vite
- JavaScript
- Axios
- CSS (Flexbox e Media Queries)
- localStorage

## 🔌 API utilizada

[Open-Meteo](https://open-meteo.com/), uma API pública e gratuita:

- Geocoding API: transforma o nome da cidade em latitude e longitude
- Forecast API: retorna o clima atual e a previsão diária

## ✨ Principais funcionalidades

- Busca de cidade pelo nome
- Clima atual (temperatura e vento)
- Previsão dos próximos 7 dias (máxima, mínima e chuva)
- Cidades favoritas salvas no navegador (localStorage)
- Mensagens de carregamento e de erro
- Layout responsivo (celular, tablet e computador)

## 🧩 Componentes

- App
- SearchBar
- CardsClima
- ListPrevisão
- ForecastItem
- Favoritos


## 🌐 Link da aplicação publicada

[https://vercel.com/fernanda-laias-projects/desafio2-projeto-clima/GLhDTZEhMroqwYmopg67DRsUZ7se]

## 🤖 Uso de Inteligência Artificial

### Prompt utilizado

"Estou desenvolvendo, como estudante, uma aplicação de previsão do tempo
em React com Vite, inspirada no site Climatempo, para o Desafio 02.
Preciso consumir uma API pública com Axios, usar hooks como useState e
useEffect, criar componentes reutilizáveis, tratar estados de carregamento
e erro, salvar cidades favoritas no localStorage e deixar a interface
responsiva com CSS, sem usar grid. Pode me orientar, passo a passo e em
linguagem simples, explicando o motivo de cada decisão, para que eu
consiga compreender e explicar o código no final?"

### Objetivo

Utilizei a IA como apoio para planejar o projeto e entender os conceitos
estudados em aula (JavaScript, React, hooks, Axios e localStorage). Ela
me ajudou a escolher uma API gratuita (Open-Meteo), organizar os
componentes, tratar carregamento e erros, criar os favoritos e ajustar o
CSS responsivo com flexbox. Testei cada etapa e escrevi o README com
minhas palavras, e consigo explicar as decisões do projeto.

