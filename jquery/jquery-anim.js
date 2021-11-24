$(document).ready(function(){

    $('.box').hide();

    $(window).scroll(function(){
        if($(this).scrollTop()>0){
            $('.box')fadeIn();
        }else{
            $('.box').fadeOut();
        }
    });
});