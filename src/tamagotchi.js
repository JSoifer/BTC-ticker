export class Tamagotchi {
  constructor(name) {
    this.name = name;
    this.foodLevel = 5;
    this.moodLevel = 5;
    this.restLevel = 5;
    this.healthLevel = 5;
  }
  setTimer() {
    const timer = setInterval(() => {
      this.foodLevel--;
      this.moodLevel--;
      this.restLevel--;
      if(this.moodLevel <= 0) {
        this.healthLevel--;
      }
      if(this.restLevel <= 0) {
        this.healthLevel--;
      }
      if(this.foodLevel <= 0) {
        this.healthLevel--;
      }
  }, 10000);
}

  resetLevels() {
    this.foodLevel = 5;
    this.moodLevel = 5;
    this.restLevel = 5;
    this.healthLevel = 5;
  }

  feedMeal() {
   this.foodLevel += 5;
   this.healthLevel += 2;
  }

  feedSnack() {
   this.foodLevel += 2;
   this.moodLevel += 1;
  }

  play() {
    this.moodLevel += 5;
    this.restLevel -= 2;
    this.healthLevel += 2;
    }

  sleep() {
    this.restLevel += 5;
    this.healthLevel += 2;
  }

  medicate() {
    this.healthLevel += 5;
  }

  // healthMeter() {
  //   const loseHealth = setInterval(() => {
  //     if(this.foodLevel <= 0) {
  //       this.healthLevel--;
  //     }
  //   }, 10000);
  // }
}
