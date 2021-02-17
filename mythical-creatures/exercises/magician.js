class Magician {
  constructor(object) {
    this.name = `The Great ${object.name}`;
    this.assistant = object.assistant;
    this.confidencePercentage = 10;
    if (object.clothing) {
      this.favoriteAccessory = object.clothing;
    } else {
      this.favoriteAccessory = 'top hat';
    }
  }
  performIncantation(string) {
    var incantation = string.toUpperCase() + '!';
    return incantation;
  }
  performTrick() {
    if (this.confidencePercentage < 100) {
      this.confidencePercentage += 10;
    }
    if (this.favoriteAccessory === 'top hat') {
      return `PULL RABBIT FROM TOP HAT`;``
    } else {
      return `PULL DOVE FROM SLEEVE`;
    }
  }
  performShowStopper() {
    if (this.confidencePercentage < 100 || this.assistant === false) {
      return `Oh no, this trick is not ready!`;
    } else {
      return `WOW! The magician totally just sawed that person in half!`;
    }
  }
}

module.exports = Magician;
