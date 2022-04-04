const inputEl = document.querySelector('input[data-length="6"]');

const inputValidation = (event) => {
  event.currentTarget.classList.remove('invalid','valid');
  if (event.currentTarget.value.length === + inputEl.getAttribute('data-length')) {
    event.currentTarget.classList.add('valid');
  } else {
    event.currentTarget.classList.add('invalid');
  }
};
inputEl.addEventListener('blur', inputValidation);
