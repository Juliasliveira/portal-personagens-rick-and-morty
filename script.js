// ====== Configuração ======
const API_URL = 'https://rickandmortyapi.com/api/character';
const TRADUCAO = { Alive: 'Vivo', Dead: 'Morto', unknown: 'Desconhecido' };

let pagina = 1;
let totalPaginas = 1;

const areaCards = document.getElementById('cards');
const mensagem = document.getElementById('mensagem');
const botaoMais = document.getElementById('mais');
const campoBusca = document.getElementById('busca');
const filtro = document.getElementById('filtro');

// ====== Criação dinâmica do card (DOM) ======
function criarCard(p) {
  const card = document.createElement('article');
  card.className = 'card';

  const img = document.createElement('img');
  img.src = p.image;
  img.alt = 'Foto de ' + p.name;
  img.loading = 'lazy';

  const corpo = document.createElement('div');
  corpo.className = 'card-corpo';

  const nome = document.createElement('h2');
  nome.textContent = p.name;

  const selo = document.createElement('span');
  selo.className = 'selo ' + p.status.toLowerCase();
  selo.textContent = TRADUCAO[p.status] || p.status;

  const especie = document.createElement('p');
  especie.textContent = 'Espécie: ' + p.species;

  const origem = document.createElement('p');
  origem.textContent = 'Origem: ' + p.origin.name;

  corpo.append(nome, selo, especie, origem);
  card.appendChild(img);
  card.appendChild(corpo);
  return card;
}

// ====== Consumo da API (fetch + then) ======
function buscarPersonagens(limpar) {
  if (limpar) {
    pagina = 1;
    areaCards.innerHTML = '';
  }
  mensagem.textContent = 'Carregando...';
  botaoMais.hidden = true;

  const params = new URLSearchParams({
    page: pagina,
    name: campoBusca.value.trim(),
    status: filtro.value
  });

  fetch(API_URL + '?' + params)
    .then(function (resposta) {
      if (!resposta.ok) throw new Error('Nenhum personagem encontrado.');
      return resposta.json();
    })
    .then(function (dados) {
      totalPaginas = dados.info.pages;
      dados.results.forEach(function (p) {
        areaCards.appendChild(criarCard(p));
      });
      mensagem.textContent = dados.info.count + ' personagens encontrados.';
      botaoMais.hidden = pagina >= totalPaginas;
    })
    .catch(function (erro) {
      mensagem.textContent = erro.message + ' Tente outro nome ou filtro.';
    });
}

// ====== Eventos ======
let temporizador;
campoBusca.addEventListener('input', function () {
  clearTimeout(temporizador);
  temporizador = setTimeout(function () { buscarPersonagens(true); }, 400);
});
filtro.addEventListener('change', function () { buscarPersonagens(true); });
botaoMais.addEventListener('click', function () {
  pagina++;
  buscarPersonagens(false);
});

buscarPersonagens(true);
