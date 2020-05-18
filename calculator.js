class Calculator {
  constructor() {
    this.firstFactor = '0';
    this.secondFactor;
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
    // operations are based on the first operand if only one operand has been entered when hitting equal sign
    this.secondFactor = this.secondFactor || this.firstFactor;

    console.log('el segundo número es', this.secondFactor);
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
        // fallback in case user hits equal without choosing an operator
        result = document.getElementById('display').textContent;
    }
    return result;
  }
}
