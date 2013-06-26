describe("pedoDancer", function() {
  var pedoDancer;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    // sets up a way to delay this test -- used below
    jasmine.Clock.useMock();

    pedoDancer = new PedoDancer(10, 20, timeBetweenSteps);
  });

  it("should have a jQuery $node object", function(){
    expect(pedoDancer.$node).toEqual(jasmine.any(jQuery));
  });

  it("should have a step function that makes its node blink", function() {
    spyOn(pedoDancer.$node, 'animate');
    pedoDancer.step();
    expect(pedoDancer.$node.animate).toHaveBeenCalled();
  });

  // describe("dance", function(){

  //   it("should call step periodically", function(){
  //     spyOn(pedoDancer, "step").andCallThrough();
  //     // for crazy reasons, we need to let some time pass
  //     // specifically, the spied-upon step function will not be called the first time around
  //     jasmine.Clock.tick(timeBetweenSteps);

  //     expect(pedoDancer.step.callCount).toBe(0);

  //     jasmine.Clock.tick(timeBetweenSteps);
  //     expect(pedoDancer.step.callCount).toBe(1);

  //     jasmine.Clock.tick(timeBetweenSteps);
  //     expect(pedoDancer.step.callCount).toBe(2);
  //   });

  // });
});
