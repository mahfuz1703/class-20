$(function(){
    $("#fadeout").click(function(){
        $(".box").fadeOut(300)
    });

    $("#fadein").click(function(){
        $(".box").fadeIn(300)
    });

    $("#box-2-come").click(function(){
        $(".box").addClass("box-2")
    });

    $("#box-2-go").click(function(){
        $(".box").removeClass("box-2")
    });

    $("#box-2-come-go").click(function(){
        $(".box").toggleClass("box-2")
    });

    $("#switch-on").click(function(){
        $(".light").addClass("light-2")
    });

    $("#switch-off").click(function(){
        $(".light").removeClass("light-2")
    });

    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });


});


(function () {
    const second = 1000,
          minute = second * 60,
          hour = minute * 60,
          day = hour * 24;
  
    //I'm adding this section so I don't have to keep updating this pen every year :-)
    //remove this if you don't need it
    let today = new Date(),
        dd = String(today.getDate()).padStart(2, "0"),
        mm = String(today.getMonth() + 1).padStart(2, "0"),
        yyyy = today.getFullYear(),
        nextYear = yyyy + 1,
        dayMonth = "01/01/",
        birthday = dayMonth + yyyy;
    
    today = mm + "/" + dd + "/" + yyyy;
    if (today > birthday) {
      birthday = dayMonth + nextYear;
    }
    //end
    
    const countDown = new Date(birthday).getTime(),
        x = setInterval(function() {    
  
          const now = new Date().getTime(),
                distance = countDown - now;
  
          document.getElementById("days").innerText = Math.floor(distance / (day)),
            document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
            document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
            document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);
  
          //do something later when date is reached
          if (distance < 0) {
            document.getElementById("headline").innerText = "It's my birthday!";
            document.getElementById("countdown").style.display = "none";
            document.getElementById("content").style.display = "block";
            clearInterval(x);
          }
          //seconds
        }, 0)
    }());