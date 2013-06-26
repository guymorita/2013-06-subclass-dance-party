describe("marioDancer", function() {
  var marioDancer;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    // sets up a way to delay this test -- used below
    jasmine.Clock.useMock();

    marioDancer = new MarioDancer(10, 20, timeBetweenSteps);
  });

  it("should have a jQuery $node object", function(){
    expect(marioDancer.$node).toEqual(jasmine.any(jQuery));
  });

  // it("should have a step function that makes its node blink", function() {
  //   spyOn(marioDancer.$node, 'fadeToggle');
  //   marioDancer.step();
  //   expect(marioDancer.$node.fadeToggle).toHaveBeenCalled();
  // });

  // describe("dance", function(){

  //   it("should call step periodically", function(){
  //     spyOn(marioDancer, "step").andCallThrough();
  //     // for crazy reasons, we need to let some time pass
  //     // specifically, the spied-upon step function will not be called the first time around
  //     jasmine.Clock.tick(timeBetweenSteps);

  //     expect(marioDancer.step.callCount).toBe(0);

  //     jasmine.Clock.tick(timeBetweenSteps);
  //     expect(marioDancer.step.callCount).toBe(1);

  //     jasmine.Clock.tick(timeBetweenSteps);
  //     expect(marioDancer.step.callCount).toBe(2);
  //   });

  // });
});
