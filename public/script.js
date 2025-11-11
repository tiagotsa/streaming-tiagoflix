document.addEventListener('DOMContentLoaded', () => {
    const movieDetailsDiv = document.getElementById('movie-details');
    const videoPlayerDiv = document.getElementById('video-player');
    const loadMovieButton = document.getElementById('load-movie-button');

    // Assumindo que o filme tem um ID TMDB fictício ou IMDB
    const TMDB_ID = '658224'; // SUBSTITUA PELO ID REAL SE VOCÊ TIVER UM
    const IMDB_ID = 'tt24218194'; // SUBSTITUA PELO ID REAL SE VOCÊ TIVER UM
    const MOVIE_TITLE = 'O Maravilhoso Mágico de Oz - Parte 1';
    const MOVIE_YEAR = '2025';

    // URL base da API de streaming (usaremos o método por ID TMDB)
    const STREAMING_BASE_URL = 'https://telaflixapi.com/e/';

    // Função para carregar os detalhes e o player do filme
    async function loadMovie() {
        movieDetailsDiv.innerHTML = `<p>Buscando detalhes do filme...</p>`;
        videoPlayerDiv.innerHTML = ''; // Limpa o player anterior

        try {
            // URL que será usada como src do iframe para o player da TelaflixAPI
            const playerUrl = `${STREAMING_BASE_URL}${TMDB_ID}`;
            // Ou, se preferir usar por título e ano (menos recomendado para player direto):
            // const playerUrl = `${STREAMING_BASE_URL}movie?title=${encodeURIComponent(MOVIE_TITLE)}&year=${MOVIE_YEAR}`;

            // Exibindo as informações do filme
            movieDetailsDiv.innerHTML = `
                <p><strong>Título:</strong> ${MOVIE_TITLE}</p>
                <p><strong>Ano:</strong> ${MOVIE_YEAR}</p>
                <p><strong>TMDB ID:</strong> ${TMDB_ID}</p>
                <p><strong>IMDB ID:</strong> ${IMDB_ID}</p>
                <p>Para assistir, clique em "Carregar Filme" ou o player já carregou.</p>
                <p>URL da API de Streaming (para referência): <a href="${playerUrl}" target="_blank">${playerUrl}</a></p>
            `;

            // Criar o iframe e inseri-lo no div do player
            const iframe = document.createElement('iframe');
            iframe.src = playerUrl;
            iframe.allowFullscreen = true;
            iframe.loading = "lazy";
            videoPlayerDiv.appendChild(iframe);

        } catch (error) {
            console.error('Erro ao carregar o filme:', error);
            movieDetailsDiv.innerHTML = `<p style="color: red;">Erro ao carregar o filme. Por favor, tente novamente.</p>`;
            videoPlayerDiv.innerHTML = `<p style="color: red;">Não foi possível carregar o player de vídeo.</p>`;
        }
    }

    // Adiciona um listener para o botão "Carregar Filme"
    loadMovieButton.addEventListener('click', loadMovie);

    // Carregar o filme automaticamente ao carregar a página
    loadMovie();
});