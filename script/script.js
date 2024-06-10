$(document).ready(function(){
    $('.animate').scrolla({
        mobile: true, // 모바일 버전 활성화
        once: false // 스크롤시 애니메이션 반복 실행
    });

    var lastScrollTop = 0; // 이전 스크롤 위치 저장

    $(window).scroll(function() {
        var currentScrollTop = $(this).scrollTop(); // 현재 스크롤 위치
        
        if (currentScrollTop < lastScrollTop) {
            // 스크롤을 위로 올리면 .animate 클래스 제거
            $('.ar').removeClass('animate');
        }
        else{
            $('.ar').removeClass('animate');
        }

        // 현재 스크롤 위치를 이전 스크롤 위치로 업데이트
        lastScrollTop = currentScrollTop;
    });
});


$(document).ready(function(){
    $('.btn_box').mouseenter(function(){
        $(this).find('.va1').stop().animate({"left":"5px", "top":"5px"},200);
    })
    $('.btn_box').mouseleave(function(){
        $('.btn_box > .va1').stop().animate({"left":"0px", "top":"0px"},100);
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

$(document).ready(function(){
    $('.bars').click(function(){
        $('.gnb').toggleClass('gnb_open');
        $('header, .gnb').toggleClass('header_bg');
        $('.bars span:first-child').toggleClass('bars_rotate01');
        $('.bars span:last-child').toggleClass('bars_rotate02');
        $('.bars span:nth-child(2)').toggleClass('bars_hide');
    })
})

$(document).ready(function(){
    $('.marquee_con').mouseenter(function(){
        $('.marquee').css({'animation-play-state':'paused'})
    })
    $('.marquee_con').mouseleave(function(){
        $('.marquee').css({animation : 'animate-marquee 20s infinite linear'})
    })
})