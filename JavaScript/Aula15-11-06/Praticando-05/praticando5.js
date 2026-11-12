const quadrados = document.querySelectorAll(".quadrado");
const PASSO = 10;
let selecionado = null;

const lerMargem = (elemento, propriedade) => {
    const valor = parseInt(elemento.style[propriedade]);
    return isNaN(valor) ? 0 : valor;
};

quadrados.forEach((quadrado) => {
    quadrado.addEventListener("click", () => {
        if (quadrado === selecionado) {
            quadrado.classList.remove("selecionado");
            quadrado.style.marginTop = "";
            quadrado.style.marginLeft = "";
            selecionado = null;
        } else if (selecionado !== null) {
            alert("Já existe um quadrado selecionado! Clique nele novamente para deselecioná-lo.");
        } else {
            selecionado = quadrado;
            quadrado.classList.add("selecionado");
        }
    });
});

document.addEventListener("keydown", (evento) => {
    if (selecionado === null) return;

    let topo = lerMargem(selecionado, "marginTop");
    let esquerda = lerMargem(selecionado, "marginLeft");

    if (evento.code === "KeyW") topo -= PASSO;
    else if (evento.code === "KeyS") topo += PASSO;
    else if (evento.code === "KeyA") esquerda -= PASSO;
    else if (evento.code === "KeyD") esquerda += PASSO;
    else return;

    selecionado.style.marginTop = `${topo}px`;
    selecionado.style.marginLeft = `${esquerda}px`;
});