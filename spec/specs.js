describe("countUpBy", function() {
  it('counts up by the user input', function() {
    expect(countUpBy(10, 2)).to.eql([2,4,6,8,10]);
  })
});
