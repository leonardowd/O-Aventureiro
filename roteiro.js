//personagem
var step = 0;
var vida = 100;
var dano = 10;

var danoCausado = 0;
var danoRecebido = 0;

//Armas
var espadaFerro = 30;
var espadaElfica = 50;
var armaduraElfica = 200;

//inimigos
var nomeInimigo;
var vidaInimigo;
var danoInimigo;

  //setando informações dos inimigos
  var lobo = "lobo";
  var vidaLobo = 30;
  var danoLobo = 15;

  var loboRaivoso = "Lobo Raivoso";
  var vidaLoboRaivoso = 100;
  var danoLoboRaivoso = 50;

  var urso = "Urso";
  var vidaUrso = 200;
  var danoUrso = 100;

  var demonio = "Demonio";
  var vidaDemonio = 5000;
  var danoDemonio = 5000;

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
  //OK
  else if (step === 9) {
    passo9();
  }
  // SIM // NAO
  else if (step === 10) {
    passo10(isPositivo);
  }
  //OK
  else if (step === 11) {
    passo11();
  }
  //SIM // NAO
  else if (step === 12) {
    passo12(isPositivo);
  }
  //OK
  else if (step === 13) {
    passo13();
  }
  //OK
  else if (step === 14) {
    passo14(isPositivo);
  }
  //OK
  else if (step === 15) {
    passo15();
  }
  //SIM // NAO
  else if (step === 16) {
    passo16(isPositivo);
  }
  //OK
  else if (step === 17) {
    passo17();
  }
  //OK
  else if (step === 18) {
    passo18();
  }
  //SIM // NAO
  else if (step === 19) {
    passo19(isPositivo);
  }
  //OK
  else if (step === 20) {
    passo20();
  }
  //SIM // NAO
  else if (step === 21) {
    passo21(isPositivo);
  }
  //OK
  else if (step === 22) {
    passo22();
  }
  //OK
  else if (step === 23) {
    passo23();
  }
  //OK
  else if (step === 24) {
    passo24();
  }
  //OK
  else if (step === 25) {
    passo25();
  }
  //OK
  else if (step === 26) {
    passo26();
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
  document.getElementById('jogadorNome').innerHTML
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
    "<span id='morreu'>Você morreu parça!!</span>" +
    "<br><br>" +
    "Aperte F5 para reiniciar o jogo"
    );
    esconderBotoesMorte();
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

function esconderBotoesMorte() { //esconder os botões quando o jogador morrer.
    document.getElementById('opcoes-decisao').style.display = 'none';
    document.getElementById('prox-passo-btn').style.display = 'none';
}

function alternarBotoesAcao(mostrarSimNao) {
  if (mostrarSimNao) {
    document.getElementById('opcoes-decisao').style.display = 'block';
    document.getElementById('prox-passo-btn').style.display = 'none';
  } else {
    document.getElementById('opcoes-decisao').style.display = 'none';
    document.getElementById('prox-passo-btn').style.display = 'block';
  }
}

function duelo() {
  while (vida > 0 && vidaInimigo > 0) {
    vidaInimigo = vidaInimigo - dano;
    vida = vida - danoInimigo;
    danoCausado = danoCausado + dano;
    danoRecebido = danoRecebido + danoInimigo;

  }

  verificarMorteInimigo();
  updateHUD();
}

function setarInimigo(nome, vida, dano) {
  this.nomeInimigo = nome;
  this.vidaInimigo = vida;
  this.danoInimigo = dano;
};

// ============================ PASSOS ========================================

function passo0() {
  alternarBotoesAcao(true);
  updateMessage(
    "Enquanto caminhava, você encontrou uma árvore de maçã..." +
    "<br><br>" +
    " Sua barriga ronca de fome, deseja comer uma maçã?"
    );
}

function passo1(isPositivo) {
  alternarBotoesAcao();
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
  alternarBotoesAcao(true);
  updateMessage(
    "Após caminhar mais um pouco, você avista um lobo à frente..." +
    "<br><br>" +
    "Deseja passar pelo caminho do lobo?"
    );
}

function passo3(isPositivo) {
  alternarBotoesAcao();
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
  alternarBotoesAcao();
  setarInimigo(lobo, vidaLobo, danoLobo);
  duelo();

}

function passo5() {
  alternarBotoesAcao(true);
  updateMessage(
    "Está anoitecendo, você gostaria de armar uma barraca?"
    );
}

function passo6(isPositivo) {
  alternarBotoesAcao();
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
  alternarBotoesAcao(true);
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
  alternarBotoesAcao();
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

function passo9() {
  alternarBotoesAcao(true);
  updateMessage(
    "Você já consegue avistar o final do deserto, mas sente sede...de repente, avista um poço de água, será que é real?..." +
    "<br><br>" +
    "Você foi até o poço, ele é real, porém sua cor está um pouco estranha..." +
    "<br><br>" +
    "Você deseja beber da água?"
    );
}
function passo10(isPositivo) {
  alternarBotoesAcao();
  if (isPositivo) {
    updateMessage(
      "Você decidiu beber a água, você sente um gosto estranho, e desmaia..." +
      "<br><br>" +
      "A água estava envenenada, porém não chegou a te matar..." +
      "<br><br>" +
      "Você perdeu 30 de vida" +
      "<br><br>" +
      "Clique em 'OK' para continuar..."   
     );
    vida = vida - 30;
    updateHUD();
  } else {
    updateMessage(
      "Você decidiu não beber a água, e por causa da sua sede, você perdeu 5 de vida" +
      "<br><br>" +
      "Clique em 'OK' para continuar..."
      );
    vida = vida - 5;
    updateHUD();
  }
    
}

function passo11() {
  alternarBotoesAcao(true);
  updateMessage(
    "Você conseguiu sair do deserto e entrou em um ambiente com algumas árvores, porém seco..." +
    "<br><br>" +
    "Você avistou um atalho, deseja pegar o atalho?"
    );
}

function passo12(isPositivo) {
  alternarBotoesAcao();
  if (isPositivo) {
    updateMessage(
      "Você decidiu pegar o atalho, e está caminhando..." +
      "<br><br>" +
      "Quando de repente aparece em sua frente um " + demonio + "!!!" +
      "<br><br>" +
      "Clique em 'OK' para continuar..."
      );
  } else {
    updateMessage(
      "Você decidiu não pegar o atalho, então seguiu em frente..." +
      "<br><br>" +
      "Depois de caminhar um pouco, você deu de cara com um " + loboRaivoso + "!!" +
      "<br><br>" +
      "Clique em 'OK' para continuar..."
      );
    step++
  }
}

function passo13() {
  alternarBotoesAcao();
  setarInimigo(demonio, danoDemonio, vidaDemonio);
  duelo();
}

function passo14() {
  alternarBotoesAcao();
  setarInimigo(loboRaivoso, danoLoboRaivoso, vidaLoboRaivoso);
  duelo();
}

function passo15() {
  alternarBotoesAcao(true);
  updateMessage(
    "Está anoitecendo, você gostaria de armar uma barraca?"
    );
}

function passo16(isPositivo) {
  alternarBotoesAcao();
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

function passo17() {
  alternarBotoesAcao();
  updateMessage(
    "Você se levantou e avistou uma cidade...Será a cidade de Perkas?" +
    "<br><br>" +
    "Você se levanta e decide ir em direção à cidade..." +
    "<br><br>" +
    "Clique 'OK' para continuar..."
  );
}

function passo18() {
  alternarBotoesAcao(true);
  updateMessage(
    "Você está quase lá, mas de repente, você encontra a ponta do que parece ser um baúl enterrado..." +
    "<br><br>" +
    "Mas ele está bem protegido por um " + lobo + "..." +
    "<br><br>" +
    "Você deseja lutar contra o " + lobo + " para pegar o baú?"
  );
}

function passo19(isPositivo) {
  alternarBotoesAcao();
  if (isPositivo) {
    updateMessage(
      "Você decidiu lutar contra o " + lobo + "!!" +
      "<br><br>" +
      "Clique 'OK' para continuar..."
    );
  } else {
    updateMessage(
      "Você decidiu seguir em frente e ignorar o " + lobo + "!" +
      "<br><br>" +
      "Clique 'OK' para continuar"
    );
    step++;
    step++; //pulando dois passos, porque o passo 20 é o duelo, e o passo 21 é a recompensa caso ganhe o duelo.
  }
}

function passo20() {
  alternarBotoesAcao();
  setarInimigo(lobo, vidaLobo, danoLobo);
  duelo();
}

function passo21(isPositivo) {
  alternarBotoesAcao();
  updateMessage(
    "Você abriu o baúl, nossa, que brilho!!" +
    "<br><br>" +
    "Você encontrou uma Armadura Élfica e uma Espada Élfica!!" +
    "<br><br>" +
    "Seu dano aumentou em " + espadaElfica + " e sua vida em " + armaduraElfica + "!!"
  );
  vida = vida + armaduraElfica;
  dano = dano + espadaElfica;
  updateHUD();
}

function passo22() {
  alternarBotoesAcao();
  updateMessage(
    "Você já consegue ver os portões da cidade de Perkas, então você acelera o passo, quando de repente..." +
    "<br><br>" +
    "Um " + urso + " aparece à sua frente e vem correndo em sua direção..." +
    "<br><br>" +
    "Clique em 'OK' para continuar..."
  );
}

function passo23() {
  alternarBotoesAcao();
  setarInimigo(urso, vidaUrso, danoUrso);
  duelo();
}

function passo24() {
  alternarBotoesAcao();
    updateMessage(
      "Você derrotou o " + nomeInimigo + "!!" +
      "<br><br>" +
      "Após derrotar o inimigo, você seguiu adiante, e finalmente chegou à cidade de Perkas!!"
    );
}

function passo25() {
  alternarBotoesAcao();
  updateMessage(
    "Chegamos ao final de 'O Aventureiro', parabéns por zerar o jogo!!" +
    "<br><br>" +
    "Muito obrigado por ter nos honrado com a tua participação testando o jogo :D" +
    "<br><br>" +
    "Agradecimento especial à Arthur Freitas, linkedin abaixo da tela de jogo."
  );
}

function passo26() {
  esconderBotoesMorte();
  updateMessage(
    "<span id='textoFinal'>FIM DO JOGO</span>" +
    "<br><br>" +
    "Jogo desenvolvido por Leonardo Vinicius, mais informações abaixo da tela do jogo :D"
  );
}