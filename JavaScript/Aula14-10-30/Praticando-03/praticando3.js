const caixas = document.querySelectorAll(".caixa");
const botaoReset = document.querySelector("#reset");
const preview = document.querySelector("#preview");

let corFixada = "white";

caixas.forEach(function (caixa) {
    const cor = caixa.getAttribute("data-cor");

    caixa.addEventListener("click", function () {
        corFixada = cor;
        document.body.style.backgroundColor = cor;
    });

    caixa.addEventListener("mouseover", function () {
        document.body.style.backgroundColor = cor;
        preview.style.display = "block";
    });

    caixa.addEventListener("mouseout", function () {
        document.body.style.backgroundColor = corFixada;
        preview.style.display = "none";
    });
});

botaoReset.addEventListener("click", function () {
    corFixada = "white";
    document.body.style.backgroundColor = "white";
});
