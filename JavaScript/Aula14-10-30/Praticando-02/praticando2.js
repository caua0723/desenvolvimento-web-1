const campoResultado = document.querySelector("#resultado");
const botoes = document.querySelectorAll("[data-operacao]");

botoes.forEach(function (botao) {
    botao.addEventListener("click", function () {
        const texto1 = document.querySelector("#numero1").value;
        const texto2 = document.querySelector("#numero2").value;

        const numero1 = Number(texto1);
        const numero2 = Number(texto2);

        if (texto1.trim() === "" || texto2.trim() === "" || isNaN(numero1) || isNaN(numero2)) {
            campoResultado.value = "Preencha os dois números";
            return;
        }

        const operacao = botao.getAttribute("data-operacao");
        let resultado;

        if (operacao === "soma") {
            resultado = numero1 + numero2;
        } else if (operacao === "subtracao") {
            resultado = numero1 - numero2;
        } else if (operacao === "multiplicacao") {
            resultado = numero1 * numero2;
        } else if (operacao === "divisao") {
            if (numero2 === 0) {            // evita Infinity
                campoResultado.value = "Divisão por zero";
                return;
            }
            resultado = numero1 / numero2;
        }

        campoResultado.value = resultado;
    });
});
