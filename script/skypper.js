var game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update });

function preload() {
    game.load.image('back', './Resources/Back.png');
    game.load.image('road', './Resources/Road.png');
    game.load.image('right', './Resources/RightBump.png');
    game.load.image('left', './Resources/LeftBump.png');
    game.load.spritesheet('Player', './Resources/CarBlue.png', 82, 123);
}

function create() {
	game.physics.startSystem(Phaser.Physics.ARCADE);


	var platforms = game.add.group();

    	//  We will enable physics for any object that is created in this group
    	platforms.enableBody = true;

    	// Here we create the ground.
    	//var back = platforms.create(0, game.world.height - 64, 'back');
	
	game.add.sprite(0, 0, 'back');
	game.add.sprite(278,0,'road');
	player = game.add.sprite(278, game.world.height-123, 'Player');
	game.physics.arcade.enable(player);
}

function update() {
}
