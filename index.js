let jogador;
let teclas;

const configuracao = {
    type: Phaser.AUTO,
    width: 1900,
    height: 920,
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
}

function create() {

    jogador = this.add.rectangle(100, 300, 50, 50, 0x00ffff);

    this.physics.add.existing(jogador);

    jogador.body.setCollideWorldBounds(true);

    teclas = this.input.keyboard.createCursorKeys();

    this.add.text(20, 20, "Use as setas para movimentar", {
        fontSize: "24px",
        color: "rgb(255, 255, 255)"
    });
}

function update() {

    jogador.body.setVelocity(0);

    if (teclas.left.isDown) {
        jogador.body.setVelocityX(-200);
    }

    if (teclas.right.isDown) {
        jogador.body.setVelocityX(200);
    }

    if (teclas.up.isDown) {
        jogador.body.setVelocityY(-200);
    }

    if (teclas.down.isDown) {
        jogador.body.setVelocityY(200);
    }
}
