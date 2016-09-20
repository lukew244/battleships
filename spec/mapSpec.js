describe("Map", function() {
  var map = new Map();

  it('should be an array of arrays', function() {
    expect(map.grid).toEqual(jasmine.any(Array));
    expect(map.grid[0]).toEqual(jasmine.any(Array));


  });

});
