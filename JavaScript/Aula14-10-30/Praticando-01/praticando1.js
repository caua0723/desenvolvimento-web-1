let nome = prompt("Qual é o seu nome?");

if (nome === null || nome.trim() === "") {
    nome = "visitante";
}

document.querySelector("#nome").textContent = nome;

const botaoAdicionar = document.querySelector("#adicionar");
const botaoRemover = document.querySelector("#remover");
const divTextos = document.querySelector("#textos");

botaoAdicionar.addEventListener("click", function () {
    const paragrafo = document.createElement("p");                 // 1. cria
    paragrafo.textContent = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. " +
        "Doloremque, facere exercitationem saepe ex ullam neque laboriosam " +
        "officiis eum odio possimus ipsum est harum ut amet.";     // 2. preenche
    divTextos.append(paragrafo);                                   // 3. insere
});

botaoRemover.addEventListener("click", function () {
    const paragrafos = document.querySelectorAll("#textos p");
    paragrafos.forEach(function (paragrafo) {
        paragrafo.remove();
    });
});
