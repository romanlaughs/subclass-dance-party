var MakeSuperHeroDancer = function(top, left, timeBetweenSteps) {
  MakeDancer.call(this, top, left, timeBetweenSteps);
};

MakeSuperHeroDancer.prototype = Object.create(MakeDancer.prototype);
MakeSuperHeroDancer.prototype.constructor = MakeSuperHeroDancer;

MakeSuperHeroDancer.prototype.step = function() {
  MakeDancer.prototype.step.call(this);
  this.$node.toggle();
};