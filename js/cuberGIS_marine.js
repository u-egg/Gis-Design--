//kakao map api
var container = document.getElementById('map');             //지도를 담을 영역의 DOM 레퍼런스
var options = {                                             //지도를 생성할 때 필요한 기본 옵션
    center: new kakao.maps.LatLng(36.6424341, 127.4890319),   //지도의 중심좌표.
    level: 11                                                //지도의 레벨(확대, 축소 정도)
};

var map = new kakao.maps.Map(container, options);           //지도 생성 및 객체 리턴

// 마커 생성
var markerPosition = new kakao.maps.LatLng(36.6424341, 127.4890319);


// 마커를 생성합니다
var marker = new kakao.maps.Marker({
    position: markerPosition
});

// 마커가 지도 위에 표시되도록 설정합니다
marker.setMap(map);

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
        $("#map").css("width", "100vw")
        $(".side_nav_close").css("left", "-1px")
        $(".side_nav_open").css("left", "-1px")
        $("#left_side_switching").css("display", "none")

        setTimeout(function() {
            $(".side_nav_close").css("display", "none")
            $(".side_nav_open").css("display", "block")
          }, 250);
    } 
    else {
        $("#left_slide_section").css("width", "350px")
        $("#map").css("width", "calc(100vw - 350px)")
        $(".side_nav_close").css("left", "345px")
        $(".side_nav_open").css("left", "345px")
        $("#left_side_switching").css("display", "block")

        setTimeout(function() {
            $(".side_nav_close").css("display", "block")
            $(".side_nav_open").css("display", "none")
          }, 250);
    }

}

// left_side_swap
function sideswap_layer(){
    $(".select_menu_search").css("background", "#e7ebf3")
    $(".select_menu_search").css("color", "#333")
    $(".select_menu_layer").css("background", "#387ee7")
    $(".select_menu_layer").css("color", "#fff")
    $("#left_side_switching").css("display", "block") // 임의설정 ( 값 넣을예정이라면 수정필요 )

}

function sideswap_search(){
    $(".select_menu_layer").css("background", "#e7ebf3")
    $(".select_menu_layer").css("color", "#333")
    $(".select_menu_search").css("background", "#387ee7")
    $(".select_menu_search").css("color", "#fff")
    $("#left_side_switching").css("display", "none")  // 임의설정 ( 값 넣을예정이라면 수정필요 )

}

// right_side_on
function right_side_on(){
    $("#right_slide_section").css("width", "300px")
    $("#right_text_body").css("display", "block")
}

function right_side_off(){
    $("#right_slide_section").css("width", "0")
    $("#right_text_body").css("display", "none")
}

function allClear(){
    $("#right_slide_section").css("width", "0")
    $("#right_text_body").css("display", "none")
}

//nav_btn_swap
function nav_btn_1(){
    $(".wrap_on").attr("class", "wrap_off")
    $("#nav_btn_1").attr("class", "wrap_on")

    $(".part_1").css("display", "block")
    $(".part_2").css("display", "none")
    $(".part_3").css("display", "none")
    $(".part_4").css("display", "none")
    $(".part_5").css("display", "none")
    $(".part_6").css("display", "none")
    $(".part_7").css("display", "none")
    $(".part_8").css("display", "none")
}

function nav_btn_2(){
    $(".wrap_on").attr("class", "wrap_off")
    $("#nav_btn_2").attr("class", "wrap_on")

    $(".part_1").css("display", "none")
    $(".part_2").css("display", "block")
    $(".part_3").css("display", "none")
    $(".part_4").css("display", "none")
    $(".part_5").css("display", "none")
    $(".part_6").css("display", "none")
    $(".part_7").css("display", "none")
    $(".part_8").css("display", "none")
}

function nav_btn_3(){
    $(".wrap_on").attr("class", "wrap_off")
    $("#nav_btn_3").attr("class", "wrap_on")

    $(".part_1").css("display", "none")
    $(".part_2").css("display", "none")
    $(".part_3").css("display", "block")
    $(".part_4").css("display", "none")
    $(".part_5").css("display", "none")
    $(".part_6").css("display", "none")
    $(".part_7").css("display", "none")
    $(".part_8").css("display", "none")
}

function nav_btn_4(){
    $(".wrap_on").attr("class", "wrap_off")
    $("#nav_btn_4").attr("class", "wrap_on")

    $(".part_1").css("display", "none")
    $(".part_2").css("display", "none")
    $(".part_3").css("display", "none")
    $(".part_4").css("display", "block")
    $(".part_5").css("display", "none")
    $(".part_6").css("display", "none")
    $(".part_7").css("display", "none")
    $(".part_8").css("display", "none")
}

function nav_btn_5(){
    $(".wrap_on").attr("class", "wrap_off")
    $("#nav_btn_5").attr("class", "wrap_on")

    $(".part_1").css("display", "none")
    $(".part_2").css("display", "none")
    $(".part_3").css("display", "none")
    $(".part_4").css("display", "none")
    $(".part_5").css("display", "block")
    $(".part_6").css("display", "none")
    $(".part_7").css("display", "none")
    $(".part_8").css("display", "none")
}

function nav_btn_6(){
    $(".wrap_on").attr("class", "wrap_off")
    $("#nav_btn_6").attr("class", "wrap_on")

    $(".part_1").css("display", "none")
    $(".part_2").css("display", "none")
    $(".part_3").css("display", "none")
    $(".part_4").css("display", "none")
    $(".part_5").css("display", "none")
    $(".part_6").css("display", "block")
    $(".part_7").css("display", "none")
    $(".part_8").css("display", "none")
}

function nav_btn_7(){
    $(".wrap_on").attr("class", "wrap_off")
    $("#nav_btn_7").attr("class", "wrap_on")

    $(".part_1").css("display", "none")
    $(".part_2").css("display", "none")
    $(".part_3").css("display", "none")
    $(".part_4").css("display", "none")
    $(".part_5").css("display", "none")
    $(".part_6").css("display", "none")
    $(".part_7").css("display", "block")
    $(".part_8").css("display", "none")
}

function nav_btn_8(){
    $(".wrap_on").attr("class", "wrap_off")
    $("#nav_btn_8").attr("class", "wrap_on")

    $(".part_1").css("display", "none")
    $(".part_2").css("display", "none")
    $(".part_3").css("display", "none")
    $(".part_4").css("display", "none")
    $(".part_5").css("display", "none")
    $(".part_6").css("display", "none")
    $(".part_7").css("display", "none")
    $(".part_8").css("display", "block")
}