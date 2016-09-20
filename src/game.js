function Game() {
  this.ships = [];
  this.map = new Map();
}


Game.prototype.create = function() {
  var ship = new Ship();
  (this.ships).push(ship);
};

Game.prototype.plotShips = function() {
  for(i = 0; i < this.ships.length; i++) {
    var ship = this.ships[i];
    this.map.array[ship.position[0]][ship.position[1]] = 'x';
  }
};
