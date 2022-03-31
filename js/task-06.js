const inputEl = document.querySelector('input[data-length="6"]');

const inputValidation = () => {
  inputEl.classList.remove('invalid','valid');
  if (inputEl.value.length === + inputEl.getAttribute('data-length')) {
    inputEl.classList.add('valid');
  } else {
    inputEl.classList.add('invalid');
  }
};
inputEl.addEventListener('blur', inputValidation);
