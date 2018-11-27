$(document).ready(function(){
    $(".dropdown-btn").on("click", function(){
        $(".dropdown-content").fadeToggle();
    });
    window.onclick = function(event) {
        if (!(event.target.matches('.dropdown-btn') 
        || event.target.matches(".heart-icon") 
        || event.target.matches(".dropdown-content")
        || event.target.matches(".dropdown-content-share-it")
        || event.target.matches(".dropdown-content-subscribe, .dropdown-content-subscribe h2, .dropdown-content-subscribe p, .dropdown-content-subscribe input, .dropdown-content-subscribe button")
        || event.target.matches(".dropdown-content div, .dropdown-content a")
        || event.target.matches(".share-it-icons"))) {
            $(".dropdown-content").fadeOut();
        }
    }
    $(".section-1-text").cycle("fade");
    const refreshRate = 1000 / 60;
    var maxXPosition = $(".section-2").width()*1.3;
    var positionX = [];
    var positionY = [];
    var fi = [];
    var startYPosition = $(".bubbles").position().top + $(".bubbles").height() * 0.5;
    var speedX = 0.5;
    var A = $(".bubbles").height() * 0.2;
    var W = (2 * 3.14) / ($(".section-2").width() * 0.98);
    for (var i = 0; i < 8; i++) {
        positionX[i] = 0 + i * maxXPosition/8;
        positionY[i] = startYPosition;
        fi[i] = Math.random()*1000;
    }
    $(".bubble").css("left", 0);
    window.setInterval(() => {
        var newPosX, newPosY;
        $('.bubble').each(function(index){
            if ($(this).css("display") == "none") {
                $(this).show();
            }
            newPosX = positionX[index] + speedX;
            if (newPosX > maxXPosition * 0.95) {
                newPosX = -0.5 * ($(".big_bubble").width() + $(".small_bubble").width());
                newPosY = startYPosition;
            } else {
                newPosY = startYPosition + (A * Math.sin(W * positionX[index]) - $(this).width()/2) + 15 * Math.sin(0.02 * positionX[index] + fi[index]);
            }
            positionX[index] = newPosX;
            $(this).css("transform", "translate(" + positionX[index] + "px, " + newPosY + "px)");
        });
    }, refreshRate);
    var board_words = ["innovative", "effective", "comfortable", "worthy", "fun", "", "", "", ""];
    var iteration = 0;
    $(".board-text").fadeOut(400, function(){
        $(this).html(board_words[iteration]);
        $(this).fadeIn(400);
    })
    window.setInterval(() =>{
        $(".board-text").fadeOut(400, function(){
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
        centerPadding :"50px",
        arrows: true,
        prevArrow: $(".slider-prev-btn"),
        nextArrow: $(".slider-next-btn")
    });
    $('.video').parent().click(function () {
        if($(this).children(".video").get(0).paused){
            $(this).children(".video").get(0).play();   
            $(this).children(".playpause").fadeOut();
        } else {       
            $(this).children(".video").get(0).pause();
            $(this).children(".playpause").fadeIn();
        }
    });
    $(".owl-carousel").owlCarousel({
        loop: true,
        dots: true,
        items: 1,
        autoplay: true,
        autoplayTimeout: 4000,
        autoplayHoverPause: true,
        animateIn: 'flipInX'
    });
    
    $.each($(".bubbles-right"), function(){
       var bubblecount = ($(this).width()/100)*5;
       for(var i = 0; i <= bubblecount; i++) {
          var size = ((Math.random()*40 + 40)/4);
          $(this).append('<span class="particle-r" style="top:' + (Math.random()*30 + 65) + '%; left:' + (Math.random()*50 + 20) + '%;width:' + size + 'px; height:' + size + 'px;animation-delay: ' + ((Math.random()*30)/10) + 's;"></span>');
       }
    });
    $.each($(".bubbles-left"), function(){
       var bubblecount = ($(this).width()/100)*5;
       for(var i = 0; i <= bubblecount; i++) {
          var size = ((Math.random()*40 + 40)/4);
          $(this).append('<span class="particle-l" style="top:' + (Math.random()*30 + 65) + '%; left:' + (Math.random()*50 + 20) + '%;width:' + size + 'px; height:' + size + 'px;animation-delay: ' + ((Math.random()*30)/10) + 's;"></span>');
       }
    });
    $.each($(".board-bubbles-right"), function(){
        // var bubblecount = ($(this).width()/100)/2;
        var bubblecount = 5;
        for(var i = 0; i <= bubblecount; i++) {
           var size = ((Math.random()*40 + 40)/2);
           $(this).append('<span class="particle-ll" style="top:' + (Math.random()*30 + 70) + '%; left:' + (Math.random()*30 - 40) + '%;width:' + size + 'px; height:' + size + 'px;animation-delay: ' + ((Math.random()*30)/10) + 's;"></span>');
        }
     });
     $.each($(".board-bubbles-left"), function(){
         var bubblecount = ($(this).width()/100)/2;
         for(var i = 0; i <= bubblecount; i++) {
            var size = ((Math.random()*40 + 40)/2);
            $(this).append('<span class="particle-rr" style="top:' + (Math.random()*30 + 70) + '%; left:' + (Math.random()*30 + 100) + '%;width:' + size + 'px; height:' + size + 'px;animation-delay: ' + ((Math.random()*30)/10) + 's;"></span>');
         }
      });
});