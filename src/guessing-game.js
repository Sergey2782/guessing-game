class GuessingGame {
    constructor() {
      this.min_value = 0;
      this.max_value = 0;
      this.res = 0;
    }
  
    setRange(min, max) {
      this.min_value = min+1;
      this.max_value = max;
    }
  
    guess() {
      this.res = Math.floor(
        this.min_value + (this.max_value - this.min_value) / 2
      );
      return this.res;
    }
  
    lower() {
      this.max_value = this.res;
    }
  
    greater() {
      this.min_value = this.res+1;
    }
  }
  
  
  module.exports = GuessingGame;
