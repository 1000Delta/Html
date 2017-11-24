$(document).ready(function(){ 
    $("#information").hide();
    $("#cover").hide();
    $("#cover").click(function(){
        $(this).hide();
        $("#information").hide();
    });

    $("i[id=esc]").click(function() {
        $("#cover").hide();
        $("#information").hide();
    })

    $("img[id=m1], div[id=m1]").click(function() {
        $("#information").show();
        $("#cover").show();

        $("#nowName").text() = $("img[id=m1]~.name").text();
        $("#nowInfo").text() = $("img[id=m1]~.describe").text();

    });
});