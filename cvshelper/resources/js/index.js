$(function(){

$("div.option").on('click',function(){
    var opt = $(this).html();
    var bar = ".barcode" + opt;
    showCode(bar);
})

function showCode(bar){
    if (bar !== "SA"){}
    setTimeout(function(){
        $('div.option').show();
        $(bar).toggle();
    },500);
    $(bar).toggle();
    $('div.option').hide();
}

})