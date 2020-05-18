const calculator = new Calculator();

window.addEventListener('load', () => {
  const operators = document.querySelectorAll('.operations');

  document
    .querySelectorAll('.number')
    .forEach(num => num.addEventListener('click', e => calculator.addNumber(e.target.textContent)));

  document.getElementById('decimal').addEventListener('click', () => calculator.addDecimal());

  document.getElementById('clear').addEventListener('click', () => {
    calculator.clear();
    operators.forEach(operator => operator.classList.remove('selected'));
  });

  operators.forEach(operator => {
    operator.addEventListener('click', e => {
      console.log(e.target.textContent);
      // handle consecutive operations
      if (calculator.operation && calculator.secondFactor) calculator.handleOperation();

      // change active operator
      if (calculator.operation !== e.target.textContent) {
        operators.forEach(operator => operator.classList.remove('selected'));
        calculator.operation = e.target.textContent;
        e.target.classList.add('selected');
      }
    });
  });

  document.getElementById('equal').addEventListener('click', () => {
    calculator.handleOperation();
    calculator.operation = null;

    operators.forEach(operator => operator.classList.remove('selected'));
  });

  document.getElementById('delete').addEventListener('click', () => calculator.delete());
});
