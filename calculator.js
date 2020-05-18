class Calculator {
  constructor() {
    this.firstFactor = '0';
    this.secondFactor;
    this.operation;
    this.screen = document.getElementById('display');
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
        result = this.screen.textContent;
    }

    console.log('resultado', result);
    calculator.firstFactor = result; // set first operand with previous operation's result
    calculator.secondFactor = null;
    this.screen.textContent = !result || result === Infinity ? 'Math ERROR' : result;
  }

  addNumber(input) {
    console.log('clicado', input);
    if (this.checkError()) {
      console.log('cannot do that');
      return;
    }
    if (!this.operation) {
      console.log('first factor');
      this.screen.textContent = this.firstFactor === '0' ? input : this.screen.textContent + input;
      this.firstFactor = this.screen.textContent;
    } else {
      console.log('second factor');
      this.screen.textContent = !this.secondFactor ? input : this.screen.textContent + input;
      this.secondFactor = this.screen.textContent;
    }
  }

  addDecimal() {
    if (this.checkError()) {
      console.log('cannot do that');
      return;
    }
    if (this.operation) {
      !this.secondFactor
        ? (this.screen.textContent = '0.')
        : !this.screen.textContent.includes('.')
        ? (this.screen.textContent += '.')
        : '';

      this.secondFactor = this.screen.textContent;
    } else {
      !this.screen.textContent.includes('.') ? (this.screen.textContent += '.') : '';
      this.firstFactor = this.screen.textContent;
    }
  }

  clear() {
    display.textContent = '0';
    calculator.firstFactor = '0';
    calculator.secondFactor = null;
    calculator.operation = null;
  }

  delete() {
    this.screen.textContent =
      this.screen.textContent.length > 1 ? this.screen.textContent.slice(0, -1) : '0';

    this.operation
      ? (this.secondFactor = this.screen.textContent)
      : (this.firstFactor = this.screen.textContent);
  }

  checkError() {
    return this.firstFactor === Infinity || isNaN(Number(this.firstFactor));
  }
}
