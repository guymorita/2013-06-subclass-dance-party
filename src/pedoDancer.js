var PedoDancer = function(top, left, timeBetweenSteps){
  Dancer.apply(this, arguments);
  this.$node.addClass("pedodancer");
  this.$node.html('<img src= "http://static.rcgroups.net/forums/attachments/3/3/3/7/4/3/a4023907-97-pedobear.png?d=1305773747" width=100 height=162 />');  
};

PedoDancer.prototype = Object.create(Dancer.prototype);
PedoDancer.prototype.constructor = PedoDancer;

PedoDancer.prototype.step = function(timeBetweenSteps){

  Dancer.prototype.step.call(this, timeBetweenSteps);

  PedoDancer.prototype.escape.call(this.$node);
};


PedoDancer.prototype.escape = function(){
  var horiz = parseInt(this.css('left').substring(0,4), 10);
  var vert = parseInt(this.css('top').substring(0,4), 10);
  horiz = horiz + (300 * Math.random() - 150);
  vert = vert + (300 * Math.random() - 150);
  if (vert < 0 || vert > $("body").height()){
    this.animate({top:$("body").height()*(Math.random())});
  } else {
    this.animate({top:vert});
  }
  if (horiz < 0 || horiz > $("body").width()){
    this.animate({left:$("body").width()*(Math.random())});
  } else {
    this.animate({left:horiz});
  }
};