let jogador;
let teclas;

const configuracao = {
    type: Phaser.AUTO,

    width: 800,
    height: 600,

    parent: "jogo",

    backgroundColor: "rgb(32, 32, 32)",

    physics: {
        default: "arcade",
        arcade: {
            debug: false
        }
    },

    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

const jogo = new Phaser.Game(configuracao);

function preload() {

    this.load.image("personagem", "img/personagem.png");
}

function create() {

    jogador = this.physics.add.image(100, 300, "personagem");

    jogador.setDisplaySize(70, 70);

    jogador.setCollideWorldBounds(true);

    teclas = this.input.keyboard.createCursorKeys();

    this.add.text(20, 20, "Use as setas para movimentar", {
        fontSize: "24px",
        color: "rgb(255, 255, 255)"
    });
}

function update() {

    jogador.setVelocity(0);

    if (teclas.left.isDown) {
        jogador.setVelocityX(-200);
    }

    if (teclas.right.isDown) {
        jogador.setVelocityX(200);
    }

    if (teclas.up.isDown) {
        jogador.setVelocityY(-200);
    }

    if (teclas.down.isDown) {
        jogador.setVelocityY(200);
    }
}

