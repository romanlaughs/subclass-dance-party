var MakeSuperHeroDancer = function(top, left, timeBetweenSteps) {
  MakeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="dancer superHero"></span>');
  this.setStyle();
};

MakeSuperHeroDancer.prototype = Object.create(MakeDancer.prototype);
MakeSuperHeroDancer.prototype.constructor = MakeSuperHeroDancer;

MakeSuperHeroDancer.prototype.step = function() {
  MakeDancer.prototype.step.call(this);
  //this.$node.toggle();
  this.$node.animate({
    'border-width': '15px',
    'border-height': '15px',
    'transform': 'rotate (180deg)'
  }, 1000);

  this.$node.animate({
    'border-width': '2px',
    'border-height': '2px',
    'transform': 'rotate(360deg)'
  }, 1000);

  // for (var i = 0; i < 360; i++ ) {
  //   setTimeout(this.rotate(i), 2000);
  // }
};

MakeSuperHeroDancer.prototype.setStyle = function() {

  var style = {
    'border': '30px',
    'border-style': 'solid',
    'border-color': 'white',
    'border-radius': '0px',
    'position': 'absolute',



    // 'animation': 'example',
    // 'animation-duration': '2s',
    // 'animation-iteration-count': 'infinite',
  };
  this.$node.css(style);
};
MakeSuperHeroDancer.prototype.rotate = function(degrees) {
  this.$node.css({'transform': 'rotate(' + degrees + 'deg)'});

  // return this.$node;
};