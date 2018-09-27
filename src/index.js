class SmartCalculator {
  constructor(initialValue) {
    this.sum = initialValue;
  }

  add(number) {
    this.sum += '+' + number;
    return this;
  }
  
  subtract(number) {
    this.sum += '-' + number;
    return this;
  }

  multiply(number) {
    this.sum += '*' + number;
    return this;
  }

  devide(number) {
    this.sum += '/' + number;
    return this;  
  }

  pow(number) {
    this.sum += '**' + number;
    return this;
  }
  valueOf() {
    return eval(this.sum);
  }
}

module.exports = SmartCalculator;
