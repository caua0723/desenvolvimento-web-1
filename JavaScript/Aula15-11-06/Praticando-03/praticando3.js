const campos = document.querySelectorAll("#formulario .form-control, #formulario .form-select");

// Preenchido (não vazio) = verde (.is-valid) | vazio = vermelho (.is-invalid)
const validar = (campo) => {
    const preenchido = campo.value.trim() !== "";
    campo.classList.toggle("is-valid", preenchido);
    campo.classList.toggle("is-invalid", !preenchido);
};

campos.forEach((campo) => {
    validar(campo);
    campo.addEventListener("input", () => validar(campo));
    campo.addEventListener("change", () => validar(campo));
});

document.querySelector("#enviar").addEventListener("click", () => {
    const tudoCerto = [...campos].every((campo) => campo.classList.contains("is-valid"));
    alert(tudoCerto ? "Formulário enviado com sucesso!" : "Preencha todos os campos marcados em vermelho.");
});

document.querySelector("#limpar").addEventListener("click", () => {
    campos.forEach((campo) => {
        campo.value = "";
        validar(campo);
    });
});