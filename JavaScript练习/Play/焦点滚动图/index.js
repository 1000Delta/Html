var left = $('.left');
var right = $('.right');
var list = $('.list');
left.click(function() {
    if(list.css("left")=="0px")
    {
        list.animate({
            left: "-5000px"
        },0)
    }
    list.animate({
        left: "+=1000px"
    });
});
right.click(function() {
    if(list.css("left")=="-6000px")
    {
        list.animate({
            left: "0px"
        },0)
    }
    list.animate({
        left: "-=1000px"
    });
})