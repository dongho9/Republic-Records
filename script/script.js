$(document).ready(function(){
    $('.animate').scrolla({
        mobile:true, //모바일 버전시 활성화
        once:false //스크롤시 애니메이션 반복 실행
    })
})

$(document).ready(function(){
    $('.btn_box').mouseenter(function(){
        $('.va1').stop().animate({"left":"5px", "top":"5px"},200);
    })
    $('.btn_box').mouseleave(function(){
        $('.va1').stop().animate({"left":"0px", "top":"0px"},100);
    })

    $('i.fa-arrow-left-long').mouseenter(function(){
        $(this).stop().animate({"left":"35%"},300);
    })
    $('i.fa-arrow-right-long').mouseenter(function(){
        $(this).stop().animate({"right":"-5%"},300);
    })
    $('i.fa-arrow-left-long').mouseleave(function(){
        $(this).stop().animate({"left":"40%"},300);
    })
    $('i.fa-arrow-right-long').mouseleave(function(){
        $(this).stop().animate({"right":"0%"},300);
    })
    $(window).scroll(function() {
    var scrollPosition = $(this).scrollTop(); // 현재 스크롤 위치

    // 스크롤 위치가 100px 이상이면 gnb에 배경 추가
    if (scrollPosition > 200) {
        $("header").css("background", "#000"); // 배경색 및 투명도 설정
    }else{
        $("header").css("background","none");
    }
});
})
