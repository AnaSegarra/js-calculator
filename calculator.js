class Calculator {
  constructor() {
    this.firstFactor = 0;
    this.secondFactor;
  }
  add(num1, num2) {
    return Number(num1) + Number(num2);
  }
  subtract(num1, num2) {
    return Number(num1) - Number(num2);
  }
  multiply(num1, num2) {
    return Number(num1) * Number(num2);
  }
  divide(num1, num2) {
    return Number(num1) / Number(num2);
  }
}
