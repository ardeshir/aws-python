var Character = require('./character');

// creates two unique characters using the "character" constructor
var warrior = new Character("Crusher", "Warrior", "Male", 25, 10, 75);
var rogue   = new Character("Dodger", "Rogue", "Female", 23, 20, 50);

warrior.printStats();
rogue.printStats();

rogue.attack(warrior);
warrior.printStats();
warrior.isAlive();

rogue.levelUp();
rogue.printStats();

// while loop that continues to run so long as both characters' "hitpoints" are above zero
while (warrior.isAlive() === true && rogue.isAlive() === true) {
  // characters deal damage to one another
  warrior.attack(rogue);
  rogue.attack(warrior);
  // prints stats to show changes
  warrior.printStats();
  rogue.printStats();
}
