const calculator = new Calculator();

window.addEventListener('load', () => {
  let display = document.getElementById('display');
  const clear = document.getElementById('clear');
  const decimal = document.getElementById('decimal');

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
        display.textContent =
          calculator.secondFactor === '0'
            ? e.target.textContent
            : display.textContent + e.target.textContent;
        calculator.secondFactor = display.textContent;
      }
    })
  );

  decimal.addEventListener('click', () => {
    if (calculator.operation && !calculator.secondFactor.includes('.')) {
      display.textContent = calculator.secondFactor === '0' ? '0.' : display.textContent + '.';
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
    calculator.secondFactor = '0';
    calculator.operation = null;

    document
      .querySelectorAll('.operations')
      .forEach(operation => operation.classList.remove('selected'));
  });

  document.querySelectorAll('.operations').forEach(operation => {
    operation.addEventListener('click', e => {
      console.log(e.target.textContent);
      // handle consecutive operations
      if (calculator.operation && calculator.secondFactor !== '0') {
        const result = calculator.handleOperation();
        console.log('resultado', result);
        display.textContent = result;
        calculator.firstFactor = display.textContent;
        calculator.secondFactor = '0';
      }

      if (calculator.operation !== e.target.textContent) {
        document
          .querySelectorAll('.operations')
          .forEach(operation => operation.classList.remove('selected'));
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
    calculator.secondFactor = '0';
    calculator.operation = null;

    document
      .querySelectorAll('.operations')
      .forEach(operation => operation.classList.remove('selected'));
  });
});
