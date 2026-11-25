$(function () {
    let corFixada = "white";

    $(".caixa").hover(
        function () {
            $("body").css("background-color", $(this).data("cor"));
            $("#preview").show();
        },
        function () {
            $("body").css("background-color", corFixada);
            $("#preview").hide();
        }
    );

    $(".caixa").on("click", function () {
        corFixada = $(this).data("cor");
        $("body").css("background-color", corFixada);
    });

    $("#reset").on("click", function () {
        corFixada = "white";
        $("body").css("background-color", "white");
    });
});