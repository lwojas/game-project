$(document).ready(function() {
	
	setTimeout(function() { 
		console.log(gp);
	}, 500);
});


var game = new Phaser.Game(1280, 720, Phaser.CANVAS, '', { preload: preload, create: create, update: update });

function preload() {
	game.load.image('sky', 'assets/sky.png');
    game.load.image('ground', 'assets/platform.png');
    game.load.image('star', 'assets/star.png');
    game.load.spritesheet('dude', 'assets/dude.png', 32, 48);
}

var platforms;
var player;

function create() {
	game.physics.startSystem(Phaser.Physics.ARCADE);

	game.add.sprite(0,0, 'sky');

	game.add.sprite(0, 0, 'star');

	platforms = game.add.group();
	platforms.enableBody = true;

	var ground = platforms.create(0, game.world.height - 64, 'ground');

	ground.scale.setTo(4, 2);

	ground.body.immovable = true;

	var ledge = platforms.create(400, 400, 'ground');

	ledge.body.immovable = true;

	ledge = platforms.create(-150, 250, 'ground');

	ledge.body.immovable = true;


	player = game.add.sprite(32, game.world.height - 150, 'dude');

	game.physics.arcade.enable(player);

	player.body.bounce.y = 0.2;
	player.body.gravity.y = 300;
	player.body.collideWorldBounds = true;

	player.animations.add('left', [0, 1, 2, 3], 10, true);
	player.animations.add('right', [5, 6, 7, 8], 10, true);


}

function update() {
	var hitPlatform = game.physics.arcade.collide(player, platforms);

	player.body.velocity.x = 0;
	if (hasGP) {
		if (gp.buttons[14].pressed) {
			
			player.body.velocity.x = -150;

			player.animations.play('left');

		} else if (gp.buttons[15].pressed) {
			
			player.body.velocity.x = 150;

			player.animations.play('right');
		} else {

			player.animations.stop();

			player.frame = 4;
		};

		if (gp.buttons[0].pressed && player.body.touching.down && hitPlatform) {
			player.body.velocity.y = -350;
		}
	}
	
}