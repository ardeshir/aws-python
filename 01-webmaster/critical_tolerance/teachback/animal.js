var Animal = function(raining, noise) {
  this.raining = raining;
  this.noise = noise;
};

Animal.prototype.makeNoise = function() {
    if (this.raining === true) {
      console.log(this.noise);
    }
};

module.exports = Animal;
