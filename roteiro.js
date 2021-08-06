var step = 0;
var vida = 100;
var dano = 10;

iniciar();

function iniciar() {
  //setando atributos iniciais do personagem//
  updateHUD();
  //Iniciando a história do game:
  updateMessage(
    "Você é um guerreiro chamado Dragonborn, que decidiu se aventurar pelo mundo para se tornar o maior de todos os guerreiros." +
      "<br>" +
      "Durante o caminho, você avistou uma árvore de maçã, deseja comer uma maçã?"
  );
}

function atualizarCena(isPositivo) {
  // sim / nao
  if (step === 0) {
    passo0(isPositivo);
  }
  // OK
  else if (step === 1) {
    passo1();
  }
  // sim / nao
  else if (step === 2) {
    passo2(isPositivo);
  }
  // OK
  else if (step === 3) {
    passo3();
  }
  // sim / nao
  else if (step === 4) {
    passo4(isPositivo);
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

// ============================ PASSOS ========================================

function passo0(isPositivo) {
  if (isPositivo) {
    updateMessage(
      "Você comeu a maça :3 " + " <br> " + "Sua vida aumentou em 10 pontos!"
    );
    vida += 10;
    updateHUD();
  } else {
    updateMessage(
      "Você não comeu a maça >:( " +
        "<br> " +
        "A fome diminuiu sua vida em 10 pontos!"
    );
    vida -= 10;
    updateHUD();
  }
}

function passo1() {
  updateMessage("Você encontrou um pepino dourado. <br> Gostaria de equipa-lo?");
}

function passo2(isPositivo) {
  if (isPositivo) {
    updateMessage("Você equipou o pepino e se sente mais forte!");
    dano += 69;
    updateHUD();
  } else {
    updateMessage("Você não equipou o pepino. Isso é inaceitavel.");
    vida = 0;
    updateHUD();
  }
}

function passo3() {
  updateMessage("Você encontrou um troll, deseja lutar?");
  updateHUD();
}

function passo4(isPositivo) {
  // TODO dê o resultado da reação ao troll
}
