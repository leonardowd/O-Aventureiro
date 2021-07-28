class personagem {
    constructor(hp, dano, equipamento) {
        this.hp = 100;
        this.dano = 10;
    }
    get danoPersonagem() {
        return this.dano;
    }
    set aumentarDano(aumentarDano) {
        this.dano = aumentarDano;
    }
    get hpPersonagem () {
        return this.hp;
    }
}