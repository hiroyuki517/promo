"use strict";

$(function(){
    let navP = $("#nav").offset().top;
    let windowWidth = $(window).width();
    const maxWidth = 800;

    //タブで各セクションを表示
    $('#article section[id != "news"]').hide();
    $("#nav a").click(function(){
        $("#article section").hide();
        $($(this).attr("href")).show();

        $(".current").removeClass("current");
        $(this).addClass("current");

        $("html, body").animate({scrollTop: 0}, 300);

        return false;
    });

    //レスポンシブ対応
    //幅801px以上のとき、メニューバーを固定
    //幅800px以下のとき、タブメニューの切り替え
    if(windowWidth > maxWidth) {
        $(window).scroll(function(){
            if($(window).scrollTop() > navP){
                $("#nav").css("position", "fixed");
            } else {
                $("#nav").css("position", "static");
            }
        });
    } else {
        $(".spdis").click(function(){
            if($(this).hasClass("spclose")) {
                $("#nav").slideDown(100);
                $(this).removeClass("spclose");
                $(this).css("background-color", "#aaa");
                $("#nav a").click(function(){
                    $("#nav").hide();
                    $(".spdis").addClass("spclose");
                    $(".spdis").css("background-color", "rgba(1,1,1,0)");
                });
                $("#article").click(function(){
                    $("#nav").hide();
                    $(".spdis").addClass("spclose");
                    $(".spdis").css("background-color", "rgba(1,1,1,0)");
                });
            } else {
                $("#nav").slideUp(100);
                $(this).addClass("spclose");
                $(this).css("background-color", "rgba(1,1,1,0)");
            }
        });
    }

    //モーダル表示
    $(".b-left a").click(function(){
        $("body").append('<div id="back-modal">' );
        $("#back-modal").append('<div id="photo">');
        $("#back-modal, #photo").hide();

        $("#photo").html("<img>");
        $("#photo img").attr("src", $(this).attr("href"));
        $("#photo img").attr("alt", "PHOTO");

        $("#back-modal, #photo").fadeIn(300);

        $("#back-modal").click(function(){
            $(this).fadeOut(function(){
                $(this).remove();
            });
            $("#photo").fadeOut(function(){
                $("#photo").remove();
            });
        });
        return false;
    });

    $("#resetbtn").click(function(){
        if(confirm("入力情報を消去します。よろしいですか？")){
            return true;
        } else {
            return false;
        }
    });
});