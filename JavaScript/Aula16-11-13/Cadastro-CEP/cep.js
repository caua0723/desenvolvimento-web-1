$(function () {
    const $campos = $("#rua, #bairro, #cidade, #uf");
    let ultimoCep = "";

    function mensagem(texto, classe) {
        $("#msg")
            .removeClass("text-danger text-success text-muted")
            .addClass(classe)
            .text(texto);
    }

    function erro(texto) {
        console.log("erro() ->", texto, "| ultimoCep zerado");
        $campos.val("").prop("disabled", true);
        mensagem(texto, "text-danger");
        ultimoCep = "";
    }

    async function buscarCep() {
        const cep = $("#cep").val().replace(/\D/g, "");
        console.log("buscarCep | cep:", cep, "| ultimoCep:", ultimoCep);

        if (cep.length !== 8) {
            erro("CEP inválido: informe 8 dígitos.");
            return;
        }
        if (cep === ultimoCep) return;
        ultimoCep = cep;

        mensagem("Buscando...", "text-muted");

        try {
            const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
            if (!response.ok) throw new Error("CEP inválido.");

            const dados = await response.json();

            if (cep !== ultimoCep) return;

            if (dados.erro) {
                erro("CEP não encontrado.");
                ultimoCep = cep;
                return;
            }

            $("#rua").val(dados.logradouro);
            $("#bairro").val(dados.bairro);
            $("#cidade").val(dados.localidade);
            $("#uf").val(dados.uf);
            $campos.prop("disabled", false);
            mensagem("Endereço encontrado.", "text-success");

            $("#numero").val("").focus();
        } catch (e) {
            erro(e.name === "TypeError"
                ? "Sem conexão. Verifique sua internet e tente de novo."
                : e.message);
        }
    }

    $("#cep").on("change", buscarCep);

    $("#cep").on("keydown", function (event) {
        if (event.key === "Enter") {
            event.preventDefault();
            buscarCep();
        }
    });

    $("#cep").on("input", function () {
        if ($(this).val().replace(/\D/g, "").length === 8) buscarCep();
    });
});