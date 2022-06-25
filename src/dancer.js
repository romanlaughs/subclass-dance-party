var MakeDancer = function(top, left, timeBetweenSteps) {
  this.$node = $('<span class="dancer"></span>');
  this.timeBetweenSteps = timeBetweenSteps;
  this.step();
  this.left = left;
  this.top = top;
  this.setPosition();
};

MakeDancer.prototype.step = function() {
  this.timeout = setTimeout(this.step.bind(this), this.timeBetweenSteps);
};

MakeDancer.prototype.lineup = function() {
  this.$node.css({'top': 400});
};

MakeDancer.prototype.unlineup = function() {
  this.$node.css({'top': '' + (Math.random() * 90) + '%'});
};

MakeDancer.prototype.setPosition = function() {
  var positionSettings = {
    top: this.top,
    left: this.left
  };
  this.$node.css(positionSettings);
};

