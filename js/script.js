$(document).ready(function () {
    $(".dropdown-btn").on("click", function () {
        var dropdown = $(".dropdown-content");
        if ($(".mobile").css("display") == "none") {
            dropdown.fadeToggle();
        } else {
            if (dropdown.css("display") == "none") {
                dropdown.css({ "display": "block" });
                dropdown.animate({ "right": "0" }, 500);
            } else {
                dropdown.animate({ "right": "-350px" }, 500, function () {
                    dropdown.css({ "display": "none" });
                });
            }
        }
    });

    $('.balloon').each(animateDiv);

    window.onclick = function (event) {
        if (!(event.target.matches('.dropdown-btn')
            || event.target.matches(".heart-icon")
            || event.target.matches(".dropdown-content")
            || event.target.matches(".dropdown-content-share-it")
            || event.target.matches(".dropdown-content-subscribe, .dropdown-content-subscribe h2, .dropdown-content-subscribe p, .dropdown-content-subscribe input, .dropdown-content-subscribe button")
            || event.target.matches(".dropdown-content div, .dropdown-content a")
            || event.target.matches(".share-it-icons"))) {
            var dropdown = $(".dropdown-content");
            if ($(".mobile").css("display") == "none") {
                dropdown.fadeOut();
            } else {
                if (dropdown.css("display") == "block") {
                    dropdown.animate({ "right": "-350px" }, 1000, function () {
                        dropdown.css({ "display": "none" });
                    });
                }
            }
        }
    }
    $(".section-1-text").cycle({
        timeout: 1
    });
    const refreshRate = 1000 / 60;
    var part = "", maxXPositionCoeff;
    if ($(".desktop").css("display") == "none") {
        part = ".mobile";
        maxXPositionCoeff = 3.2;
        var maxXPosition = $(part + " .section-2").width() * maxXPositionCoeff;
        var positionX = [];
        var positionY = [];
        var fi = [];
        var startYPosition = $(part + " .section-2").height() * 0.18;
        var speedX = 0.5;
        var A = $(part + " .bubbles").height() * 0.09;
        var W = (2 * 3.14) / ($(part + " .section-2").width() * 0.98);
        for (var i = 0; i < 8; i++) {
            positionX[i] = -i * maxXPosition / 8;
            positionY[i] = startYPosition;
            fi[i] = Math.random() * 1000;
        }
        $(part + " .bubble").css("left", 0);
        window.setInterval(() => {
            var newPosX, newPosY;
            $(part + ' .bubble').each(function (index) {
                if ($(this).css("display") == "none") {
                    $(this).css("display", "flex");
                }
                newPosX = positionX[index] + speedX;
                if (newPosX > maxXPosition * 0.95) {
                    newPosX = -125;
                    newPosY = startYPosition;
                } else {
                    newPosY = startYPosition + (A * Math.sin(W * positionX[index]) - $(this).width() / 2) + 8 * Math.sin(0.03 * positionX[index] + fi[index]);
                }
                positionX[index] = newPosX;
                $(this).css("transform", "translate(" + positionX[index] + "px, " + newPosY + "px)");
            });
        }, refreshRate);
    } else {
        part = ".desktop";
        maxXPositionCoeff = 1.3;
        var maxXPosition = $(part + " .section-2").width() * maxXPositionCoeff;
        var positionX = [];
        var positionY = [];
        var fi = [];
        var startYPosition = $(part + " .bubbles").position().top + $(part + " .bubbles").height() * 0.5;
        var speedX = 0.5;
        var A = $(part + " .bubbles").height() * 0.2;
        var W = (2 * 3.14) / ($(part + " .section-2").width() * 0.98);
        for (var i = 0; i < 8; i++) {
            positionX[i] = 0 + i * maxXPosition / 8;
            positionY[i] = startYPosition;
            fi[i] = Math.random() * 1000;
        }
        $(part + " .bubble").css("left", 0);
        window.setInterval(() => {
            var newPosX, newPosY;
            $(part + ' .bubble').each(function (index) {
                if ($(this).css("display") == "none") {
                    $(this).css("display", "flex");
                }
                newPosX = positionX[index] + speedX;
                if (newPosX > maxXPosition * 0.95) {
                    newPosX = -0.5 * ($(".big_bubble").width() + $(".small_bubble").width());
                    newPosY = startYPosition;
                } else {
                    newPosY = startYPosition + (A * Math.sin(W * positionX[index]) - $(this).width() / 2) + 15 * Math.sin(0.02 * positionX[index] + fi[index]);
                }
                positionX[index] = newPosX;
                $(this).css("transform", "translate(" + positionX[index] + "px, " + newPosY + "px)");
            });
        }, refreshRate);
    }

    var board_words = ["innovative", "effective", "comfortable", "worthy", "fun", "", "", "", ""];
    var iteration = 0;
    $(".board-text").fadeOut(400, function () {
        $(this).html(board_words[iteration]);
        $(this).fadeIn(400);
    })
    window.setInterval(() => {
        $(".board-text").fadeOut(400, function () {
            $(this).html(board_words[iteration]);
            $(this).fadeIn(400);
        })
        iteration++;
        if (iteration == board_words.length) {
            iteration = 0;
        }
    }, 1666.66666);
    $(".slides").slick({
        dots: true,
        centerPadding: "50px",
        arrows: true,
        prevArrow: $(".slider-prev-btn"),
        nextArrow: $(".slider-next-btn")
    });
    $('.video').parent().click(function () {
        if ($(this).children(".video").get(0).paused) {
            $(this).children(".video").get(0).play();
            $(this).children(".playpause").fadeOut();
        } else {
            $(this).children(".video").get(0).pause();
            $(this).children(".playpause").fadeIn();
        }
    });
    $(".slickPrev").slick({
        // loop: true,
        // dots: true,
        // items: 3,
        // autoplay: true,
        // autoplayTimeout: 4000,
        // autoplayHoverPause: true,
        // autoplayHoverPause: true,
        // animateOut: 'slideOutUp',
        // animateIn: 'slideInUp',
        // transitionStyle : "fade"
        slidesToShow: 3,
        arrows: false,
        slidesToScroll: 1,
        autoplay: true,
        vertical: true,
        verticalSwiping: true,
        infinite: true,
        adaptiveHeight: true
    });

    // objectFitVideos(document.querySelectorAll('.videos'));

    setInterval(function () {
        $(".slickPrev").slick("slickPrev");
    }, 2000);
    // window.setInterval(function(){$('button').trigger('click');}, 1000);


    $.each($(".bubbles-right"), function () {
        var bubblecount = ($(this).width() / 100) * 5;
        for (var i = 0; i <= bubblecount; i++) {
            var size = ((Math.random() * 40 + 40) / 4);
            $(this).append('<span class="particle-r" style="top:' + (Math.random() * 30 + 65) + '%; left:' + (Math.random() * 50 + 20) + '%;width:' + size + 'px; height:' + size + 'px;animation-delay: ' + ((Math.random() * 30) / 10) + 's;"></span>');
        }
    });
    $.each($(".bubbles-left"), function () {
        var bubblecount = ($(this).width() / 100) * 5;
        for (var i = 0; i <= bubblecount; i++) {
            var size = ((Math.random() * 40 + 40) / 4);
            $(this).append('<span class="particle-l" style="top:' + (Math.random() * 30 + 65) + '%; left:' + (Math.random() * 50 + 20) + '%;width:' + size + 'px; height:' + size + 'px;animation-delay: ' + ((Math.random() * 30) / 10) + 's;"></span>');
        }
    });
    $.each($(".board-bubbles-right"), function () {
        var bubblecount = 5;
        for (var i = 0; i <= bubblecount; i++) {
            var size = ((Math.random() * 40 + 40) / 2);
            $(this).append('<span class="particle-ll" style="top:' + (Math.random() * 30 + 70) + '%; left:' + (Math.random() * 30 - 40) + '%;width:' + size + 'px; height:' + size + 'px;animation-delay: ' + ((Math.random() * 30) / 10) + 's;"></span>');
        }
    });
    $.each($(".board-bubbles-left"), function () {
        var bubblecount = ($(this).width() / 100) / 2;
        for (var i = 0; i <= bubblecount; i++) {
            var size = ((Math.random() * 40 + 40) / 2);
            $(this).append('<span class="particle-rr" style="top:' + (Math.random() * 30 + 70) + '%; left:' + (Math.random() * 30 + 100) + '%;width:' + size + 'px; height:' + size + 'px;animation-delay: ' + ((Math.random() * 30) / 10) + 's;"></span>');
        }
    });
    var bubblecount, topPos, randomMax, posName, maxLeft;
    if ($(".desktop").css("display") == "none") {
        bubblecount = ($(".section-1").width() / 10);
        topPos = 12;
        randomMax = 88;
        maxLeft = 80;
        posName = "vh";
    } else {
        bubblecount = ($(".section-1").width() / 100) / 1.3;
        topPos = 6;
        randomMax = 40;
        maxLeft = 100;
        posName = "vw";
    }
    for (var i = 0; i <= bubblecount; i++) {
        var sizeBlue = ((Math.random() * randomMax + 40) / 2);
        var sizeGreen = ((Math.random() * randomMax + 40) / 2);
        $(".section-1").append('<span class="particle-blue" style="top:' + (Math.random() * randomMax + topPos) + posName + '; left:' + (Math.random() * maxLeft) + '%;width:' + sizeBlue + 'px; height:' + sizeBlue + 'px;animation-delay: ' + ((Math.random() * 30) / 10) + 's;"></span>');
        $(".section-1").append('<span class="particle-green" style="top:' + (Math.random() * randomMax + topPos) + posName + '; left:' + (Math.random() * maxLeft) + '%;width:' + sizeGreen + 'px; height:' + sizeGreen + 'px;animation-delay: ' + ((Math.random() * 30) / 10) + 's;"></span>');
    }
    var spoilers = $(".spoiler");
    spoilers.each(function () {
        var spoiler = $(this);
        spoiler.find(".spoiler-expand-btn").click(function () {
            if ($(this).hasClass("spoiler-open-btn")) {
                $(this).removeClass("spoiler-open-btn").addClass("spoiler-close-btn");
                spoiler.find(".spoiler-body").slideUp(1000);
            } else {
                $(this).removeClass("spoiler-close-btn").addClass("spoiler-open-btn");
                spoiler.find(".spoiler-body").slideDown(1000);
            }
        });
    });
    $(".hamburger").click(function () {
        $(this).toggleClass("is-active");
        if ($(".menu").css("display") == "none") {
            $(".menu").css({ "display": "flex" });
            $("body").css({ "overflow": "hidden" });
        } else {
            $(".menu").css({ "display": "none" });
            $("body").css({ "overflow": "auto" });

        }
    });
    $(".menu-item-science").click(function(){
        $(this).find("i").toggleClass("fa-angle-down").toggleClass("fa-angle-up");
        $(".menu-science-subitems").fadeToggle();

    });
 

});
    setInterval(function(){
       $('.change-img').addClass('display-1');
    },15000)
    setInterval(function(){
       $('.change-img').removeClass('display-1');
    },16000)

    document.getElementById("defaultOpen").click();
    document.getElementById("defaultOpen-block-6").click();
    document.getElementById("defaultOpen-block-7").click();

           
    function makeNewPosition(){
        
        // Get viewport dimensions (remove the dimension of the div)
        var h = $('.container-bubbles').height() - 50;
        var w = $('.container-bubbles').width() - 50;
        
        var nh = Math.floor(Math.random() * h);
        var nw = Math.floor(Math.random() * w);
        
        return [nh,nw];    
        
    }

    function animateDiv(){
      var el = $(this);
        var newq = makeNewPosition();
        var oldq = $(el).offset();
        var speed = calcSpeed([oldq.top, oldq.left], newq);
        
        $(el).animate({ top: newq[0], left: newq[1] }, speed, function(){
          animateDiv.apply(this);        
        });
        
    };


    function calcSpeed(prev, next) {
        
        var x = Math.abs(prev[1] - next[1]);
        var y = Math.abs(prev[0] - next[0]);
        
        var greatest = x > y ? x : y;
        
        var speedModifier = 1;

        var speed = Math.ceil(greatest/speedModifier);

        return speed;

    }

    function openTab(evt, componentName) {
        var i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("tabcontent");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }
        tablinks = document.getElementsByClassName("tablinks");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(" active", "");
        }
        document.getElementById(componentName).style.display = "block";
        evt.currentTarget.className += " active";
    }
    function openTabblock6(evt, componentName) {
        var i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("paper-2");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }
        tablinks = document.getElementsByClassName("tablinks-block-6");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(" active", "");
        }
        document.getElementById(componentName).style.display = "block";
        evt.currentTarget.className += " active";
    }
    function openTabsection7(evt, componentName) {
        var i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("tabcontent-section-7");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }
        tablinks = document.getElementsByClassName("tablinks-block-7");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(" active", "");
        }
        document.getElementById(componentName).style.display = "block";
        evt.currentTarget.className += " active";
    }