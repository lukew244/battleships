describe("Ship", function() {
  var ship = new Ship(3, 'H');

  it('has a size', function(){
    expect(ship.size).toEqual(3);
  });

  it('has a direction', function(){
    expect(ship.direction).toEqual('H');
  });

  it('knows its position', function() {
    expect(ship.position).toEqual([1, 1]);
  });



});
