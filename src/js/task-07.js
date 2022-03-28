const fontSaze = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

fontSaze.addEventListener("input", () => {
  const size = fontSaze.value;
  text.style.fontSize = `${size}px`;
});