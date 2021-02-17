class Pirate {
  constructor(name, job, cursed) {
    this.name = name;
    this.booty = 0;
    this.robberies = 0;
    this.job = job;
    if (!this.job) {
    this.job = 'scallywag';
    }
    this.cursed = cursed;
    if (!this.cursed) {
      this.cursed = false;
    }
  }
  robShip() {
    this.robberies += 1;
    if (this.robberies <= 5) {
      this.booty += 100;
        return `YAARRR!`;
    } else {
      this.cursed = true;
        return `ARG! I've been cursed!`;
    }
  }
  liftCurse() {
    if (this.cursed) {
      this.booty -= 300;
      this.cursed = false;
      return `Your curse has been lifted!`;
    } else {
      return `You don't need to lift a curse!`;
    }
  }
}

module.exports = Pirate;
