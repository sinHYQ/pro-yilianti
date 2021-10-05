// 导航栏部分
$(".nav li:gt(0)").hover(function(){
    $(".navBg").css($(this).position());
},function(){
    $(".navBg").css($(this).position());
})
$(".nav li:gt(0)").click(function(){
    $(".navBg").css($(this).position());
})
// 当页面滚动的时候，导航栏缩小，背景色变化，且固定
$(window).scroll(function(){
    if($(this).scrollTop()>1){
        $(".navbar").addClass("scrollNavbar");
        $(".pull-left").addClass("scrollLogo");
        $(".nav").addClass("scrollNav");
    }
    else{
        $(".navbar").removeClass("scrollNavbar");
        $(".pull-left").removeClass("scrollLogo");
         $(".nav").removeClass("scrollNav");
    }
})
// 观看视频
$(".video1").click(function(){
    $(".video-bg").css("display", "block");
    $(".video-close").css('display','block');
    $(".video-container").css('display','block');
})
$(".video-close").click(function(){
    $(".video-bg").css("display", "none");
    $(this).css("display", "none");
    $(".video-container").css("display", "none");
})