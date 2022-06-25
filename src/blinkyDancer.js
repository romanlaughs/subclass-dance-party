// var makeBlinkyDancer = function(top, left, timeBetweenSteps) {
//   var blinkyDancer = MakeDancer(top, left, timeBetweenSteps);

//   // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
//   // so we must keep a copy of the old version of this function

//   var oldStep = blinkyDancer.step;

//   blinkyDancer.step = function() {
//     // call the old version of step at the beginning of any call to this new version of step
//     oldStep();
//     // console.log(oldStep);
//     // toggle() is a jQuery method to show/hide the <span> tag.
//     // See http://api.jquery.com/category/effects/ for this and
//     // other effects you can use on a jQuery-wrapped html tag.
//     blinkyDancer.$node.toggle();
//   };
//   return blinkyDancer;
// };

var MakeBlinkyDancer = function(top, left, timeBetweenSteps) {
  MakeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('blinkyDancer');
  //this.setStyle();
  var $blinky = this.$node;
  this.name = 'blinkyDancer';
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
  //this.$node.toggle();
  this.$node.animate({
    'border-width': '15px',
    'border-radius': '15px'
  }, 'slow');
  this.$node.animate({
    'border-width': '1px',
    'border-radius': '1px'
  }, 'slow');
};

MakeBlinkyDancer.prototype.setStyle = function() {
  var style = {
    'border': '10px solid gold',
    'border-radius': '10px',
    'position': 'absolute'
  };
  this.$node.css(style);
};