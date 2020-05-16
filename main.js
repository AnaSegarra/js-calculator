const calculator = new Calculator();

window.addEventListener('load', () => {
  let display = document.getElementById('display');
  const clear = document.getElementById('clear');
  const decimal = document.getElementById('decimal');

  document.querySelectorAll('.number').forEach(num =>
    num.addEventListener('click', e => {
      console.log(e.target.textContent);
      display.textContent =
        calculator.firstFactor === 0
          ? e.target.textContent
          : display.textContent + e.target.textContent;
      calculator.firstFactor = display.textContent;
    })
  );

  decimal.addEventListener('click', () => {
    console.log('adding decimal dot');
    if (!display.textContent.includes('.')) {
      display.textContent += '.';
    }
  });

  clear.addEventListener('click', () => {
    console.log('clearing screen');
    display.textContent = 0;
    calculator.firstFactor = 0;
  });
});
