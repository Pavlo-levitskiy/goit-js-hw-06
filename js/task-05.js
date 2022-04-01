const refs = {
    input: document.querySelector("#name-input"),
    output: document.querySelector("#name-output"),
};
    

refs.input.addEventListener("input", (event) => {
    if (event.currentTarget.value) {
        refs.output.textContent = event.currentTarget.value;
    } else {
        refs.output.textContent = "Anonymous";
    }
});