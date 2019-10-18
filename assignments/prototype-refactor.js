/*

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

  function GameObject(values) {
    this.createdAt = values.createdAt;
    this.name = values.name;
    this.dimensions = values.dimensions;
  //  this.destroy = function() { return `${this.name} was removed from the game.` };
  };
  GameObject.prototype.destroy = function() { return `${this.name} was removed from the game.` };


  function CharacterStart(stats) {
    this.healthPoints = stats.healthPoints;
    GameObject.call(this, stats); // linked to GameObject
  };
  CharacterStart.prototype = Object.create(GameObject.prototype); //? links above protos?
  CharacterStart.prototype.takeDamage = function() { return `${this.name} took damage.` };


  function Humanoid(stats) {
    this.team = stats.team;
    this.weapons = stats.weapons;
    this.language = stats.language;
    CharacterStart.call(this, stats); // linked to CharacterStart
  };
  Humanoid.prototype = Object.create(CharacterStart.prototype); //? links above protos?
  Humanoid.prototype.greet = function() { return `${this.name} offers a greeting in ${this.language}.` };


2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/
class GameObject {
  constructor(values) {
    this.createdAt = values.createdAt;
    this.name = values.name;
    this.dimensions = values.dimensions;
  }
  destroy() {
    return `${this.name} was removed from the game.`;
  }
}

class CharacterStart extends GameObject {
  constructor(stats) {
    super(stats); // links to above calss and inharits funtion actiong as proto
    this.healthPoints = stats.healthPoints;
  }
  takeDamage() {
    return `${this.name} took damage.`;
  }
}

class Humanoid extends CharacterStart {
  constructor(stats) {
    super(stats); // links to above calss and inharits funtion actiong as proto
    this.team = stats.team;
    this.weapons = stats.weapons;
    this.language = stats.language;
  }
  greet() {
    return `${this.name} offers a greeting in ${this.language}.`;
  }
}




//the code that ran the game
// Test you work by un-commenting these 3 objects and the list of console logs below:


  const mage = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 1,
      height: 1,
    },
    healthPoints: 5,
    name: 'Bruce',
    team: 'Mage Guild',
    weapons: [
      'Staff of Shamalama',
    ],
    language: 'Common Tongue',
  });

  const swordsman = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 2,
      height: 2,
    },
    healthPoints: 15,
    name: 'Sir Mustachio',
    team: 'The Round Table',
    weapons: [
      'Giant Sword',
      'Shield',
    ],
    language: 'Common Tongue',
  });

  const archer = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 1,
      width: 2,
      height: 4,
    },
    healthPoints: 10,
    name: 'Lilith',
    team: 'Forest Kingdom',
    weapons: [
      'Bow',
      'Dagger',
    ],
    language: 'Elvish',
  });

  console.log(mage.createdAt); // Today's date
  console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
  console.log(swordsman.healthPoints); // 15
  console.log(mage.name); // Bruce
  console.log(swordsman.team); // The Round Table
  console.log(mage.weapons); // Staff of Shamalama
  console.log(archer.language); // Elvish
  console.log(archer.greet()); // Lilith offers a greeting in Elvish.
  console.log(mage.takeDamage()); // Bruce took damage.
  console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.
