//header


var getHeaderBugger = document.querySelectorAll('.headerBugger');

for (let i = 0; i < getHeaderBugger.length; i++) {
    getHeaderBugger[i].addEventListener("mouseenter",function () {
        var setNewImg = './img/icon.avif';
        var getbannerImg = document.getElementById('bannerImgs');
        getbannerImg.src = setNewImg;
        var getMainHeader = document.getElementById('mainHeaderBar');
        getMainHeader.style.background = 'white';
        getMainHeader.style.color = 'black';
    });

    getHeaderBugger[i].addEventListener("mouseleave",function(){
        var getbannerImg = document.getElementById('bannerImgs');
        getbannerImg.src = './img/mainlogo.avif';
        var getMainHeader = document.getElementById('mainHeaderBar');
        getMainHeader.style.background = 'transparent';
        getMainHeader.style.color = 'white';
    });
}

//footer
const getYear = document.getElementById('getYear');
const DateNow = new Date().getFullYear();
getYear.innerText=DateNow;


//jquery secction 

$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        responsiveClass:true,
        responsive:{
            0:{
                items:3,
                nav:true
            },
            600:{
                items:4,
                nav:false
            },
            1000:{
                items:8,
                nav:true,
                loop:false
            }
        }
    })


    const hoverIcon = [
        './img/hovericon1.png',
        './img/hovericon2.png',
        './img/hovericon3.png',
        './img/hovericon4.png',
    ];

    const defaultIcon = [
        './img/icon1.png',
        './img/icooon2.avif',
        './img/icon3.avif',
        './img/icon4.avif'
    ];

    var businessCards = $('.navcard');
    $.each(businessCards,function(idx,val){
        $(this).hover(function(){
            var hoverBusinessIcon = $(this).children('.navcardIcon').children('img');
            hoverBusinessIcon.attr('src',hoverIcon[idx]);
        },function(){
            var hoverBusinessIcon = $(this).children('.navcardIcon').children('img');
            hoverBusinessIcon.attr('src',defaultIcon[idx]);
        });
    });

    $('#offerSlides').lightSlider({
        item:7  ,
        loop:true,
        slideMove:2,
        easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
        speed:600,
        responsive : [
            {
                breakpoint:800,
                settings: {
                    item:3,
                    slideMove:1,
                    slideMargin:6,
                  }
            },
            {
                breakpoint:480,
                settings: {
                    item:2,
                    slideMove:1
                  }
            }
        ]
    });  


    $(window).scroll(function() {
        var scrollTop = $(window).scrollTop();
        if ( scrollTop >= 120 ) {
            $('.main-headers').addClass('toggleNav');
            $('#bannerImgs').attr('src','./img/icon.avif');
            $('.nav-input-boxs').removeClass('hidden');
            $('.nav-input-boxs').addClass('block');
        }else{
            $('.main-headers').removeClass('toggleNav');
            $('#bannerImgs').attr('src','./img/mainlogo.avif');
            $('.nav-input-boxs').removeClass('block');
            $('.nav-input-boxs').addClass('hidden');
        }

        if ( scrollTop >= 300 ) {
            $('.backTotop').addClass('block');
            $('.backTotop').removeClass('hidden');
        }else{
            $('.backTotop').removeClass('block');
            $('.backTotop').addClass('hidden');
        }
      });

})