var MakeSuperHeroDancer = function(top, left, timeBetweenSteps) {
  MakeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('superHero');
};

MakeSuperHeroDancer.prototype = Object.create(MakeDancer.prototype);
MakeSuperHeroDancer.prototype.constructor = MakeSuperHeroDancer;

MakeSuperHeroDancer.prototype.step = function() {
  MakeDancer.prototype.step.call(this);
  //this.$node.toggle();
  this.$node.animate({
    'border-width': '15px',
    'border-height': '15px',
  }, 1000);

  this.$node.animate({
    'border-width': '2px',
    'border-height': '2px',
  }, 1000);
};
// MakeSuperHeroDancer.prototype.rotate = function(degrees) {
//   this.$node.css({'transform': 'rotate(' + degrees + 'deg)'});

// return this.$node;
