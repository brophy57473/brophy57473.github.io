$(function(){

    $("div.option").on('click',function(){
        var opt = $(this).html();
        
        showCode(opt);
    })

    function showCode(opt){
        console.log(opt);
        var bar = ".barcode" + opt;
        if (opt !== "SA"){
            setTimeout(function(){
            $('div.option').show();
            $(bar).toggle();
            },500);
            $(bar).toggle();
            $('div.option').hide();
        } else if (opt === "SA"){
            setTimeout(function(){
                $('.barcodeL').toggle();   
                $(bar).toggle();
            }, 500);
            setTimeout(function(){
                $('.barcodeL').toggle();
                $('.option').toggle();
            }, 1000);
            $(bar).toggle();
            $(".option").toggle();
        }
    }

})