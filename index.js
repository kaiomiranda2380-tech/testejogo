const configuracao = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    parent: "jogo",
    backgroundColor: "black",
    physics: {
        default: "arcade",
        arcade: { debug: false }
    },
    scene: {
        preload,
        create,
        update
    }
};

new Phaser.Game(configuracao);

function preload() {
    this.load.image("quadrado", "img/quadrado.png");
}

function create() {
    
    this.jogador = this.physics.add.image(100, 300, "quadrado");
    this.jogador.setDisplaySize(70, 70);
    this.jogador.setCollideWorldBounds(true);

    this.teclas = this.input.keyboard.createCursorKeys();

    this.add.text(20, 20, "Use as setas para movimentar", {
        fontSize: "24px",
        color: "rgb(255, 255, 255)"
    });
}

function update() {
    const jogador = this.jogador;
    const teclas = this.teclas;
    const velocidade = 200;

    jogador.setVelocity(0);

    if (teclas.left.isDown) jogador.setVelocityX(-velocidade);
    else if (teclas.right.isDown) jogador.setVelocityX(velocidade);

    if (teclas.up.isDown) jogador.setVelocityY(-velocidade);
    else if (teclas.down.isDown) jogador.setVelocityY(velocidade);

    if (jogador.body.velocity.x !== 0 && jogador.body.velocity.y !== 0) {
        jogador.body.velocity.normalize().scale(velocidade);
    }
}

