var MarioDancer = function(top, left, timeBetweenSteps){
  Dancer.apply(this, arguments);
  this.$node.addClass("mariodancer");
  this.$node.html('<img src= "http://i861.photobucket.com/albums/ab180/l3lackjax/8BitMario-1.png" width=159 height=146 />');  
};

MarioDancer.prototype = Object.create(Dancer.prototype);
MarioDancer.prototype.constructor = MarioDancer;

MarioDancer.prototype.step = function(timeBetweenSteps){

  Dancer.prototype.step.call(this, timeBetweenSteps);

  MarioDancer.prototype.chase.call(this);
};

MarioDancer.prototype.chase = function(){
  var marHoriz = parseInt(this.$node.css('left').substring(0,4), 10);
  var marVert = parseInt(this.$node.css('top').substring(0,4), 10);
  var distanceArray = [];

  for (var i = 0; i < dancers.length; i++){
    if (dancers[i].hasClass('pedodancer')){
      var pedoHoriz = parseInt(dancers[i].css('left').substring(0,4), 10);
      var pedoVert = parseInt(dancers[i].css('top').substring(0,4), 10);
      var horDist = Math.pow((pedoHoriz-marHoriz),2);
      var vertDist = Math.pow((pedoVert-marVert),2);
      var dist = Math.sqrt(horDist + vertDist);
      distanceArray[i] = dist;
    }
  }
  var dubarr = distanceArray;
  dubarr.sort();
  var indexClosest = distanceArray.indexOf(dubarr[0]);
  var localObj = $(dancers[indexClosest]).position() || {top:$("body").height()*0.8,left:1};

  this.$node.animate({top: localObj.top});
  this.$node.animate({left: localObj.left});
  this.$node.animate({top: localObj.top-200});
  this.$node.animate({top: localObj.top});

};