let counterValue = document.querySelector("#value");
const btnDecrement = document.querySelector('button[data-action="decrement"]');
const btnIncrement = document.querySelector('button[data-action="increment"]');

let total = + counterValue.textContent;
const increment = () => {
  total += 1;
  counterValue.textContent = total;
};
const decrement = () => {
  total -= 1;
  counterValue.textContent = total;
};
btnIncrement.addEventListener('click', increment);
btnDecrement.addEventListener('click', decrement); 
