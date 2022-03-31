const refs = {
    input: document.querySelector("#name-input"),
    output: document.querySelector("#name-output"),
};
    

refs.input.addEventListener("input", () => {
    if (refs.input.value) {
        refs.output.textContent = refs.input.value;
    } else {
        refs.output.textContent = "Anonymous";
    }
});