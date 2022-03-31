const refs = {
  valueToInput: document.querySelector('input'),
  createBtn: document.querySelector('[data-create]'),
  destroyBtn: document.querySelector('[data-destroy]'),
  divsContainer: document.querySelector('#boxes'),
};
let startBoxSizing = 30;
 
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const onCreateCounterInValueInput = value => {
  refs.valueToInput.setAttribute('counter', value.currentTarget.value);
};
let allDivsEl = [];
const onCreateBoxes = () => {
 
  for (let i = 1; i <= refs.valueToInput.getAttribute('counter'); i += 1) {
    startBoxSizing += 10;
    const createdDiv = document.createElement('div');
    createdDiv.classList.add('box-item');
    createdDiv.style.width = `${startBoxSizing}px`;
    createdDiv.style.height = `${startBoxSizing}px`;
    createdDiv.style.border = '2px solid black';
    createdDiv.style.backgroundColor = `${getRandomHexColor()}`;
    createdDiv.style.marginTop = '10px';
    createdDiv.style.verticalAlign = 'middle';
    allDivsEl.push(createdDiv);
  }
  refs.divsContainer.append(...allDivsEl);
};

const onDestroyBoxes = () => {
  refs.divsContainer.innerHTML = '';
  refs.valueToInput.removeAttribute('counter');
  refs.valueToInput.value = '';
  allDivsEl = [];
  startBoxSizing = 30;
};

refs.valueToInput.addEventListener('input', onCreateCounterInValueInput);
refs.createBtn.addEventListener('click', onCreateBoxes);
refs.destroyBtn.addEventListener('click',onDestroyBoxes);
