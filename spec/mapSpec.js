describe("Map", function() {
  var map = new Map();

  it('should be an array of arrays', function() {
    expect(map.array).toEqual(jasmine.any(Array));
    expect(map.array[0]).toEqual(jasmine.any(Array));
    

  });

});
