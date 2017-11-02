$(document).ready(function() {
  $("button[data-action='reset']").on("click", function(){
    localStorage.clear();
    location.reload();
  });

  if (localStorage.getItem("imageNumber") == null) {
    localStorage.setItem("imageNumber", "1");
    var number = localStorage.getItem("imageNumber");
    $("img[data-number!=" + number + "]").addClass("hidden");
    $("img[data-number=" + number + "]").removeClass("hidden");
    // debugger;
  }
  else {
    var number = localStorage.getItem("imageNumber");
    $("img[data-number !=" + number + "]").addClass("hidden");
    $("img[data-number =" + number + "]").removeClass("hidden");
    // debugger;
  }

  if (localStorage.getItem("dotState") == null) {
    localStorage.setItem("dotState", "1");
    var number = localStorage.getItem("dotState");
    $("div[data-dot != "+ number +"]").addClass("white").removeClass("black");
    $("div[data-dot = "+ number +"]").addClass("black").removeClass("white");
  }
  else {
    // debugger;
    var number = localStorage.getItem("dotState");
    $("div[data-dot != "+ number +"]").addClass("white").removeClass("black");
    $("div[data-dot = "+ number +"]").addClass("black").removeClass("white");
  }


  $("button[data-button='left']").on("click", function(){
    var length = $("img[data-number]").length;
    var imageNumber = parseInt(localStorage.getItem("imageNumber")) - 1;
    localStorage.setItem("imageNumber", imageNumber.toString());
    var dotNumber = parseInt(localStorage.getItem("dotState")) - 1;
    localStorage.setItem("dotState", dotNumber.toString());
    if ($("img[data-number = " + imageNumber + "]").length == 0) {
      $("img[data-number = " + length + "]").removeClass("hidden");
      $("img[data-number != " + length + "]").addClass("hidden");
      $("div[data-dot != " + length + "]").removeClass("black").addClass("white");
      $("div[data-dot = " + length + "]").removeClass("white").addClass("black");
      localStorage.setItem("imageNumber", length);
      localStorage.setItem("dotState", length);
    }
    else {
      $("img[data-number != " + imageNumber + "]").addClass("hidden");
      $("img[data-number = " + imageNumber + "]").removeClass("hidden");
      $("div[data-dot != " + dotNumber + "]").removeClass("black").addClass("white");
      $("div[data-dot = " + dotNumber + "]").removeClass("white").addClass("black");
    }
  });

  $("button[data-button='right']").on("click", function(){
    var imageNumber = parseInt(localStorage.getItem("imageNumber")) + 1;
    localStorage.setItem("imageNumber", imageNumber.toString());
    var dotNumber = parseInt(localStorage.getItem("dotState")) + 1;
    localStorage.setItem("dotState", dotNumber.toString());
    if ($("img[data-number = " + imageNumber + "]").length == 0) {
      $("img[data-number = '1']").removeClass("hidden");
      $("img[data-number != '1']").addClass("hidden");
      $("div[data-dot != '1']").removeClass("black").addClass("white");
      $("div[data-dot = '1']").removeClass("white").addClass("black");
      localStorage.setItem("imageNumber", "1");
      localStorage.setItem("dotState", "1");
      // debugger;
      // if right then go to data-number = 1 same for left but reverse
    }
    else {
      $("img[data-number != " + imageNumber + "]").addClass("hidden");
      $("img[data-number = " + imageNumber + "]").removeClass("hidden");
      $("div[data-dot != " + dotNumber + "]").removeClass("black").addClass("white");
      $("div[data-dot = " + dotNumber + "]").removeClass("white").addClass("black");
    }
    // debugger;
  });

  $("div[data-dot]").on("click", function(){
    var number = $(this).data("dot");
    // console.log($(this));
    $("img[data-number = "+ number +" ]").removeClass("hidden");
    $("img[data-number != "+ number +"]").addClass("hidden");
    localStorage.setItem("imageNumber", number);
    $("div[data-dot != "+ number +"]").removeClass("black").addClass("white");
    $("div[data-dot = "+ number +"]").removeClass("white").addClass("black");
    localStorage.setItem("dotState", number);
    // debugger;
  });
});
