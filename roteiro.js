//Aqui se inicia a história do jogo, a partir do momento que o usuário clique no botão "Deseja continuar?". 
function iniciar() {

//importando alguns elementos do HTML para serem modificados conforme o jogo avança.

    //personagem principal:
        let abaHp = document.getElementById('quantidadeHp');
        let abaDano = document.getElementById('quantidadeDano');

        //setando atributos iniciais do personagem//
        hp = 100;
        dano = 10;
        abaHp.innerHTML = `Vida: ${hp}`;
        abaDano.innerHTML = `Dano: ${dano}`;
    //Inimigos:
        let abaNomeInimigo = document.getElementById('nomeInimigo');
        let abaHpInimigo = document.getElementById('quantidadeHpInimigo');
        let abaDanoInimigo = document.getElementById('quantidadeDanoInimigo');

    //Aba de ação:
        let actionBar = document.getElementById('ocultarActionBar');
    
    //Aba diálogo:
        let texto1 = document.getElementById('textoConsoleL1');
        let texto2 = document.getElementById('textoConsoleL2');
        let texto3 = document.getElementById('textoConsoleL3');

//Iniciando a história do game:
        texto1.innerHTML = `Você é um guerreiro chamado Dragonborn, que decidiu se aventurar pelo mundo para se tornar o maior de todos os guerreiros.`;
        texto2.innerHTML = `Durante o caminho, você avistou uma árvore de maçã, deseja comer uma maçã?`;
        texto3.style.display = 'none';

        actionBar.style.display = 'block';

        form.addEventListener('submit', function(e) {
            let form = document.getElementById('formulario');
            let resposta = document.getElementById('resposta').value;

            e.preventDefault();
        })

        if(resposta == "SIM") {
            texto1.innerHTML = `Você decidiu comer a maçã, ela estava saborosa!!!.`;
            texto2.innerHTML = `Sua vida aumentou em + 10 :D`;
            hp = hp + 10;
    }
    /*debug*/
    console.log(resposta);
    //alert(resposta.value);
}