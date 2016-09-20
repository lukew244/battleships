var game = new Game();
var container = $('#container');
console.log(container);
console.log(game);
game.start();

function drawMap(map) {
  console.log('drawmap');
  for(var y = 0; y < map.array.length; y++) {
    iterateOverRow(map, y);}
}

function iterateOverRow(map, y) {
  console.log('row');
  for(var x = 0; x < map.array[y].length; x++) {
    drawCell(map, y, x);
  }
}

function drawCell(map, y, x) {
  if (map.array[y][x] === 0){
    displayEmptyTile();
  } else {
    displayShipTile();
  }
}

function displayEmptyTile() {
  console.log('disp');
  console.log(container);
  container.append('<div class="empty"></div>');
}

function displayShipTile(){
  container.append('<div class="ship"></div>');
}
