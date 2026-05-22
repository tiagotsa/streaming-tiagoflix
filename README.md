# 🎬 Streaming TelaTSA

[![NPM](https://img.shields.io/npm/l/react)](https://github.com/tiagotsa/streaming-tiagoflix/blob/main/LICENSE)


Sistema web de streaming de filmes desenvolvido com Node.js, Express e JavaScript puro, utilizando integração dinâmica com APIs externas para carregamento automático de players de vídeo.

---

# 📌 Sobre o Projeto

O **Streaming TelaTSA** é uma aplicação simples e leve para exibição de filmes em uma interface moderna baseada em cards.

O projeto possui:

* Backend em Node.js com Express
* Frontend em HTML, CSS e JavaScript puro
* Sistema de cache em memória
* Integração dinâmica com APIs externas de streaming
* Reprodução via iframe
* Suporte a vídeos hospedados no Google Drive
* Interface responsiva

O objetivo do sistema é permitir o carregamento rápido de filmes através de uma interface simples e otimizada.

---

# 🖼️ Funcionalidades

## ✅ Recursos disponíveis

* Listagem de filmes em formato de galeria
* Reprodução de filmes diretamente no navegador
* Integração com APIs externas
* Extração automática de links de streaming
* Sistema de cache para evitar bloqueios e reduzir chamadas externas
* Reprodução de vídeos do Google Drive
* Interface responsiva
* Scroll automático ao selecionar um filme
* Tratamento básico de erros
* Fallback para imagens inexistentes

---

# 🛠️ Tecnologias Utilizadas

## Backend

* Node.js
* Express
* Axios
* Cheerio

## Frontend

* HTML5
* CSS3
* JavaScript Vanilla

---

# 📂 Estrutura do Projeto

```bash
streaming-telatsa/
│
├── public/
│   ├── index.html
│   ├── style.css
│   ├── script.js
│   └── filmes/
│
├── server.js
├── package.json
├── package-lock.json
└── node_modules/
```

---

# ⚙️ Funcionamento da Aplicação

## Fluxo do Sistema

### 1. Frontend

O frontend renderiza os cards dos filmes dinamicamente através do arquivo:

```bash
public/script.js
```

Cada filme possui:

* ID do TMDB
* título
* ano
* imagem
* tipo de carregamento

Exemplo:

```javascript
{
    type: 'api',
    tmdbId: '658224',
    title: 'O Maravilhoso Mágico de Oz',
    year: '2025'
}
```

---

### 2. Backend

O backend recebe a requisição:

```http
GET /api/get-movie-link/:tmdbId
```

Após isso:

1. Verifica o cache
2. Busca dados na API externa
3. Extrai os identificadores necessários
4. Realiza chamada AJAX
5. Obtém o link final do player
6. Retorna a URL para o frontend

---

### 3. Reprodução

O frontend injeta dinamicamente um iframe:

```html
<iframe src="URL_DO_PLAYER"></iframe>
```

---

# 🧠 Sistema de Cache

O projeto possui um sistema de cache em memória para reduzir chamadas externas.

## Objetivo do Cache

* Melhorar desempenho
* Evitar excesso de requisições
* Reduzir erros HTTP 429
* Diminuir tempo de carregamento

## Tempo de Cache

```javascript
const CACHE_DURATION = 1000 * 60 * 60 * 4;
```

Equivalente a:

* 4 horas

---

# 🚀 Como Executar o Projeto

## 1. Clone o repositório

```bash
git clone URL_DO_REPOSITORIO
```

---

## 2. Entre na pasta

```bash
cd streaming-telatsa
```

---

## 3. Instale as dependências

```bash
npm install
```

---

## 4. Execute o projeto

```bash
npm start
```

---

## 5. Acesse no navegador

```bash
http://localhost:3000
```

---

# 📦 Dependências do Projeto

## Express

Framework responsável pelo servidor HTTP.

```bash
npm install express
```

---

## Axios

Utilizado para realizar requisições HTTP.

```bash
npm install axios
```

---

## Cheerio

Biblioteca utilizada para manipulação e scraping de HTML.

```bash
npm install cheerio
```

---

# 🔌 Endpoint da API

## Buscar Link do Filme

### Requisição

```http
GET /api/get-movie-link/:tmdbId
```

### Exemplo

```http
GET /api/get-movie-link/658224
```

### Resposta de sucesso

```json
{
  "success": true,
  "url": "https://servidor-player.com/embed"
}
```

### Resposta de erro

```json
{
  "success": false,
  "message": "Erro ao buscar o filme"
}
```

---

# 🎨 Interface

A interface foi construída com foco em simplicidade e performance.

## Recursos visuais

* Layout limpo
* Cards de filmes
* Player em destaque
* Rolagem suave
* Responsividade
* Feedback visual de carregamento

---

# 📱 Responsividade

O projeto funciona em:

* Desktop
* Notebook
* Tablet
* Smartphones

---

# 🔒 Tratamento de Erros

O sistema possui tratamento básico para:

* Filme indisponível
* Falha na API externa
* Problemas de carregamento
* URLs inválidas
* Imagens quebradas

---

# 📈 Melhorias Futuras

## Sugestões de evolução

* Sistema de autenticação
* Banco de dados
* Painel administrativo
* Pesquisa de filmes
* Categorias
* Favoritos
* Histórico de reprodução
* Integração oficial com TMDB API
* Upload de vídeos
* Deploy em nuvem
* Docker
* Sistema de usuários
* Progressive Web App (PWA)
* Lazy loading
* Cache persistente com Redis

---

# ☁️ Deploy

O projeto pode ser hospedado em:

* Render
* Railway
* Vercel
* VPS Linux
* DigitalOcean
* AWS

---

# 🧪 Scripts Disponíveis

## Iniciar aplicação

```bash
npm start
```

---

# 📄 package.json

```json
{
  "name": "streaming-oz",
  "version": "1.0.0",
  "main": "server.js"
}
```

---

# 🔍 Pontos Técnicos Importantes

## Arquitetura

O projeto segue uma arquitetura simples:

```text
Frontend → Backend Express → API Externa → Player
```

---

## Sistema de Extração

O backend utiliza:

* Axios para requisições
* Cheerio para leitura de HTML

Isso permite:

* capturar IDs
* processar páginas
* extrair links dinâmicos

---

## Segurança

Atualmente o projeto possui uma estrutura básica.

Para ambiente de produção recomenda-se:

* Rate limit
* Helmet
* Variáveis de ambiente
* Proxy reverso
* Logs estruturados
* Validação de entrada
* HTTPS

---

# 👨‍💻 Autor

Projeto desenvolvido por:

**Tiago Almeida**

---

# 📃 Licença

Este projeto está sob licença ISC.

---

# ⭐ Considerações Finais

O Streaming TelaTSA é um projeto leve, funcional e de fácil manutenção, ideal para estudos de:

* Node.js
* Express
* APIs
* Web scraping
* Streaming via iframe
* Manipulação de DOM
* Frontend Vanilla JavaScript

O sistema demonstra uma integração prática entre frontend e backend com carregamento dinâmico de mídia e otimização através de cache em memória.
