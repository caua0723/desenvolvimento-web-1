const lampada = document.querySelector("#lampada");
const legenda = document.querySelector("#legenda");

new Image().src = "img/lampada-acesa.png";

lampada.addEventListener("mouseover", () => {
    document.body.classList.add("acesa");
    lampada.src = "img/lampada-acesa.png";
    legenda.textContent = "Lâmpada acesa";
});

lampada.addEventListener("mouseout", () => {
    document.body.classList.remove("acesa");
    lampada.src = "img/lampada.png";
    legenda.textContent = "Lâmpada apagada";
});
