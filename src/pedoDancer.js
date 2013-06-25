var PedoDancer = function(top, left, timeBetweenSteps){
  Dancer.apply(this, arguments);
  this.$node.addClass("pedodancer");
  this.$node.html('<img src= "http://static.rcgroups.net/forums/attachments/3/3/3/7/4/3/a4023907-97-pedobear.png?d=1305773747" width=100 height=162 />');  
};

PedoDancer.prototype = new Dancer();
PedoDancer.prototype.constructor = PedoDancer;

PedoDancer.prototype.step = function(timeBetweenSteps){

  Dancer.prototype.step.call(this, timeBetweenSteps);

  this.$node.css({
    '-webkit-transform': 'rotate(30deg)',
    '-moz-transform': 'rotate(30deg)',
    'transform': 'rotate(30deg)',
    '-webkit-animation-name': 'spin',
    '-webkit-animation-iteration-count': 'infinite',
    '-webkit-animation-timing-function': 'linear',
    '-webkit-animation-duration': '3s'
  });
  this.$node.toggle();
  this.$node.slideDown();
};


