// ======================== menu =====================
let menu = $(".menu").outerWidth();
$(".menu").css("left", `-${menu}px`);
$("#open").on("click", function() {
    $(".menu").animate({ left: "0px" }, 700);
    $(".layout").animate({ marginLeft: `${menu}px` }, 700)
});
$("#close").on("click", function() {
    $(".menu").animate({ left: `-${menu}px` }, 700);
    $(".layout").animate({ marginLeft: `0px` }, 700)
});

$(".nav-linkGo li a").on("click", function() {
    let href = $(this).attr("href"),
        offset = $(href).offset().top;
    $("html, body").animate({ scrollTop: offset }, 1000);
    $(this).parent().addClass("active");
    $(this).parent().siblings().not($(this)).removeClass("active");
});
// let offsetTab = $("#tab-section").offset().top;
// let offsetEve = $("#Event-day").offset().top;
// let offsetForm = $("#form-section").offset().top;
// $(window).scroll(function() {
//         let windowScroll = $(window).scrollTop();
//         if (windowScroll < offsetTab) {
//             $(".nav-linkGo li").first().addClass("active");
//             $(".nav-linkGo li").not($(".nav-linkGo li").first()).removeClass("active");
//         } else {
//             $(".nav-linkGo li").first().removeClass("active");
//         }
//         if (windowScroll > offsetTab) {
//             $(".nav-linkGo li").first().next().addClass("active");
//             $(".nav-linkGo li").not($(".nav-linkGo li").first().next()).removeClass("active");
//         } else {
//             $(".nav-linkGo li").first().next().removeClass("active")
//         }
//         if (windowScroll > offsetEve) {
//             $(".nav-linkGo li").first().next().next().addClass("active");
//             $(".nav-linkGo li").not($(".nav-linkGo li").first().next().next()).removeClass("active");
//         } else {
//             $(".nav-linkGo li").first().next().next().removeClass("active")
//         }
//         if (windowScroll > offsetForm) {
//             $(".nav-linkGo li").first().next().next().next().addClass("active");
//             $(".nav-linkGo li").not($(".nav-linkGo li").first().next().next().next()).removeClass("active");
//         } else {
//             $(".nav-linkGo li").first().next().next().next().removeClass("active")
//         }
//     });
// ======================= f menu ======================
// ==================== tabs ===========================
$(".headT").on("click", function() {
    $(this).next().slideToggle(200);
    $(".tab-section p").not($(this).next()).slideUp(200);
});
// ========================== f tabs =================
// ========================== count =================
function countdown() {
    let day = new Date()
    let evDate = new Date(2021, 05, 20);
    let timeNow = day.getTime();
    let evTime = evDate.getTime();
    let remTime = evTime - timeNow;
    let sec = Math.floor(remTime / 1000);
    let mnt = Math.floor(sec / 60);
    let hour = Math.floor(mnt / 60);
    let dayM = Math.floor(hour / 24) - 30;
    hour %= 24;
    mnt %= 60;
    sec %= 60;
    $("#days").html(`${dayM} D`);
    $("#hours").html(`${hour} H`);
    $("#minutes").html(`${mnt} M`);
    $("#seconds").html(`${sec} S`);
}
setInterval(countdown, 1000);
// ========================== F count =================
// ========================== form  =================
$("#textAr").keyup(function() {
    let textAr = $("#textAr").val().length;
    $("#num-length").html(100 - textAr);

    console.log(typeof(textAr))
    if (textAr > 100) {
        $("#btnSend").attr("disabled", "true");
        $("#btnSend").css("cursor", "no-drop")
    } else {
        $("#btnSend").removeAttr("disabled");
        $("#btnSend").css("cursor", "pointer")
    }

});
// ========================== F form  =================