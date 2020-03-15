// You could have multiple flags like: start, launch to indicate the state of the game.

const { Engine, World, Bodies, Body, Mouse, MouseConstraint, Constraint, Composite, Detector } = Matter;
// The above line creates different constant variables for Engine, World, Bodies etc.

/*

const {Engine} = Matter 
is the same as c
onst Engine = Matter.Engine

*/
var world,engine;

function setup() {
    // Setup the canvas, the ground the, tanker, the shooting ball and the bubble balls.
    var canvas = createCanvas(400,800);

    var ground = new Ground(380,400,40,800);
    var tanker = new Tanker(320,100);
    var canonball = new CanonBall(320,100);
}

function draw() {
// Remember to update the Matter Engine and set the background.
background(255);
Engine.update(engine);

ground.display();
tanker.display();
canonball.display();
}


function keyReleased() {
    // Call the shoot method for the cannon.
}