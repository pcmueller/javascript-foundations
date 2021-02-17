var Person = require('./person');
var Statue = require('./statue');

class Medusa {
  constructor(name) {
    this.name = name;
    this.statues = [];
  }
  gazeAtVictim(victim) {
    this.statues.push(new Statue);
    this.statues[this.statues.length - 1].name = victim.name;
    if (this.statues.length > 3){
      var person = new Person(`${this.statues[0].name}`);
      this.statues.shift();
      person.mood = 'relieved';
      return person;
    }
  }
}


module.exports = Medusa;
