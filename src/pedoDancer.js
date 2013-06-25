var PedoDancer = function(top, left, timeBetweenSteps){
  Dancer.apply(this, arguments);
  this.$node.addClass("pedodancer");
  this.$node.html('<img src= "http://static.rcgroups.net/forums/attachments/3/3/3/7/4/3/a4023907-97-pedobear.png?d=1305773747" width=100 height=162 />');  
};

PedoDancer.prototype = Object.create(Dancer.prototype);
PedoDancer.prototype.constructor = PedoDancer;

PedoDancer.prototype.step = function(timeBetweenSteps){

  Dancer.prototype.step.call(this, timeBetweenSteps);

  this.$node.slideDown();
};


