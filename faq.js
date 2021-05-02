$(".faq-item").on("click", function(){
    var display = $(this).children(".answers").css("display");

    $(".answers").delay(2000).hide("slow","swing");
    $(".questions").css("font-weight", "normal");
    $(this).children(".questions").css("font-weight", "bold");

    if(display === "none"){
        $(this).children(".answers").delay(2000).show("slow","swing");
    }else{
        $(this).children(".answers").delay(2000).hide("slow","swing");
        $(".questions").css("font-weight", "normal");
    }
});