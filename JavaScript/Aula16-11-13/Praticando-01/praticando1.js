$(function () {
    $("#mostrar").on("click", function () {
        $("#meuDiv").removeClass("d-none");
    });

    $("#esconder").on("click", function () {
        $("#meuDiv").addClass("d-none");
    });

    $("#alternar").on("click", function () {
        $("#meuDiv").toggleClass("d-none");
    });
});