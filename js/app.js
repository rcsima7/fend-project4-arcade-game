// Enemies our player must avoid
var Enemy = function(x, y, speed) {
  // Variables applied to each of our instances go here,
  // we've provided one for you to get started
  //set the x and y axis for enemy to move along
  this.x = x;
  this.y = y;
  this.speed = 150 + Math.floor(Math.random()) * 312;
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    //Set speed on the X axis to equal delta time
    this.x += this.speed * dt;
    // set x axis point: if enemy reaches this point, it should reappeear at the beginning of x axis
    if (this.x > 530) {
        this.x = -70;
        //Give start speed and ranomize speed
        // *Shuffle function found on w3schools: Javascript Random - Math.Random
        this.speed = 100 + Math.random() * 312;
    }

    //If collision happens
    //Sprite and player dimensions are the same width and height
    if (player.x < this.x + 70 &&
        player.x + 70 > this.x &&
        player.y < this.y + 50 &&
        player.y + 50 > this.y) {
    //Reset player to initial location upon collisioin
        player.x = 205;
        player.y = 380;
        }
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};


// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function (x, y, speed) {
  this.x = x;
  this.y = y;
  this.speed = speed
  this.sprite = 'images/char-pink-girl.png';
};

Player.prototype.update = function() {
  //Reset player to initial location upon reaching the water
  if (this.y < 0) {
    player.x = 205;
    player.y = 380;
    alert("GREAT JOB! YOU WON :D")
    //document.location.reload();
  }
};

// Draw the Player on the screen
Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.handleInput = function(arrowKey) {
  if(arrowKey == 'right' && this.x < 395) {
    this.x += 100;
  }
  if(arrowKey == 'left' && this.x > 100) {
    this.x -= 100;
  }
  if(arrowKey == 'up' && this.y > 0) {
    this.y -= 80;
  }
  if(arrowKey == 'down' && this.y < 380) {
    this.y += 80;
  }
};
// Now instantiate your objects.
var enemy1 = new Enemy(200, 225);
var enemy2 = new Enemy(200, 145);
var enemy3 = new Enemy(500, 145);
var enemy4 = new Enemy(400, 65);
// Place all enemy objects in an array called allEnemies
var allEnemies = [enemy1, enemy2, enemy3, enemy4];
// Enemies located at 3 points of y axis
//const enemyPlace = [50, 150, 200];
// Creates new enemies at 0 point on X axis
/*enemyPlace.forEach(function (placeOnY) {
  enemy = new Enemy(0, placeOnY, 100 + Math.floor(Math.random) * 312);
  allEnemies.push(enemy);
});*/
// Place the player object in a variable called player
const player = new Player(205, 380);


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
