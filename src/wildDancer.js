var MakeWildDancer = function(top, left, timeBetweenSteps) {
  MakeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('wildDancer');
  var $wild = this.$node;
  this.name = 'wildDancer';
  this.check();
  //setTimeout(this.check, 5000);
};


MakeWildDancer.prototype = Object.create(MakeDancer.prototype);
MakeWildDancer.prototype.constructor = MakeWildDancer;

MakeWildDancer.prototype.step = function() {
  MakeDancer.prototype.step.call(this);
  this.$node.toggle();
};

MakeWildDancer.prototype.check = function() {
  var notRight = this.left;
  var notBottom = this.top;
  var distance = {};
  window.dancers.forEach(function(dancer) {
    if (dancer.name !== 'wildDancer') {
      var curLeft = Math.abs(dancer.left - notRight);
      var curTop = Math.abs(dancer.top - notBottom);
      var res = ((curLeft * curLeft) + (curTop * curTop));
      var result = Math.sqrt(res);
      if (distance[dancer.name] === undefined) {
        distance[dancer.name] = [];
      }
      distance[dancer.name].push(result);
      // distance[dancer] = result;
    }
  });
  // var min = -1;
  // var one;
  // for (var key in distance) {
  //   if (min === -1 || min > distance[key]) {
  //     min = distance[key];
  //     one = key;
  //   }
  // }
  // console.log(one.$node);
  // one.$node.css('color', 'greenyellow');
  var one = this.min(distance);
  var color = $('.' + one).css('color');
  console.log(color);
  this.$node.css('color', color);
};

MakeWildDancer.prototype.min = function(object) {
  var min;
  var result = '';
  for (var key in object) {
    for (var i = 0; i < object[key].length; i++) {
      if (min === undefined || min > object[key][i]) {
        min = object[key][i];
        result = key;
      }
    }
  }
  return result;
};

