# A minha coleção de cartas

Este repositório tem duas versões da mesma coleção de cartas:

- `server/` – o site feito com Express (HTML construído no server), porta 3000
- `client/` – a app feita com React + Vite (HTML construído no browser), porta 5173

## Como pôr o server Express a correr

```
cd server
npm install
npm start
```

Abre http://localhost:3000

## Como pôr a app React a correr

```
cd client
npm install
npm run dev
```

Abre http://localhost:5173

A pasta `node_modules` não vai para o GitHub (está no `.gitignore`), por isso é preciso fazer sempre `npm install` primeiro.

## Pergunta 3 – Onde é que o HTML foi construído?

No site Express, o View Source mostra a página toda, com o título, a lista de cartas e os números já escritos. Isto quer dizer que o HTML foi construído no server e o browser só o recebeu pronto. Na app React, o View Source só mostra um `<div id="root"></div>` vazio e uma tag `<script>`. As cartas não estão lá, por isso o HTML foi construído no browser, pelo JavaScript do React, depois de a página chegar. Sei isto porque no View Source aparece o que o server enviou, e só no Inspecionar (F12) é que se vê a lista de cartas na app React.

## Pergunta 4 – Quantos requests faz cada site?

No site Express, cada vez que mudo de página (Início, Cartas, Sobre…) o browser faz um request novo e o server devolve uma página HTML inteira. No site React, quando filtro as cartas, pesquiso ou ordeno, não aparece nenhum request novo no Network tab. Os pedidos só acontecem na primeira vez que abro a página, para ir buscar o HTML e o JavaScript. A diferença existe porque na app React as cartas já estão no código que o browser descarregou, e o `useState` e o `.filter()` voltam a desenhar a lista no próprio browser, sem falar com o server.
