const checkbox = document.querySelector("input[name=theme]");
const body = document.querySelector("body");

checkbox.addEventListener("change", ({ target }) => {
    target.checked ? body.classList.add("dark") : body.classList.remove("dark");
});
