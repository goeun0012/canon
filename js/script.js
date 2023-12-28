$(function(){

    /* 마이캐논 영역 */
    $(".util_myca").hover(function(){
        $(".my").stop().slideDown();
    }, function(){
        $(".my").stop().slideUp();
    })//hover

    /* 서브메뉴영역 */
    $(".gnb_p").hover(function(){
        $(".d_wrap").stop().animate({height:"350px", padding: "15px 15px 30px"}, "fast")
    }, function(){
        $(".d_wrap").stop().animate({height:"0", padding: "0"}, "fast")
    })

    /* main_visual 영역 */
    $(".move").slick({
        autoplay: true,
        autoplaySpeed: 3000,
        dots: true,
        arrows: false
    })// move slick

    $(".main_visual .stop").click(function(){
        if($(this).hasClass("on") == true){
            $(this).removeClass("on");
            $(".move").slick("slickPlay");
        }else{
            $(this).addClass("on");
            $(".move").slick("slickPause");
        }// if
    })// .main_visual .stop click

    /* main 영역 */
    $(".photo").slick({
        autoplay: true,
        autoplaySpeed: 2000,
        dots: true,
        arrows: false
    })// photo slick

    $(".banner").slick({
        autoplay: true,
        autoplaySpeed: 2000,
        dots: true,
        arrows: false
    })// banner slick

    $(".banner_wrap .b_stop").click(function(){
        if($(this).hasClass("on") == true){
            $(this).removeClass("on");
            $(".banner").slick("slickPlay");
        }else{
            $(this).addClass("on");
            $(".banner").slick("slickPause");
        }// if
    })// .banner_wrap .b_stop click

    $(".viewer").slick({
        autoplay: true,
        autoplaySpeed: 2500,
        dots: true,
        arrows: false
    })// viewer slick

    $(".viewer_wrap .v_stop").click(function(){
        if($(this).hasClass("on") == true){
            $(this).removeClass("on");
            $(".viewer").slick("slickPlay");
        }else{
            $(this).addClass("on");
            $(".viewer").slick("slickPause");
        }// if
    })// .viewer_wrap .v_stop click

    $(".store").slick({
        autoplay: false,
        slidesToShow: 2,
        slidesToScroll: 2,
        dots: true,
        arrows: false
    })// store slick

    $(".e_store .e_play").click(function(){
        if($(this).hasClass("on") == true){
            $(this).removeClass("on");
            $(".store").slick("slickPause");
        }else{
            $(this).addClass("on");
            $(".store").slick("slickPlay");
        }// if
    })// .e_store .e_play click

    $(".notice").slick({
        autoplay: true,
        autoplaySpeed: 4000,
        vertical: true,
        dots: false,
        arrows: true
    })// notice slick

    $(".main_4 .n_stop").click(function(){
        if($(this).hasClass("on") == true){
            $(this).removeClass("on");
            $(".notice").slick("slickPlay");
        }else{
            $(this).addClass("on");
            $(".notice").slick("slickPause");
        }// if
    })// .main_4 .n_stop click

})//jquery