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


$(window).on('load',function(){
    //scroll Magic
    var controller = new ScrollMagic.Controller();
    //BANNER
    new ScrollMagic.Scene({
        triggerElement: "#banner",
        triggerHook: 0.9,
        offset: 50, // move trigger to center of element
        reverse: false // only do once
    })
    .setClassToggle("section.banner .icon.icon1", "animate")
    .addTo(controller);

    new ScrollMagic.Scene({
        triggerElement: "#banner",
        triggerHook: 0.9,
        offset: 50, // move trigger to center of element
        reverse: false // only do once
    })
    .setClassToggle("section.banner .icon.icon4", "animate")
    .addTo(controller);

    new ScrollMagic.Scene({
        triggerElement: "#banner",
        triggerHook: 0.9,
        offset: 50, // move trigger to center of element
        reverse: false // only do once
    })
    .setClassToggle("section.banner .wrap", "animate")
    .addTo(controller);

    //SECTION 1
    new ScrollMagic.Scene({
        triggerElement: "#section1",
        triggerHook: 0.8,
        offset: 50, // move trigger to center of element
        reverse: false // only do once
    })
    .setClassToggle("section.section1 .wrap h2", "animate")
    .addTo(controller);

    new ScrollMagic.Scene({
        triggerElement: "#section1",
        triggerHook: 0.7,
        offset: 50, // move trigger to center of element
        reverse: false // only do once
    })
    .setClassToggle("section.section1 .wishList .list", "animate")
    .addTo(controller);

    new ScrollMagic.Scene({
        triggerElement: ".list-anchor",
        triggerHook: 0.6,
        offset: 50, // move trigger to center of element
        reverse: false // only do once
    })
    .setClassToggle("section.section1 .content", "animate")
    .addTo(controller);

    new ScrollMagic.Scene({
        triggerElement: ".list-anchor",
        triggerHook: 0.6,
        offset: 50, // move trigger to center of element
        reverse: false // only do once
    })
    .setClassToggle("section.section1 .icon.icon1", "animate")
    .addTo(controller);

    //SECTION2
    new ScrollMagic.Scene({
        triggerElement: ".section2",
        triggerHook: 0.7,
        offset: 50, // move trigger to center of element
        reverse: false // only do once
    })
    .setClassToggle("section.section2 .item.item1", "animate")
    .addTo(controller);

    new ScrollMagic.Scene({
        triggerElement: ".section2",
        triggerHook: 0.7,
        offset: 50, // move trigger to center of element
        reverse: false // only do once
    })
    .setClassToggle("section.section2 .desktop-sm .wrap h3", "animate")
    .addTo(controller);

    new ScrollMagic.Scene({
        triggerElement: ".section2",
        triggerHook: 0.5,
        offset: 50, // move trigger to center of element
        reverse: false // only do once
    })
    .setClassToggle("section.section2 .desktop-md .wrap .hotmom", "animate")
    .addTo(controller);

    new ScrollMagic.Scene({
        triggerElement: ".section2",
        triggerHook: 0.1,
        offset: 50, // move trigger to center of element
        reverse: false // only do once
    })
    .setClassToggle("section.section2 .item.item2", "animate")
    .addTo(controller);

    //SECTION 3
    new ScrollMagic.Scene({
        triggerElement: ".section3",
        triggerHook: 0.8,
        offset: 50, // move trigger to center of element
        reverse: false // only do once
    })
    .setClassToggle("section.section3 .background1", "animate")
    .addTo(controller);

    new ScrollMagic.Scene({
        triggerElement: ".section3",
        triggerHook: 0.8,
        offset: 50, // move trigger to center of element
        reverse: false // only do once
    })
    .setClassToggle("section.section3 .apricot", "animate")
    .addTo(controller);

    new ScrollMagic.Scene({
        triggerElement: ".section3",
        triggerHook: 0.7,
        offset: 50, // move trigger to center of element
        reverse: false // only do once
    })
    .setClassToggle("section.section3 .desktop-md .wrap .first .wrap .block.block1 .img", "animate")
    .addTo(controller);

    new ScrollMagic.Scene({
        triggerElement: ".section3",
        triggerHook: 0.7,
        offset: 50, // move trigger to center of element
        reverse: false // only do once
    })
    .setClassToggle("section.section3 .desktop-md .wrap .first .wrap .block.block2", "animate")
    .addTo(controller);

    new ScrollMagic.Scene({
        triggerElement: ".section3",
        triggerHook: 0.6,
        offset: 50, // move trigger to center of element
        reverse: false // only do once
    })
    .setClassToggle(".text.text1.isPC", "animate")
    .addTo(controller);

    new ScrollMagic.Scene({
        triggerElement: ".section3",
        triggerHook: 0.2,
        offset: 50, // move trigger to center of element
        reverse: false // only do once
    })
    .setClassToggle(".text.text2", "animate")
    .addTo(controller);

    //SECOND
    new ScrollMagic.Scene({
        triggerElement: "section.section3 .desktop-md .wrap .second",
        triggerHook: 0.8,
        offset: 50, // move trigger to center of element
        reverse: false // only do once
    })
    .setClassToggle("section.section3 .desktop-md .wrap .second", "animate")
    .addTo(controller);

    new ScrollMagic.Scene({
        triggerElement: "section.section3 .desktop-md .wrap .second",
        triggerHook: 0.3,
        offset: 50, // move trigger to center of element
        reverse: false // only do once
    })
    .setClassToggle("section.section3 .desktop-md .wrap .last .txt", "animate")
    .addTo(controller);

    //SECTION 4
    new ScrollMagic.Scene({
        triggerElement: ".section4",
        triggerHook: 0.8,
        offset: 50, // move trigger to center of element
        reverse: false // only do once
    })
    .setClassToggle("section.section4 .desktop-md .wrap .video-block", "animate")
    .addTo(controller);

    new ScrollMagic.Scene({
        triggerElement: "section.section4 .wrap .text",
        triggerHook: 0.8,
        offset: 50, // move trigger to center of element
        reverse: false // only do once
    })
    .setClassToggle("section.section4 .wrap .text", "animate")
    .addTo(controller);

    //SECTION 5
    new ScrollMagic.Scene({
        triggerElement: ".lower",
        triggerHook: 0.8,
        offset: 50, // move trigger to center of element
        reverse: false // only do once
    })
    .setClassToggle("section.section5 .item.item1", "animate")
    .addTo(controller);

    new ScrollMagic.Scene({
        triggerElement: ".lower",
        triggerHook: 0.8,
        offset: 50, // move trigger to center of element
        reverse: false // only do once
    })
    .setClassToggle("section.section5 .item.item2", "animate")
    .addTo(controller);

    new ScrollMagic.Scene({
        triggerElement: ".lower",
        triggerHook: 0.8,
        offset: 50, // move trigger to center of element
        reverse: false // only do once
    })
    .setClassToggle("section.section5 .lower .wrap .block.block1", "animate")
    .addTo(controller);

    new ScrollMagic.Scene({
        triggerElement: ".lower",
        triggerHook: 0.8,
        offset: 50, // move trigger to center of element
        reverse: false // only do once
    })
    .setClassToggle("section.section5 .lower .wrap .block.block2", "animate")
    .addTo(controller);

    //SECTION 6
    new ScrollMagic.Scene({
        triggerElement: ".section6",
        triggerHook: 0.9,
        offset: 50, // move trigger to center of element
        reverse: false // only do once
    })
    .setClassToggle("section.section6 .desktop-w .wrap .text", "animate")
    .addTo(controller);

    new ScrollMagic.Scene({
        triggerElement: ".section6",
        triggerHook: 0.8,
        offset: 50, // move trigger to center of element
        reverse: false // only do once
    })
    .setClassToggle("section.section6 .desktop-w .wrap .popUp", "animate")
    .addTo(controller);

    new ScrollMagic.Scene({
        triggerElement: ".section6",
        triggerHook: 0.7,
        offset: 50, // move trigger to center of element
        reverse: false // only do once
    })
    .setClassToggle("section.section6 .desktop-w .wrap .wishes", "animate")
    .addTo(controller);

    //SECTION 7
    new ScrollMagic.Scene({
        triggerElement: ".section7",
        triggerHook: 0.7,
        offset: 50, // move trigger to center of element
        reverse: false // only do once
    })
    .setClassToggle("section.section7 .desktop-md .wrap .block", "animate")
    .addTo(controller);

    //SECTION 8
    new ScrollMagic.Scene({
        triggerElement: ".section8",
        triggerHook: 0.7,
        offset: 50, // move trigger to center of element
        reverse: false // only do once
    })
    .setClassToggle("section.section8 .desktop-w .wrap", "animate")
    .addTo(controller);

    //SECTION AUTHOR
    new ScrollMagic.Scene({
        triggerElement: ".author",
        triggerHook: 0.9,
        offset: 50, // move trigger to center of element
        reverse: false // only do once
    })
    .setClassToggle("section.author .desktop-w .item", "animate")
    .addTo(controller);
})