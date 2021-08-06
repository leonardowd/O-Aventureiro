//personagem
var step = 0;
var vida = 100;
var dano = 10;

var danoCausado = 0;
var danoRecebido = 0;

//Armas
var espadaFerro = 30;

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
      "IMPORTANTE: Se você morrer, o jogo acaba" +
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
  // SIM // NAO
  else if (step === 3) {
    passo3(isPositivo);
  }
  // OK
  else if (step === 4) {
    passo4();
  }
  // OK
  else if (step === 5) {
    passo5();
  }
  //SIM // NAO
  else if (step === 6) {
    passo6(isPositivo);
  }
  // OK
  else if (step === 7) {
    passo7();
  }
  //SIM // NAO
  else if (step === 8) {
    passo8(isPositivo);
  }

  // ...etc
  verificarMorte();
  pularProximoPasso();
}

function updateHUD() {
  //personagem
  document.getElementById("quantidadeHp").innerHTML = `Vida: ${vida}`;
  document.getElementById("quantidadeDano").innerHTML = `Dano: ${dano}`;

  //inimigo
  document.getElementById('inimigoNome').innerHTML
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

    updateMessage(
    "Você atacou o " + nomeInimigo + " e deu um total de " + danoCausado + " de dano" + 
    "<br><br>" +
    "O " + nomeInimigo + " te atacou e você sofreu um total de " + danoRecebido + " de dano" +
    "<br><br>" +
    "Você morreu"
    );
  }
}

function verificarMorteInimigo() {
  // TODO encerrar o jogo
  if (vidaInimigo <= 0) {
    updateMessage(
    "Você atacou o " + nomeInimigo + " e deu um total de " + danoCausado + " de dano" + 
    "<br><br>" +
    "O " + nomeInimigo + " te atacou e você sofreu um total de " + danoRecebido + " de dano" +
    "<br><br>" +
    "Você matou o " + nomeInimigo + "!!"
    );
  }
}

function alternarBotoesAcao(deveMostrarSimNao) {
    // TODO mostrar os botoes de sim/nao e esconder o de ok
    // ou vice versa
}

function duelo() {
  while (vida > 0 && vidaInimigo > 0) {
    vidaInimigo = vidaInimigo - dano;
    vida = vida - danoInimigo;
    danoCausado = danoCausado + dano;
    danoRecebido = danoRecebido + danoInimigo;

  }

  verificarMorteInimigo();
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
    updateMessage(
      "Enquanto você se aproximava do lobo, ele te detectou e veio na sua direção" +
      "<br><br>" +
      "Clique 'OK' pra continuar"
      );
  } else {
    updateMessage(
      "Você decidiu ir por outro caminho..." +
      "<br><br>" +
      "Clique 'OK' pra continuar"
      );
    step++; //Pular a próxima etapa
  }
}

function passo4() {
  setarInimigo(lobo, vidaLobo, danoLobo);
  duelo();

}

function passo5() {
  updateMessage(
    "Está anoitecendo, você gostaria de armar uma barraca?"
    );
}

function passo6(isPositivo) {
  if (isPositivo) {
    updateMessage(
      "Você decidiu armar barraca, comeu um bom ensopado, e dormiu bem. Você se sente descansado" +
      "<br><br>" +
      "Dano aumentou em 10 e vida aumentou em 50"
      );
    dano = dano + 10;
    vida = vida + 50;
    updateHUD();
  } else {
    updateMessage(
      "Você preferiu não montar barraca...Amanheceu e você se sente muito cansado, a mente esgotada..." +
      "<br><br>" +
      "Você perdeu 30 de vida e 5 de dano"
      );
    dano = dano - 5;
    vida = vida - 30;
    updateHUD();
  }
}

function passo7() {
  updateMessage(
    "Uma semana se passou de caminhada... Você está no meio do deserto e avista uma tempestade de areia..." +
    "<br><br>" +
    "Você corre em direção a uma caverna escura, e se esconde nela..." +
    "<br><br>" +
    "Você vê algo brilhando de longe, não é possível ver se é um inimigo ou não..." +
    "<br><br>" +
    "Você deseja ir verificar?"
    );
}

function passo8(isPositivo) {
  if (isPositivo) {
    updateMessage(
      "Você decidiu ir verificar...Está chegando perto...Parece que é um bixo poderoso..." +
      "<br><br>" +
      "...Oh! É uma espada de ferro!! Você pegou a espada e seu dano aumentou em " + espadaFerro + "!!" +
      "<br><br>" +
      "Clique em 'OK' para continuar..."
      );
    dano = dano + espadaFerro;
    updateHUD();
  } else {
    "Você preferiu se manter em segurança e deixar pra lá..." +
    "<br><br>" +
    "Clique em 'OK' para continuar..."
  }
}