var MakeDancer = function(top, left, timeBetweenSteps) {
  this.$node = $('<span class="dancer"></span>');
  this.timeBetweenSteps = timeBetweenSteps;
  this.step();
  this.top = top;
  this.left = left;
  this.setPosition();
  // console.log(this.top);
  // console.log(this.left);
};

MakeDancer.prototype.step = function() {
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
};

MakeDancer.prototype.lineup = function() {
  this.$node.css({'top': 200});
};

MakeDancer.prototype.unlineup = function() {
  this.$node.css({'top': this.top});
  this.$node.css({'left': this.left});
};

MakeDancer.prototype.setPosition = function() {
  var positionSettings = {
    top: this.top,
    left: this.left
  };
  this.$node.css(positionSettings);
};