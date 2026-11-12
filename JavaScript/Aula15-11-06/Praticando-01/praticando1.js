const meuDiv = document.querySelector("#meuDiv");

document.querySelector("#mostrar").addEventListener("click", () => {
    meuDiv.classList.remove("d-none");
});

document.querySelector("#esconder").addEventListener("click", () => {
    meuDiv.classList.add("d-none");
});