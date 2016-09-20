var game = new Game();
var container = $('#container');

game.start();

function drawMap(map) {
  for(var y = 0; y < map.grid.length; y++) {
    iterateOverRow(map, y);}
}

function iterateOverRow(map, y) {
  for(var x = 0; x < map.grid[y].length; x++) {
    drawCell(map, y, x);
  }
}

function drawCell(map, y, x) {
  map.grid[y][x] === 0 ? displayEmptyTile() : displayShipTile();
}

function displayEmptyTile() {
  container.append('<div class="empty"></div>');
}

function displayShipTile(){
  container.append('<div class="ship"></div>');
}
