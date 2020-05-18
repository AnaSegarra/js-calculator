const calculator = new Calculator();

window.addEventListener('load', () => {
  let display = document.getElementById('display');
  const clear = document.getElementById('clear');
  const decimal = document.getElementById('decimal');
  const operators = document.querySelectorAll('.operations');

  document.querySelectorAll('.number').forEach(num =>
    num.addEventListener('click', e => {
      console.log(e.target.textContent);
      if (!calculator.operation) {
        console.log('first factor');
        display.textContent =
          calculator.firstFactor === '0'
            ? e.target.textContent
            : display.textContent + e.target.textContent;
        calculator.firstFactor = display.textContent;
      } else {
        console.log('second factor');
        display.textContent = !calculator.secondFactor
          ? e.target.textContent
          : display.textContent + e.target.textContent;
        calculator.secondFactor = display.textContent;
      }
    })
  );

  decimal.addEventListener('click', () => {
    if (calculator.operation) {
      !calculator.secondFactor
        ? (display.textContent = '0.')
        : !display.textContent.includes('.')
        ? (display.textContent += '.')
        : '';

      calculator.secondFactor = display.textContent;
    } else {
      !display.textContent.includes('.') ? (display.textContent += '.') : '';
      calculator.firstFactor = display.textContent;
    }
  });

  clear.addEventListener('click', () => {
    console.log('clearing screen');
    display.textContent = '0';
    calculator.firstFactor = '0';
    calculator.secondFactor = null;
    calculator.operation = null;

    operators.forEach(operator => operator.classList.remove('selected'));
  });

  operators.forEach(operator => {
    operator.addEventListener('click', e => {
      console.log(e.target.textContent);
      // handle consecutive operations
      if (calculator.operation && calculator.secondFactor !== '0') {
        const result = calculator.handleOperation();
        console.log('resultado', result);
        display.textContent = result;
        calculator.firstFactor = display.textContent;
        calculator.secondFactor = null;
      }

      if (calculator.operation !== e.target.textContent) {
        operators.forEach(operator => operator.classList.remove('selected'));
        calculator.operation = e.target.textContent;
        e.target.classList.add('selected');
      }
    });
  });

  document.getElementById('equal').addEventListener('click', () => {
    const result = calculator.handleOperation();
    console.log('resultado', result);
    display.textContent = result;
    calculator.firstFactor = display.textContent;
    calculator.secondFactor = null;
    calculator.operation = null;

    operators.forEach(operator => operator.classList.remove('selected'));
  });

  document.getElementById('delete').addEventListener('click', () => {
    display.textContent = display.textContent.length > 1 ? display.textContent.slice(0, -1) : '0';
    calculator.operation
      ? (calculator.secondFactor = display.textContent)
      : (calculator.firstFactor = display.textContent);
  });
});
