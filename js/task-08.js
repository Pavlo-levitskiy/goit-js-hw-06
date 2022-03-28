
const form = document.querySelector('.login-form');

form.addEventListener('submit', onFormSubmit);
function onFormSubmit(event) {
  event.preventDefault();
  const formElement = event.currentTarget.elements;
  const email = formElement.email.value;
  const password = formElement.password.value;
  const formData = { email, password };
  if (email === '' || password === '') {
    alert("Всі поля повинні бути заповнені.");
  } else {
    console.log(formData);
  }

  form.reset();
}