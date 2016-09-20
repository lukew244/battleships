describe("Game", function() {
  var game = new Game();
  var ship = new Ship();

  it('has an array of ships', function() {
    expect(game.ships).toEqual([]);
  });

  it('can add ships to the array', function() {
    game.create(ship);
    expect(game.ships.length).toEqual(1);
  });


  it('plots ships on the grid', function(){

  });
});
