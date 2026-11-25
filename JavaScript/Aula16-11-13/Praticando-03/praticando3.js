$(function () {
    let contador = 0;

    $("input[name='lado']").on("change", function () {
        $("#area").toggleClass("text-end", $("#ladoDireito").is(":checked"));
    });

    $("#addParagrafo").on("click", function () {
        contador++;
        $("#paragrafos").append(
            $("<p class='small mb-1'>").text(
                "#" + contador + " - Lorem ipsum dolor sit amet, consectetur adipisicing elit."
            )
        );
    });

    $("#remPrimeiro").on("click", function () {
        $("#paragrafos p").first().remove();
    });

    $("#remUltimo").on("click", function () {
        $("#paragrafos p").last().remove();
    });

    $("#remParagrafos").on("click", function () {
        $("#paragrafos").empty();
    });

    // Imagens
    $("#addImagem").on("click", function () {
        $("#imagens").append(
            $("<img class='m-1 rounded' width='80'>")
                .attr({ src: "img/gatinho.jpg", alt: "Gatinho" })
        );
    });

    $("#remImagem").on("click", function () {
        $("#imagens img").last().remove();
    });

    $("#remImagens").on("click", function () {
        $("#imagens").empty();
    });
});