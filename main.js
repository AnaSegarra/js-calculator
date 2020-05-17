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
    if (!display.textContent.includes('.')) {
      console.log('adding decimal dot');
      display.textContent += '.';
      calculator.operation
        ? (calculator.secondFactor = display.textContent)
        : (calculator.firstFactor = display.textContent);
    }
  });

  clear.addEventListener('click', () => {
    console.log('clearing screen');
    display.textContent = '0';
    calculator.firstFactor = '0';
    calculator.secondFactor = '0';
    calculator.operation = null;
  });

  document.querySelectorAll('.operations').forEach(operation => {
    operation.addEventListener('click', e => {
      console.log(e.target.textContent);
      calculator.operation = e.target.textContent;
    });
  });

  document.getElementById('equal').addEventListener('click', () => {
    const result = calculator.handleOperation();
    console.log('resultado', result);
    display.textContent = result;
    calculator.firstFactor = result;
    calculator.secondFactor = '0';
    calculator.operation = null;
  });
});
