var Character = function (name, profession, gender, age, strength, hitpoints) {
  this.name = name;
  this.profession = profession;
  this.gender = gender;
  this.age = age;
  this.strength = strength;
  this.hitpoints = hitpoints;
};

Character.prototype.isAlive = function() {
  // method which determines whether or not a character's "hitpoints" are less then zero
  // and returns true or false depending upon the outcome
    if (this.hitpoints > 0) {
      console.log(this.name + " is still alive!");
      console.log("\n-------------\n");
      return true;
    }
    console.log(this.name + " has died!");
    return false;
};

  
Character.prototype.attack = function(character2) {
    // method which takes in a second object and decreases their "hitpoints" by this character's strength
    character2.hitpoints -= this.strength;
};
  
Character.prototype.printStats = function() {
    // method which prints all of the stats for a character
    console.log("Name: " + this.name + "\nProfession: " + this.profession +
    "\nGender: " + this.gender + "\nAge: " + this.age + "\nStrength: " +
    this.strength + "\nHitPoints: " + this.hitpoints);
    console.log("\n-------------\n");
};
  
Character.prototype.levelUp = function() {
    // method which increases this character's stats when called
    this.age += 1;
    this.strength += 5;
    this.hitpoints += 25;
};  
  
module.exports = Character;