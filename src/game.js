// var map = new Map();
// var ship = new Ship();


function Game() {
  this.ships = [];
}


Game.prototype.create = function() {
  var ship = new Ship(1, 1);
  (this.ships).push(ship);
};

Game.prototype.plotShips = function() {
  for(i = 0; i < this.ships; i++) {
    console.log(i);
  }
};
