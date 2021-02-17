class Vampire {
  constructor(name, pet, thirsty, ounces) {
    this.name = name;
    this.ouncesDrank = 0;
    this.thirsty = true;
    if (pet) {
      this.pet = pet;
    } else {
      this.pet = 'bat';
    }
  }
  drink() {
    if (this.ouncesDrank < 50) {
      this.ouncesDrank += 10;
      this.thirsty = false;
    }
    else if (this.ouncesDrank >= 50) {
      this.thirsty = false;
      return 'I\'m too full to drink anymore!';
    }
  }
}
module.exports = Vampire;
