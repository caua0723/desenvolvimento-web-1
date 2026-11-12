const lampada = document.querySelector("#lampada");
const legenda = document.querySelector("#legenda");

// Carrega a imagem da lâmpada acesa antes, para não piscar no primeiro hover
new Image().src = "img/lampada-acesa.webp";

// Mouse sobre a lâmpada: acende
lampada.addEventListener("mouseover", () => {
    document.body.classList.add("acesa");
    lampada.src = "img/lampada-acesa.webp";
    legenda.textContent = "Lâmpada acesa";
});

// Mouse sai de cima da lâmpada: apaga de novo
lampada.addEventListener("mouseout", () => {
    document.body.classList.remove("acesa");
    lampada.src = "img/lampada.webp";
    legenda.textContent = "Lâmpada apagada";
});