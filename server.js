const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Serve arquivos estáticos da pasta 'public'
app.use(express.static(path.join(__dirname, 'public')));

// Rota principal que serve o index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Endpoint opcional para simular a API de streaming, mas o frontend chamará a TelaflixAPI diretamente
app.get('/api/filme-oz', (req, res) => {
  const tmdbId = '658224'; // ID TMDB fictício (substitua por um real se tiver)
  const imdbId = 'tt24218194'; // ID IMDB fictício (substitua por um real se tiver)
  const movieTitle = 'O Maravilhoso Mágico de Oz - Parte 1';
  const movieYear = '2025';

  const streamingUrlById = `https://telaflixapi.com/e/${tmdbId}`;
  const streamingUrlByTitleYear = `https://telaflixapi.com/e/movie?title=${encodeURIComponent(movieTitle)}&year=${movieYear}`;

  res.json({
    title: movieTitle,
    year: movieYear,
    tmdbId: tmdbId,
    imdbId: imdbId,
    streamingUrlById: streamingUrlById,
    streamingUrlByTitleYear: streamingUrlByTitleYear
  });
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});