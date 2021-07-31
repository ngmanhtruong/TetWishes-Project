// $('.list .item').mouseover(()=>{
//     $('.list .item').css('opacity', .5);
//     $(this).css('opacity', 1);
// })
// $('.list .item').mouseout(function(){
//     $('.list .item').css('opacity', 1);
// })

// document.querySelectorAll(".list .item").forEach((element)=>{
//     element.addEventListener("mouseover",()=>{
//         document.querySelectorAll(".list .item").forEach((element2)=>{
//             element2.style.opacity = 0.5;
//         });
//         element.style.opacity = 1;
//     });
//     element.addEventListener("mouseout", ()=> {
//         element.style.opacity = 1 + "!important";
//     });
// });
$('.list .item').mouseover(function(){
    $('.list .item').css('opacity',.5);
    $(this).css('opacity',1);
});
$('.list .item').mouseout(function(){
    $('.list .item').css('opacity', 1);
});
$(".list .item").click(function (){
    $('html, body').animate({
        scrollTop: $(".list-anchor").offset().top
    }, 1000);
});

$(".play-btn").click(function(){
    // $("#youtube-iframe-player")[0].src += "?autoplay=1";
    // document.querySelector("#youtube-iframe-player").style.zIndex = "3";
    // $('.cover').hide();
});

$('.count.timer').countTo();

$('#binhan,#thinhvuong,#suckhoe').click(function(){
    setTimeout(function(){
        $('.fancybox-toolbar').hide();
    },20);
});