//personagem
var step = 0;
var vida = 100;
var dano = 10;

//inimigos
var nomeInimigo = "teste";
var vidaInimigo = 10;
var danoInimigo = 10;

  //setando informações dos inimigos
  var lobo = "lobo";
  var vidaLobo = 30;
  var danoLobo = 5;

iniciar();

function iniciar() {
  //setando atributos iniciais do personagem//
  updateHUD();
  //Iniciando a história do game:
  updateMessage(
    "Você é um guerreiro chamado Dragonborn, que decidiu se aventurar pelo mundo para se tornar o maior de todos os guerreiros." +
      "<br><br>" +
      "Clique em 'OK' para continuar..."
  );
}

function atualizarCena(isPositivo) {
  // OK
  if (step === 0) {
    passo0();
  }
  // SIM // NAO
  else if (step === 1) {
    passo1(isPositivo);
  }
  // OK
  else if (step === 2) {
    passo2();
  }
  // 
  else if (step === 3) {
    passo3(isPositivo);
  }
  // 
  else if (step === 4) {
    passo4();
  }

  // ...etc
  verificarMorte();
  pularProximoPasso();
}

function updateHUD() {
  document.getElementById("quantidadeHp").innerHTML = `Vida: ${vida}`;
  document.getElementById("quantidadeDano").innerHTML = `Dano: ${dano}`;
}

function updateMessage(msg) {
  document.getElementById("mensagem").innerHTML = msg;
}

function pularProximoPasso() {
  step++;
}

function verificarMorte() {
  // TODO encerrar o jogo
  if (vida <= 0) {
    console.log("morreste, parça");
  }
}

function alternarBotoesAcao(deveMostrarSimNao) {
    // TODO mostrar os botoes de sim/nao e esconder o de ok
    // ou vice versa
}

function duelo() {
  while (vida >= 1) {
    
  } 
}

function setarInimigo(nome, vida, dano) {
  this.nomeInimigo = nome;
  this.vidaInimigo = vida;
  this.danoInimigo = dano;
};

// ============================ PASSOS ========================================

function passo0() {
  updateMessage(
    "Enquanto caminhava, você encontrou uma árvore de maçã..." +
    "<br><br>" +
    " Sua barriga ronca de fome, deseja comer uma maçã?"
    );
}

function passo1(isPositivo) {
  if (isPositivo) {
    updateMessage(
      "Você comeu a maçã, sua vida aumentou em 20!!" + 
      "<br><br>" +
      "Clique 'OK' para continuar"
      );
    vida = vida + 20;
    updateHUD();
  } else {
    updateMessage(
      "Você não comeu a maça, sua fome aumentou, fazendo você perder 20 de vida." + 
      "<br><br>" +
      "Clique 'OK' para continuar"
      );
    vida = vida - 20;
    updateHUD();
  }
}

function passo2() {
  updateMessage(
    "Após caminhar mais um pouco, você avista um lobo à frente..." +
    "<br><br>" +
    "Deseja passar pelo caminho do lobo?"
    );
}

function passo3(isPositivo) {
  if (isPositivo) {
    setarInimigo(lobo, vidaLobo, danoLobo);
    alert(vidaInimigo);
    updateMessage(
      "Enquanto você se aproximava do lobo, ele te detectou e veio na sua direção"
      );
    
  }
}