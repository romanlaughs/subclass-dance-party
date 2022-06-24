var MakePopDancer = function(top, left, timeBetweenSteps) {
  MakeDancer.call(this, top, left, timeBetweenSteps);
  this.setStyle();
};

MakePopDancer.prototype = Object.create(MakeDancer.prototype);
MakePopDancer.prototype.constructor = MakePopDancer;

MakePopDancer.prototype.step = function() {
  MakeDancer.prototype.step.call(this);
  this.$node.animate({
    'left': '1000px'
  }, 2000, 'swing');
  this.$node.animate({
    'left': '0px'
  }, 2000, 'swing');
};

MakePopDancer.prototype.setStyle = function() {
  var style = {
    'border': '15px',
    'border-style': 'solid',
    'border-color': 'blue',
    'border-radius': '10px',
    'position': 'absolute',
  };
  this.$node.css(style);
};
