# Portal de Personagens – Rick and Morty

Este projeto foi feito para a disciplina de desenvolvimento web da Unifecaf. É uma página que busca os personagens de Rick and Morty direto de uma API pública e mostra cada um em um card.

Site no ar: https://juliasliveira.github.io/portal-personagens-rick-and-morty/

## Como funciona

O HTML da página tem só a estrutura básica. Quando a página abre, o JavaScript usa o `fetch` para pedir os personagens à API e cria os cards na hora, com `createElement` e `appendChild`. Cada card mostra a foto, o nome, o status, a espécie e a origem do personagem.

Dá para buscar por nome, filtrar por status (vivo, morto ou desconhecido) e carregar mais personagens com o botão no final da lista. Se a busca não encontrar nada, a página avisa.

## Por que Rick and Morty

Escolhi essa API porque é gratuita, não pede cadastro nem token, tem boa documentação e já entrega a imagem de cada personagem. Isso me deixou focar no que a atividade pede: consumir os dados com JavaScript e montar a interface.

A API fica em https://rickandmortyapi.com/ e o endpoint usado é `https://rickandmortyapi.com/api/character`.

## Como rodar no seu computador

Baixe ou clone o repositório e abra o `index.html` no navegador. Se preferir, use a extensão Live Server do VS Code.

## Arquivos

- `index.html`: estrutura da página
- `style.css`: visual e responsividade
- `script.js`: chamada à API e criação dos cards

Feito com HTML, CSS e JavaScript puros, sem frameworks.

Júlia
