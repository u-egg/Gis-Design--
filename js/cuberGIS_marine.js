// sidesection_nav_acodian_menu
$(".left_side_que").click(function() {
    $(this).next(".left_side_anw").stop().slideToggle(300);
    $(this).toggleClass('on').siblings().removeClass('on');
    if ($('.img_on').css('display') == 'block') {
        $(".img_on").css("display", "none")
        $(".img_off").css("display", "block")
    } 
    else {
        $(".img_on").css("display", "block")
        $(".img_off").css("display", "none")
    }
});

$(".left_side_que2").click(function() {
    $(this).next(".left_side_anw2").stop().slideToggle(300);
    $(this).toggleClass('on').siblings().removeClass('on');
    if ($('.img_on2').css('display') == 'block') {
        $(".img_on2").css("display", "none")
        $(".img_off2").css("display", "block")
    } 
    else {
        $(".img_on2").css("display", "block")
        $(".img_off2").css("display", "none")
    }
});

$(".left_side_que3").click(function() {
    $(this).next(".left_side_anw3").stop().slideToggle(300);
    $(this).toggleClass('on').siblings().removeClass('on');
    if ($('.img_on3').css('display') == 'block') {
        $(".img_on3").css("display", "none")
        $(".img_off3").css("display", "block")
    } 
    else {
        $(".img_on3").css("display", "block")
        $(".img_off3").css("display", "none")
    }
});

$(".left_side_que4").click(function() {
    $(this).next(".left_side_anw4").stop().slideToggle(300);
    $(this).toggleClass('on').siblings().removeClass('on');
    if ($('.img_on4').css('display') == 'block') {
        $(".img_on4").css("display", "none")
        $(".img_off4").css("display", "block")
    } 
    else {
        $(".img_on4").css("display", "block")
        $(".img_off4").css("display", "none")
    }
});

// sidesection_on/off
function sied_section_slide(){
    if ($('#left_slide_section').css('width') == '350px') {
        $("#left_slide_section").css("width", "0")
        $("#map_section").css("width", "100vw")
        $(".side_nav_close").css("left", "-1px")
        $(".side_nav_open").css("left", "-1px")
        setTimeout(function() {
            $(".side_nav_close").css("display", "none")
            $(".side_nav_open").css("display", "block")
          }, 250);
    } 
    else {
        $("#left_slide_section").css("width", "350px")
        $("#map_section").css("width", "calc(100vw - 350px)")
        $(".side_nav_close").css("left", "345px")
        $(".side_nav_open").css("left", "345px")
        setTimeout(function() {
            $(".side_nav_close").css("display", "block")
            $(".side_nav_open").css("display", "none")
          }, 250);
    }

}

