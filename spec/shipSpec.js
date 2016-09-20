describe("Ship", function() {
  var ship = new Ship(1, 1);

  it('knows its position', function() {
    expect(ship.position).toEqual([1,1]);
  });

});
