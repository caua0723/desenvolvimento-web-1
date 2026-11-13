const area = document.querySelector("#area");
const paragrafos = document.querySelector("#paragrafos");
const imagens = document.querySelector("#imagens");
let contador = 0;

const atualizarLado = () => {
    const direito = document.querySelector("#ladoDireito").checked;
    area.classList.toggle("text-end", direito);
};

document.querySelectorAll("input[name='lado']").forEach((radio) => {
    radio.addEventListener("change", atualizarLado);
});

document.querySelector("#addParagrafo").addEventListener("click", () => {
    contador++;
    const p = document.createElement("p");
    p.className = "small mb-1";
    p.textContent = `#${contador} - Lorem ipsum dolor sit amet, consectetur adipisicing elit.`;
    paragrafos.append(p);
});

document.querySelector("#remPrimeiro").addEventListener("click", () => {
    paragrafos.firstElementChild?.remove();
});

document.querySelector("#remUltimo").addEventListener("click", () => {
    paragrafos.lastElementChild?.remove();
});

document.querySelector("#remParagrafos").addEventListener("click", () => {
    paragrafos.innerHTML = "";
});

document.querySelector("#addImagem").addEventListener("click", () => {
    const img = document.createElement("img");
    img.src = "img/gatinho.jpg";
    img.alt = "Gatinho";
    img.width = 80;
    img.className = "m-1 rounded";
    imagens.append(img);
});

document.querySelector("#remImagem").addEventListener("click", () => {
    imagens.lastElementChild?.remove();
});

document.querySelector("#remImagens").addEventListener("click", () => {
    imagens.innerHTML = "";
});
