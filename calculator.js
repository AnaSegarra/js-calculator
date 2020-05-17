class Calculator {
  constructor() {
    this.firstFactor = '0';
    this.secondFactor = '0';
    this.operation;
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
  handleOperation() {
    let result;
    switch (this.operation) {
      case '+':
        result = this.add(this.firstFactor, this.secondFactor);
        break;
      case '-':
        result = this.subtract(this.firstFactor, this.secondFactor);
        break;
      case 'x':
        result = this.multiply(this.firstFactor, this.secondFactor);
        break;
      case '÷':
        result = this.divide(this.firstFactor, this.secondFactor);
        break;
      default:
        result = document.getElementById('display').textContent;
    }
    return result;
  }
}
