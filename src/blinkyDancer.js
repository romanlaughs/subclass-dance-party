
var MakeBlinkyDancer = function(top, left, timeBetweenSteps) {
  MakeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('blinkyDancer');
  this.setStyle();
  var $blinky = this.$node;
  this.$node.mouseover(function() {
    $blinky.css('border-color', 'green');
  });
  this.$node.mouseleave(function() {
    $blinky.css('border-color', 'gold');
  });
};

MakeBlinkyDancer.prototype = Object.create(MakeDancer.prototype);
MakeBlinkyDancer.prototype.constructor = MakeBlinkyDancer;

MakeBlinkyDancer.prototype.step = function() {
  MakeDancer.prototype.step.call(this);
  this.$node.toggle();
  // this.$node.animate({
  //   'border-width': '15px',
  //   'border-radius': '15px'
  // }, 'slow');
  // this.$node.animate({
  //   'border-width': '1px',
  //   'border-radius': '1px'
  // }, 'slow');
};

MakeBlinkyDancer.prototype.setStyle = function() {
  var style = {
    'border': '10px solid gold',
    'border-radius': '10px',
    'position': 'absolute'
  };
  this.$node.css(style);
};