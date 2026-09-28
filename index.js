// GamerTeam Manager
// Para rodar: npm install  ->  node index.js

const prompt = require("prompt-sync")({ sigint: true });

// Lista (array) de jogadores. Cada jogador é um objeto.
let jogadores = [
  { nome: "Fallen", funcao: "AWPer", pontuacao: 2500 },
  { nome: "Coldzera", funcao: "Rifler", pontuacao: 2300 },
  { nome: "Gaules", funcao: "Suporte", pontuacao: 1800 },
];

// Opção 1 - Cadastrar jogador
function cadastrarJogador() {
  console.log("\n--- CADASTRO DE JOGADOR ---");
  let nome = prompt("Nome do jogador: ");
  let funcao = prompt("Função no time: ");
  let pontuacao = Number(prompt("Pontuação inicial: "));

  if (isNaN(pontuacao)) {
    pontuacao = 0;
  }

  let novoJogador = { nome: nome, funcao: funcao, pontuacao: pontuacao };
  jogadores.push(novoJogador);

  console.log(`Jogador ${nome} cadastrado com sucesso!`);
}

// Opção 2 - Listar jogadores
function listarJogadores() {
  console.log("\n--- LISTA DE JOGADORES ---");

  if (jogadores.length === 0) {
    console.log("Nenhum jogador cadastrado.");
    return;
  }

  for (let i = 0; i < jogadores.length; i++) {
    let jogador = jogadores[i];
    console.log(`${i + 1}. ${jogador.nome} | ${jogador.funcao} | ${jogador.pontuacao} pontos`);
  }
}

// Opção 3 - Buscar jogador
function buscarJogador() {
  console.log("\n--- SISTEMA DE BUSCA ---");
  let nomeBusca = prompt("Qual jogador deseja buscar? ");
  let encontrado = false;

  for (let i = 0; i < jogadores.length; i++) {
    let jogadorAtual = jogadores[i];

    if (jogadorAtual.nome.toLowerCase() === nomeBusca.toLowerCase()) {
      console.log(`Encontrado: ${jogadorAtual.nome} | ${jogadorAtual.funcao} | ${jogadorAtual.pontuacao} pontos`);
      encontrado = true;
      break;
    }
  }

  if (!encontrado) {
    console.log(`ERRO: Jogador "${nomeBusca}" não encontrado.`);
  }
}

// Opção 4 - Ver ranking (do maior para o menor)
function verRanking() {
  console.log("\n--- RANKING ---");
  let ranking = [...jogadores].sort((a, b) => b.pontuacao - a.pontuacao);

  for (let i = 0; i < ranking.length; i++) {
    console.log(`${i + 1}º ${ranking[i].nome} - ${ranking[i].pontuacao} pontos`);
  }
}

// Opção 5 - Atualizar pontuação (MISSÃO FINAL)
function atualizarPontuacao() {
  console.log("\n--- ATUALIZAÇÃO DE RANKING ---");
  let nomeBusca = prompt("Qual jogador deseja atualizar? ");
  let encontrado = false;

  // Percorre a lista igual à função de busca
  for (let i = 0; i < jogadores.length; i++) {
    let jogadorAtual = jogadores[i];

    if (jogadorAtual.nome.toLowerCase() === nomeBusca.toLowerCase()) {
      let pontosNovos = Number(prompt("Quantos pontos ele ganhou hoje? "));

      if (isNaN(pontosNovos)) {
        console.log("ERRO: Digite um número válido de pontos.");
        return;
      }

      // Soma os pontos novos na pontuação atual do objeto
      jogadorAtual.pontuacao += pontosNovos;

      console.log(`SUCESSO! A pontuação de ${jogadorAtual.nome} subiu para ${jogadorAtual.pontuacao} pontos!`);
      encontrado = true;
      break;
    }
  }

  // Se o loop terminou e ninguém foi encontrado
  if (!encontrado) {
    console.log(`ERRO: Jogador "${nomeBusca}" não encontrado na lista.`);
  }
}

// Menu principal
function menu() {
  let opcao = "";

  while (opcao !== "0") {
    console.log("\n===== GAMERTEAM MANAGER =====");
    console.log("1 - Cadastrar jogador");
    console.log("2 - Listar jogadores");
    console.log("3 - Buscar jogador");
    console.log("4 - Ver ranking");
    console.log("5 - Atualizar pontos");
    console.log("0 - Sair");

    opcao = prompt("Escolha uma opção do menu: ");

    switch (opcao) {
      case "1":
        cadastrarJogador();
        break;
      case "2":
        listarJogadores();
        break;
      case "3":
        buscarJogador();
        break;
      case "4":
        verRanking();
        break;
      case "5":
        atualizarPontuacao();
        break;
      case "0":
        console.log("Saindo... GG!");
        break;
      default:
        console.log("Opção inválida, tente novamente.");
    }
  }
}

menu();
