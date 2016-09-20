function Game() {
  this.ships = [];
  this.map = new Map();
}


Game.prototype.create = function() {
  var ship = new Ship();
  (this.ships).push(ship);
};

Game.prototype.plotShips = function() {
  game = this;
  for(i = 0; i < this.ships.length; i++) {
    var ship = this.ships[i];
    game.generateShipPosition(ship);
    this.map.array[ship.position[0]][ship.position[1]] = 'x';
  }
};

Game.prototype.generateShipPosition = function(ship) {
  ship.position[0] = this.generateCoordinate();
  ship.position[1] = this.generateCoordinate();
  console.log(ship.position);
};

Game.prototype.generateCoordinate = function() {
  return Math.floor((Math.random() * 10));

};
