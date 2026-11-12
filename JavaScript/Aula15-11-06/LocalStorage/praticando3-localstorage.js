const caixas = document.querySelectorAll(".caixa");
const botaoReset = document.querySelector("#reset");
const preview = document.querySelector("#preview");
const mensagem = document.querySelector("#mensagem");

// Ao abrir a página: usa a cor guardada no LocalStorage (se não houver, "white")
let corFixada = localStorage.getItem("corFundo") ?? "white";
document.body.style.backgroundColor = corFixada;

caixas.forEach((caixa) => {
    const cor = caixa.getAttribute("data-cor");

    caixa.addEventListener("click", () => {
        corFixada = cor;
        document.body.style.backgroundColor = cor;
        localStorage.setItem("corFundo", cor);
        mensagem.textContent = `Cor de fundo "${cor}" salva no LocalStorage!`;
    });

    caixa.addEventListener("mouseover", () => {
        document.body.style.backgroundColor = cor;
        preview.style.display = "block";
    });

    caixa.addEventListener("mouseout", () => {
        document.body.style.backgroundColor = corFixada;
        preview.style.display = "none";
    });
});

botaoReset.addEventListener("click", () => {
    corFixada = "white";
    document.body.style.backgroundColor = "white";
    localStorage.removeItem("corFundo");
    mensagem.textContent = "Cor salva removida do LocalStorage.";
});