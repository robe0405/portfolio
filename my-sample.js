$("header a").hover(
  function(){
    $(this).css("color", "rgba(250, 250, 250, 0.8)").css("background-color", "rgba(0, 0, 0, 0.5)");
  },
  function(){
    $(this).css("color", "black").css("background-color", "");
  }
);


$('header a').click(function(){
    var id = $(this).attr('href');
    var position = $(id).offset().top;
    $('html, body').animate({
      'scrollTop': position
    }, 1600);
});

$("#title").fadeIn(4000);

const time = function(){
  $("#sab-title").fadeIn(4000);
};
setTimeout("time()", 3000);

$(".contact img").hover(
  function(){
    $(this).css("width", "90px").css("height", "90px")
  },
  function(){
    $(this).css("width", "80px").css("height", "80px")
  }
);

$(".pic2").hover(
  function(){
    $("#rev").fadeIn(3000);
  }
);
$(".pic3").hover(
  function(){
    $("#port").fadeIn(3000);
  }
);
$(".pic4").hover(
  function(){
    $("#eng").fadeIn(3000);
  }
);
