(function(exports){

function Game() {
  this.ships = [];
  this.map = new Map();
  this.shipsToCreate = [
    {type: "aircraft carrier", size: 5, direction: "H"},
    {type: "battleship", size: 3, direction: "V"},
    {type: "carrier", size: 2, direction: "H"},
  ];
}

Game.prototype.start = function() {
  this.createShips();
  this.plotShips();
  drawMap(this.map);
  console.log(this.map);
};

Game.prototype.createShips = function() {
  game = this;
  for(var i = 0; i < this.shipsToCreate.length; i++) {
    var ship = this.shipsToCreate[i];
    game.createShip(ship.size, ship.direction);
  }
};

Game.prototype.createShip = function(size, direction) {
  var ship = new Ship(size, direction);
  (this.ships).push(ship);
};

Game.prototype.plotShips = function() {
  game = this;
  for(var i = 0; i < this.ships.length; i++) {
    var ship = this.ships[i];

    game.generateShipPosition(ship);
    game.plotToGrid(ship);
  }
};

Game.prototype.generateShipPosition = function(ship) {

  // while (invalidCoordinate() === true) {
  ship.position[0] = this.generateCoordinate(ship);
  ship.position[1] = this.generateCoordinate(ship);
  // }
};

Game.prototype.plotToGrid = function(ship) {
  this.map.grid[ship.position[0]][ship.position[1]] = 'x';
  this.plotShipBody(ship);
};

Game.prototype.plotShipBody = function(ship) {
  game = this;
  for(var i = 0; i < ship.size; i++) {
    if (ship.direction === 'H') {
      game.map.grid[ship.position[0]][ship.position[1] + i] = 'x';
    } else if (ship.direction === 'V') {
      game.map.grid[ship.position[0] + i][ship.position[1]] = 'x';
    }

  }
};


Game.prototype.generateCoordinate = function(ship) {
  var shipStart = Math.floor((Math.random() * 10));
  return (invalidCoordinate(ship, shipStart) === true) ? this.generateCoordinate(ship) : shipStart;
};

function invalidCoordinate(ship, shipStart) {
  return ((shipStart + ship.size) >= 10);
}



exports.Game = Game;
})(this);
