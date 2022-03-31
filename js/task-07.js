const refs = {
  controlInput: document.querySelector("#font-size-control"),
  span: document.querySelector("#text"),
  
};

refs.controlInput.addEventListener("input", () => {
  const size = refs.controlInput.value;
  refs.span.style.fontSize = `${size}px`;
});
