var MakeSuperHeroDancer = function(top, left, timeBetweenSteps) {
  MakeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('superHero');
  var $hero = this.$node;
  this.name = 'superHero';
  this.$node.mouseover(function() {
    $hero.css('border-color', 'orange');
  });
  this.$node.mouseleave(function() {
    $hero.css('border-color', 'white');
  });
};

MakeSuperHeroDancer.prototype = Object.create(MakeDancer.prototype);
MakeSuperHeroDancer.prototype.constructor = MakeSuperHeroDancer;

MakeSuperHeroDancer.prototype.step = function() {
  MakeDancer.prototype.step.call(this);
};
