var MarioDancer = function(top, left, timeBetweenSteps){
  Dancer.apply(this, arguments);
  this.$node.addClass("mariodancer");
  this.$node.html('<img src= "http://i861.photobucket.com/albums/ab180/l3lackjax/8BitMario-1.png" width=159 height=146 />');  
};

MarioDancer.prototype = new Dancer();
MarioDancer.prototype.constructor = MarioDancer;

MarioDancer.prototype.step = function(timeBetweenSteps){

  Dancer.prototype.step.call(this, timeBetweenSteps);

  // this.$node.css({
  //   '-webkit-transform': 'rotate(30deg)',
  //   '-moz-transform': 'rotate(30deg)',
  //   'transform': 'rotate(30deg)',
  //   '-webkit-animation-name': 'spin',
  //   '-webkit-animation-iteration-count': 'infinite',
  //   '-webkit-animation-timing-function': 'linear',
  //   '-webkit-animation-duration': '3s'
  // });
  this.$node.toggle();
  this.$node.slideUp();

};


